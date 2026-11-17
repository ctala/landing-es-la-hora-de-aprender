// Pruebas del candado de guías y glosario. Correr: node --test scripts/check-contenido.test.mjs
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { correr } from './check-contenido.mjs';

const HOY = '2026-11-17';
const mudo = { log() {}, warn() {}, error() {} };

function repo() {
  const root = mkdtempSync(join(tmpdir(), 'check-contenido-'));
  mkdirSync(join(root, 'scripts'));
  mkdirSync(join(root, 'src', 'content', 'guias'), { recursive: true });
  mkdirSync(join(root, 'src', 'content', 'glosario'), { recursive: true });
  return root;
}

function guia(root, { updatedAt = '2026-07-28', related = [28], cuerpo = 'Texto de la guía.', keywords = ['a'] } = {}) {
  writeFileSync(
    join(root, 'src', 'content', 'guias', 'agentes.md'),
    `---\ntitle: Agentes\ndescription: Guía\ndate: '2026-05-28'\nupdatedAt: '${updatedAt}'\nkeywords: ${JSON.stringify(keywords)}\nrelatedEpisodes: ${JSON.stringify(related)}\n---\n\n${cuerpo}\n`,
  );
}

const run = (root, ...args) => correr([...args, '--root', root, '--hoy', HOY], mudo);
const lock = (root) => JSON.parse(readFileSync(join(root, 'scripts', 'contenido.lock.json'), 'utf8'));

test('archivo nuevo sin registrar bloquea el build y --registrar lo deja pasar', () => {
  const root = repo();
  guia(root);
  assert.equal(run(root), 1);
  assert.equal(run(root, '--registrar'), 0);
  assert.equal(run(root), 0);
});

test('mover updatedAt sin cambiar el texto bloquea, y --registrar no lo blanquea', () => {
  const root = repo();
  guia(root);
  run(root, '--registrar');
  guia(root, { updatedAt: '2026-11-17' });
  assert.equal(run(root), 1);
  assert.equal(run(root, '--registrar'), 1);
  assert.equal(lock(root).archivos['src/content/guias/agentes.md'].updatedAt, '2026-07-28');
});

test('sumar un episodio o una palabra clave no es contenido: no pide fecha nueva', () => {
  const root = repo();
  guia(root);
  run(root, '--registrar');
  guia(root, { related: [29, 28], keywords: ['a', 'b'] });
  assert.equal(run(root), 0);
});

test('cambiar el texto sin mover la fecha bloquea', () => {
  const root = repo();
  guia(root);
  run(root, '--registrar');
  guia(root, { cuerpo: 'Texto nuevo de la guía.' });
  assert.equal(run(root), 1);
});

test('texto y fecha cambian juntos: pasa después de registrar', () => {
  const root = repo();
  guia(root);
  run(root, '--registrar');
  guia(root, { cuerpo: 'Texto nuevo de la guía.', updatedAt: '2026-11-17' });
  assert.equal(run(root), 1); // falta registrar
  assert.equal(run(root, '--registrar'), 0);
  assert.equal(run(root), 0);
});

test('una fecha en el futuro o que retrocede bloquea', () => {
  const root = repo();
  guia(root);
  run(root, '--registrar');
  guia(root, { cuerpo: 'Otro texto.', updatedAt: '2027-01-01' });
  assert.equal(run(root), 1);
  guia(root, { cuerpo: 'Otro texto.', updatedAt: '2026-06-01' });
  assert.equal(run(root), 1);
});

test('--menor registra una errata sin mover la fecha y exige motivo', () => {
  const root = repo();
  guia(root);
  run(root, '--registrar');
  guia(root, { cuerpo: 'Texto de la guia.' });
  assert.equal(run(root, '--menor', 'x', 'src/content/guias/agentes.md'), 1);
  assert.equal(run(root, '--menor', 'errata: faltaba una tilde', 'src/content/guias/agentes.md'), 0);
  assert.equal(run(root), 0);
  assert.equal(lock(root).cambiosMenores.length, 1);
});

test('desde coberturaDesde, un episodio listado tiene que estar citado en el cuerpo o tener dispensa', () => {
  const root = repo();
  guia(root);
  run(root, '--registrar');
  mkdirSync(join(root, 'src', 'content', 'episodes'));
  writeFileSync(join(root, 'src', 'content', 'episodes', '30-algo.md'), '---\ntitle: x\n---\n');
  const l = lock(root);
  l.coberturaDesde = 30;
  writeFileSync(join(root, 'scripts', 'contenido.lock.json'), JSON.stringify(l));

  guia(root, { related: [30, 28] });
  assert.equal(run(root), 1); // el 30 no está citado; el 28 es anterior a la línea base

  guia(root, { related: [30, 28], cuerpo: 'Lo vimos en el [episodio 30](/episodios/30-algo/).', updatedAt: '2026-11-17' });
  assert.equal(run(root, '--registrar'), 0);
  assert.equal(run(root), 0);

  guia(root, { related: [31, 30, 28], cuerpo: 'Lo vimos en el [episodio 30](/episodios/30-algo/).', updatedAt: '2026-11-17' });
  assert.equal(run(root), 1);
  assert.equal(run(root, '--sin-texto', 'agentes', '31', 'corto'), 1);
  assert.equal(run(root, '--sin-texto', 'agentes', '31', 'el episodio solo lo menciona de pasada'), 0);
  assert.equal(run(root), 0);
});

test('voseo bloquea; el futuro, el pretérito y los nombres propios no', () => {
  const root = repo();
  guia(root, { cuerpo: 'Con esto podrás empezar. Además, Tomás armó el suyo y está en producción. Dale una instrucción.' });
  assert.equal(run(root, '--registrar'), 0);
  guia(root, { cuerpo: 'Si querés, usá el agente.', updatedAt: '2026-11-17' });
  assert.equal(run(root, '--registrar'), 1);
});

test('un enlace interno a un episodio que no existe bloquea', () => {
  const root = repo();
  guia(root, { cuerpo: 'Lo vimos en el [episodio 5](/episodios/05-no-existe/).' });
  assert.equal(run(root, '--registrar'), 1);
  mkdirSync(join(root, 'src', 'content', 'episodes'));
  writeFileSync(join(root, 'src', 'content', 'episodes', '05-no-existe.md'), '---\ntitle: x\n---\n');
  assert.equal(run(root, '--registrar'), 0);
});
