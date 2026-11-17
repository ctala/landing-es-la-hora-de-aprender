#!/usr/bin/env node
/**
 * check-contenido.mjs — candado de guías y glosario. Corre en cada `npm run build`.
 *
 * Existe para que dos reglas no dependan de que alguien se acuerde:
 *
 *  1. FECHA REAL. `updatedAt` alimenta `dateModified` del schema y el «Actualizada:» visible.
 *     Solo se mueve cuando cambia el texto. Una fecha fresca sin cambio de contenido es un
 *     engaño que los buscadores pueden penalizar (17-nov-2026: un script la movía sola al
 *     sumar cada episodio y cuatro guías decían «actualizada hoy» con texto de mayo).
 *
 *  2. EL EPISODIO DEJA TEXTO. Sumar un episodio a `relatedEpisodes` de una guía no la
 *     actualiza. Desde el episodio `coberturaDesde`, cada episodio listado tiene que estar
 *     citado en el cuerpo (`/episodios/NN-…`) o tener una dispensa con motivo escrito.
 *
 *  3. ESPAÑOL NEUTRO. Guías y glosario no llevan voseo («podés», «usá»): la audiencia es
 *     LATAM y España. El detector es el de la fábrica de cursos (`cursos/scripts/etapas/comun.py`,
 *     copia también en `car-video-studio/pipeline/qa/verify_voseo.py`): si se amplía una lista,
 *     se amplían las tres el mismo día.
 *
 *  4. ENLACES INTERNOS VIVOS. Un enlace a `/episodios/…/`, `/guias/…/` o `/glosario/…/` que no
 *     corresponde a un archivo existente bloquea (17-nov-2026: un slug de episodio escrito de
 *     memoria compiló sin aviso).
 *
 * Cómo funciona: `scripts/contenido.lock.json` guarda, por archivo, la huella del contenido
 * y su `updatedAt`. El chequeo compara el estado actual contra ese registro. No usa git, así
 * que corre igual en local y en Cloudflare Pages.
 *
 * «Contenido» = el cuerpo + title/term + description + aliases + faq + resources.
 * NO es contenido: updatedAt, relatedEpisodes, relatedGuides, relatedGlossary, keywords,
 * seoTitle, seoDescription, funnel y el resto de los metadatos.
 *
 * Uso:
 *   node scripts/check-contenido.mjs                       chequea (lo que corre el build)
 *   node scripts/check-contenido.mjs --registrar           registra los cambios coherentes
 *   node scripts/check-contenido.mjs --menor "motivo" a.md registra un cambio de texto SIN
 *                                                          mover la fecha (errata, enlace roto)
 *   node scripts/check-contenido.mjs --sin-texto <guia> <episodio> "motivo"
 *                                                          dispensa: el episodio se lista y
 *                                                          no deja texto en esa guía
 *   --root <dir>   raíz del repo (para las pruebas)
 *   --hoy <fecha>  fecha de hoy AAAA-MM-DD (para las pruebas)
 */
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const CAMPOS_DE_CONTENIDO = ['title', 'term', 'description', 'aliases', 'faq', 'resources'];
const COLECCIONES = ['guias', 'glosario'];
const MOTIVO_MINIMO = 12;

// ---------- voseo (port de cursos/scripts/etapas/comun.py; lista cerrada + terminación) ----------
const VOSEO = new Set(`
activá agarrá andá anotá armá bajá buscá cambiá cargá cerrá conectá configurá consultá copiá creá decí dejá
descargá documentá ejecutá empezá escalá explorá generá guardá hacé implementá instalá listá llamá llegá mantené
marcá mirá mové pasá pegá probá sumá tené tomá validá vení aislá fijate acordate andate anotalo miralo armalo
abrís activás agarrás anotás armás bajás buscás cambiás cargás compartís conectás configurás construís copiás
creás creés decidís decís definís dejás documentás ejecutás elegís encontrás escalás esperás generás hacés
implementás insertás leés llamás manejás mirás necesitás obtenés pasás pedís perdés podés preferís probás
publicás querés respetás respondés sabés salís subís tenés validás vivís aislás listás
poné volvé corré leé barré aprendé comprendé vendé devolvé resolvé respondé escogé obtené proponé suponé exponé
traé usalo hacelo hacela decile decime mandale pasale revisalo guardalo sumalo agregalo mostrale contale
preguntale avisale avisame dejalo probalo tenelo sacalo copialo pegalo bajalo subilo escribilo elegilo asegurate
envolvé usá usás
`.split(/\s+/).filter(Boolean));
const NO_VOSEO = new Set(`
estás vas atrás jamás demás además quizás más país compás después interés francés inglés través cortés revés
anís maíz portugués japonés está estés dés allá ojalá quizá mamá papá sofá maná detrás satanás estrés arnés
ciprés exprés marqués burgués holandés escocés irlandés finlandés danés libanés tailandés cordobés montañés
cafés comités bebés clichés sofás mamás papás bogotá panamá canadá paraná parís tomás nicolás jonás andrés
moisés inés ginés valdés solís luís
`.split(/\s+/).filter(Boolean));
const PALABRA = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g;
const FUTURO = /(ar|er|ir|dr|br|rr)$/;

function esVoseo(palabra) {
  const w = palabra.toLowerCase();
  if (VOSEO.has(w) || w === 'vos' || (w === 'sos' && palabra !== palabra.toUpperCase())) return true;
  if (w.length < 4 || NO_VOSEO.has(w)) return false;
  if (/(ás|és|ís)$/.test(w)) return !(w.endsWith('ás') && FUTURO.test(w.slice(0, -2)));
  if (w.endsWith('á')) return !FUTURO.test(w.slice(0, -1));
  return false;
}

/** [{ linea, palabra }] con voseo. Ignora bloques de código, `código en línea` y URLs. */
export function voseoEn(texto) {
  const hallados = [];
  let enBloque = false;
  texto.split(/\r?\n/).forEach((l, i) => {
    if (/^\s*```/.test(l)) { enBloque = !enBloque; return; }
    if (enBloque) return;
    const limpio = l.replace(/`[^`]*`/g, ' ').replace(/\]\([^)]*\)/g, '] ').replace(/https?:\/\/\S+/g, ' ');
    for (const p of limpio.match(PALABRA) ?? []) if (esVoseo(p)) hallados.push({ linea: i + 1, palabra: p });
  });
  return hallados;
}

function leerArgs(argv) {
  const a = { modo: 'chequear', root: null, hoy: null, resto: [] };
  for (let i = 0; i < argv.length; i++) {
    const x = argv[i];
    if (x === '--registrar') a.modo = 'registrar';
    else if (x === '--menor') { a.modo = 'menor'; a.motivo = argv[++i]; }
    else if (x === '--sin-texto') { a.modo = 'sin-texto'; a.guia = argv[++i]; a.episodio = Number(argv[++i]); a.motivo = argv[++i]; }
    else if (x === '--root') a.root = argv[++i];
    else if (x === '--hoy') a.hoy = argv[++i];
    else a.resto.push(x);
  }
  return a;
}

function partir(texto, ruta) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(texto);
  if (!m) throw new Error(`${ruta}: no tiene frontmatter`);
  return { fm: yaml.load(m[1]) ?? {}, cuerpo: m[2] };
}

function ordenar(v) {
  if (Array.isArray(v)) return v.map(ordenar);
  if (v && typeof v === 'object' && !(v instanceof Date)) {
    return Object.fromEntries(Object.keys(v).sort().map((k) => [k, ordenar(v[k])]));
  }
  return v instanceof Date ? v.toISOString().slice(0, 10) : v;
}

function huella(fm, cuerpo) {
  const contenido = {};
  for (const k of CAMPOS_DE_CONTENIDO) if (fm[k] !== undefined) contenido[k] = ordenar(fm[k]);
  const normal = cuerpo.replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, '').trim();
  return createHash('sha256').update(JSON.stringify({ contenido, cuerpo: normal })).digest('hex').slice(0, 16);
}

function fecha(v) {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return v === undefined || v === null ? null : String(v);
}

const CARPETA = { episodios: 'episodes', guias: 'guias', glosario: 'glosario' };

/** Enlaces internos del texto que no apuntan a un archivo de contenido existente. */
export function enlacesRotos(texto, root) {
  const rotos = [];
  const visto = new Set();
  for (const m of texto.matchAll(/\]\(\/(episodios|guias|glosario)\/([^/)#?\s]+)\/?(?:[#?][^)]*)?\)/g)) {
    const url = `/${m[1]}/${m[2]}/`;
    if (visto.has(url)) continue;
    visto.add(url);
    if (!existsSync(join(root, 'src', 'content', CARPETA[m[1]], `${m[2]}.md`))) rotos.push(url);
  }
  return rotos;
}

export function leerEstado(root) {
  const estado = {};
  for (const col of COLECCIONES) {
    const dir = join(root, 'src', 'content', col);
    if (!existsSync(dir)) continue;
    for (const f of readdirSync(dir).filter((x) => x.endsWith('.md')).sort()) {
      const ruta = relative(root, join(dir, f)).split('\\').join('/');
      const crudo = readFileSync(join(dir, f), 'utf8');
      const { fm, cuerpo } = partir(crudo, ruta);
      estado[ruta] = {
        voseo: voseoEn(crudo),
        rotos: enlacesRotos(crudo, root),
        coleccion: col,
        slug: f.replace(/\.md$/, ''),
        hash: huella(fm, cuerpo),
        updatedAt: fecha(fm.updatedAt) ?? fecha(fm.date),
        tieneUpdatedAt: fm.updatedAt !== undefined,
        relatedEpisodes: Array.isArray(fm.relatedEpisodes) ? fm.relatedEpisodes : [],
        cuerpo,
      };
    }
  }
  return estado;
}

export function leerLock(root) {
  const p = join(root, 'scripts', 'contenido.lock.json');
  if (!existsSync(p)) return { version: 1, coberturaDesde: null, archivos: {}, cambiosMenores: [], sinTexto: [] };
  const lock = JSON.parse(readFileSync(p, 'utf8'));
  return { version: 1, coberturaDesde: null, archivos: {}, cambiosMenores: [], sinTexto: [], ...lock };
}

function guardarLock(root, lock) {
  const archivos = Object.fromEntries(Object.keys(lock.archivos).sort().map((k) => [k, lock.archivos[k]]));
  writeFileSync(join(root, 'scripts', 'contenido.lock.json'), JSON.stringify({ ...lock, archivos }, null, 2) + '\n');
}

/** Devuelve { errores, pendientes }. `pendientes` = cambios coherentes que falta registrar. */
export function evaluar(estado, lock, hoy) {
  const errores = [];
  const pendientes = [];
  const esFecha = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s ?? '');

  for (const [ruta, e] of Object.entries(estado)) {
    const reg = lock.archivos[ruta];
    if (e.voseo.length > 0) {
      errores.push(
        `${ruta}: voseo en ${e.voseo.map((v) => `«${v.palabra}» (línea ${v.linea})`).join(', ')}.\n` +
        `    Guías y glosario van en español neutro, de tú. Si es un falso positivo, agrégalo a NO_VOSEO con su caso.`,
      );
    }
    if (e.rotos.length > 0) {
      errores.push(`${ruta}: enlaces internos que no existen: ${e.rotos.join(', ')}.`);
    }
    if (!e.tieneUpdatedAt) { errores.push(`${ruta}: falta \`updatedAt\` en el frontmatter.`); continue; }
    if (!esFecha(e.updatedAt)) { errores.push(`${ruta}: \`updatedAt\` no es una fecha AAAA-MM-DD (${e.updatedAt}).`); continue; }
    if (e.updatedAt > hoy) { errores.push(`${ruta}: \`updatedAt\` (${e.updatedAt}) está en el futuro (hoy es ${hoy}).`); continue; }

    if (!reg) { pendientes.push({ ruta, tipo: 'nuevo' }); continue; }
    const cambioTexto = reg.hash !== e.hash;
    const cambioFecha = reg.updatedAt !== e.updatedAt;
    if (!cambioTexto && !cambioFecha) continue;
    if (!cambioTexto && cambioFecha) {
      errores.push(
        `${ruta}: \`updatedAt\` pasó de ${reg.updatedAt} a ${e.updatedAt} y el texto no cambió.\n` +
        `    La fecha solo se mueve con un cambio real de contenido. Vuelve a ${reg.updatedAt}.`,
      );
    } else if (cambioTexto && !cambioFecha) {
      errores.push(
        `${ruta}: el texto cambió y \`updatedAt\` sigue en ${reg.updatedAt}.\n` +
        `    Si es una actualización de contenido: pon la fecha de hoy y corre --registrar.\n` +
        `    Si es una errata o un enlace: node scripts/check-contenido.mjs --menor "motivo" ${ruta}`,
      );
    } else if (e.updatedAt < reg.updatedAt) {
      errores.push(`${ruta}: \`updatedAt\` retrocedió de ${reg.updatedAt} a ${e.updatedAt} con un cambio de texto.`);
    } else {
      pendientes.push({ ruta, tipo: 'actualizado' });
    }
  }
  for (const ruta of Object.keys(lock.archivos)) {
    if (!estado[ruta]) pendientes.push({ ruta, tipo: 'borrado' });
  }

  // Regla 2: el episodio listado deja texto en la guía.
  if (Number.isInteger(lock.coberturaDesde)) {
    for (const [ruta, e] of Object.entries(estado)) {
      if (e.coleccion !== 'guias') continue;
      for (const n of e.relatedEpisodes) {
        if (!Number.isInteger(n) || n < lock.coberturaDesde) continue;
        const nn = String(n).padStart(2, '0');
        const citado = new RegExp(`/episodios/${nn}-`).test(e.cuerpo);
        const dispensa = lock.sinTexto.some((d) => d.guia === e.slug && d.episodio === n);
        if (!citado && !dispensa) {
          errores.push(
            `${ruta}: lista el episodio ${n} en \`relatedEpisodes\` y el cuerpo no lo cita.\n` +
            `    Sumar el episodio no actualiza la guía: agrega lo que ese episodio cambia, con su enlace /episodios/${nn}-…/\n` +
            `    Si de verdad no aporta nada a esta guía: node scripts/check-contenido.mjs --sin-texto ${e.slug} ${n} "motivo"`,
          );
        }
      }
    }
  }
  return { errores, pendientes };
}

function avisosDeGlosario(estado, lock) {
  if (!Number.isInteger(lock.coberturaDesde)) return [];
  const enGuias = new Set();
  const enGlosario = new Set();
  for (const e of Object.values(estado)) {
    for (const n of e.relatedEpisodes) (e.coleccion === 'guias' ? enGuias : enGlosario).add(n);
  }
  return [...enGuias].filter((n) => n >= lock.coberturaDesde && !enGlosario.has(n)).sort((a, b) => a - b)
    .map((n) => `episodio ${n}: ninguna entrada del glosario lo referencia (se espera 1 a 3 términos por episodio).`);
}

export function correr(argv, salida = console) {
  const args = leerArgs(argv);
  const root = args.root ?? join(fileURLToPath(new URL('.', import.meta.url)), '..');
  const hoy = args.hoy ?? new Date(Date.now() + 14 * 3600 * 1000).toISOString().slice(0, 10); // holgura de zona horaria
  const estado = leerEstado(root);
  const lock = leerLock(root);

  if (args.modo === 'menor') {
    if (!args.motivo || args.motivo.trim().length < MOTIVO_MINIMO) { salida.error('✗ --menor exige un motivo escrito.'); return 1; }
    if (args.resto.length === 0) { salida.error('✗ --menor exige al menos un archivo.'); return 1; }
    for (const ruta of args.resto) {
      const e = estado[ruta];
      const reg = lock.archivos[ruta];
      if (!e || !reg) { salida.error(`✗ ${ruta}: no existe o no está registrado.`); return 1; }
      if (e.updatedAt !== reg.updatedAt) { salida.error(`✗ ${ruta}: --menor es para cambios SIN mover la fecha, y \`updatedAt\` cambió.`); return 1; }
      lock.archivos[ruta] = { hash: e.hash, updatedAt: e.updatedAt };
      lock.cambiosMenores.push({ archivo: ruta, fecha: hoy, motivo: args.motivo.trim() });
      salida.log(`✓ ${ruta}: cambio menor registrado, fecha intacta (${e.updatedAt}).`);
    }
    guardarLock(root, lock);
    return 0;
  }

  if (args.modo === 'sin-texto') {
    const guia = Object.values(estado).find((e) => e.coleccion === 'guias' && e.slug === args.guia);
    if (!guia) { salida.error(`✗ no existe la guía «${args.guia}».`); return 1; }
    if (!Number.isInteger(args.episodio)) { salida.error('✗ el episodio tiene que ser un número.'); return 1; }
    if (!args.motivo || args.motivo.trim().length < MOTIVO_MINIMO) { salida.error('✗ --sin-texto exige un motivo escrito.'); return 1; }
    lock.sinTexto = lock.sinTexto.filter((d) => !(d.guia === args.guia && d.episodio === args.episodio));
    lock.sinTexto.push({ guia: args.guia, episodio: args.episodio, fecha: hoy, motivo: args.motivo.trim() });
    guardarLock(root, lock);
    salida.log(`✓ dispensa registrada: ${args.guia} lista el episodio ${args.episodio} sin texto.`);
    return 0;
  }

  const { errores, pendientes } = evaluar(estado, lock, hoy);

  if (errores.length > 0) {
    salida.error(`\n✗ check-contenido: ${errores.length} problema(s) en guías o glosario\n`);
    for (const e of errores) salida.error(`  • ${e}\n`);
    return 1;
  }

  if (args.modo === 'registrar') {
    for (const p of pendientes) {
      if (p.tipo === 'borrado') delete lock.archivos[p.ruta];
      else lock.archivos[p.ruta] = { hash: estado[p.ruta].hash, updatedAt: estado[p.ruta].updatedAt };
      salida.log(`✓ ${p.tipo}: ${p.ruta}${p.tipo === 'borrado' ? '' : ` (${estado[p.ruta].updatedAt})`}`);
    }
    guardarLock(root, lock);
    salida.log(pendientes.length === 0 ? '✓ nada que registrar.' : `✓ ${pendientes.length} archivo(s) registrados en scripts/contenido.lock.json`);
    return 0;
  }

  if (pendientes.length > 0) {
    salida.error(`\n✗ check-contenido: ${pendientes.length} cambio(s) sin registrar\n`);
    for (const p of pendientes) salida.error(`  • ${p.tipo}: ${p.ruta}`);
    salida.error('\n  Corre `npm run contenido:registrar` y commitea scripts/contenido.lock.json junto al cambio.\n');
    return 1;
  }

  for (const a of avisosDeGlosario(estado, lock)) salida.warn(`⚠ check-contenido: ${a}`);
  salida.log(`✓ check-contenido: ${Object.keys(estado).length} archivos de guías y glosario con fecha coherente.`);
  return 0;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  process.exit(correr(process.argv.slice(2)));
}
