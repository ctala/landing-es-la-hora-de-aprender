# Skill: Agregar un episodio nuevo al sitio

Instrucciones para agentes (OpenClaw, Claude Code, o cualquier LLM con acceso al repo) para crear un episodio nuevo en el sitio de "Es la Hora de Aprender".

Este documento es la **única fuente de verdad** para el flujo de publicación. Seguirlo garantiza: SEO correcto, schema válido, navegación consistente, y build limpio.

---

## Qué estás agregando

Un archivo Markdown en `src/content/episodes/XX-slug.md` donde:

- `XX` = número del episodio con cero-padding (ej. `10`, `11`)
- `slug` = descripción corta en kebab-case, en español, sin acentos, sin stopwords innecesarias

**El nombre del archivo ES la URL final**. Ejemplo: `10-automatizacion-pymes-2026.md` → `https://eslahoradeaprender.com/episodios/10-automatizacion-pymes-2026/`.

Nota: si el frontmatter incluye un campo `slug`, Astro lo usa en el routing — mantener consistencia entre filename y `slug` para evitar confusión.

**Nunca renombrar episodios ya publicados** — rompe links externos. Si el nombre resultó subóptimo, agregar redirect 301 en `public/_headers` en lugar de renombrar.

---

## Paso 1 — Recopilar datos del episodio

Antes de escribir nada, obtén del productor o de YouTube/Spotify:

- Título definitivo del episodio
- Número de episodio (siguiente al último en `src/content/episodes/`)
- Fecha de publicación (formato `YYYY-MM-DD`)
- Duración real (formato `MM:SS` o `H:MM:SS`)
- URL de YouTube + YouTube ID
- URL del episodio en Spotify
- Hosts participantes (nombre + URL LinkedIn)
- Descripción editorial en 2–3 oraciones (150–250 chars)
- Lista de 5–10 topics específicos mencionados

Si falta algo, **detente y pídelo** — no inventes datos.

---

## Paso 2 — Preparar el thumbnail

Guardar dos variantes WebP en `public/thumbnails/`:

- `public/thumbnails/epXX.webp` — 1280×720 (usado en meta og:image y para `-sm` variante)
- `public/thumbnails/epXX-sm.webp` — 648×365 (usado en la página del episodio)
- `public/thumbnails/epXX-xs.webp` — 400×225 (usado en cards de listado y home)

Si solo existe el thumbnail de YouTube `maxresdefault.jpg`, se puede omitir `thumbnail` en el frontmatter — el template cae al thumbnail de YouTube automáticamente, pero el resultado es subóptimo. Preferible generar las 3 variantes.

---

## Paso 3 — Crear el archivo .md

Crear `src/content/episodes/XX-slug.md` con este frontmatter exacto:

```yaml
---
title: "Título corto y descriptivo del episodio"
episode: XX                   # número entero
season: 1                     # por defecto 1
date: "YYYY-MM-DD"            # fecha publicación
duration: "MM:SS"             # o H:MM:SS
durationSeconds: NNNN         # total de segundos — usado para schema ISO 8601
youtube: "https://www.youtube.com/watch?v=VIDEOID"
youtubeId: "VIDEOID"
thumbnail: "/thumbnails/epXX.webp"
spotify: "https://open.spotify.com/episode/..."
description: "2-3 oraciones naturales, 150-250 chars, orientadas a humanos que ven una card."
seoTitle: "Título SEO optimizado | EP XX"           # 50-65 chars, palabra clave primero
seoDescription: "Descripción SEO 120-155 chars, responde intent, incluye keyword principal."
ogImage: "https://eslahoradeaprender.com/thumbnails/epXX.webp"
hosts:
  - name: "Cristian Tala"
    linkedin: "https://www.linkedin.com/in/ctala/"
  - name: "Diego Arias"
    linkedin: "https://www.linkedin.com/in/godiegoarias/"
  - name: "Rodrigo Rojo"
    linkedin: "https://www.linkedin.com/in/rodrigorojop/"
topics:
  - "Topic específico 1"
  - "Topic específico 2"
  # 5-10 topics. Descriptivos. Pueden contener varias palabras.
keywords:
  - "keyword long-tail en minúsculas"
  - "otra variación de búsqueda"
  # 5-10 keywords SEO realistas en español
relatedEpisodes: [X, Y, Z]      # 2-4 números de episodios relacionados por tema
---
```

### Reglas del frontmatter

- **title**: máx. 70 chars. Es lo que se muestra en la card y el H1. No agregues "| Es la Hora de Aprender" — eso se añade automáticamente si no hay `seoTitle`.
- **seoTitle**: si es distinto al `title`, prioriza la keyword principal. Este es el que va al `<title>` del HTML. Se muestra tal cual (no se le agrega el sufijo del sitio; inclúyelo si quieres).
- **seoDescription**: 120–155 caracteres. Pensada como meta description en SERP. Debe incluir la keyword principal y responder la intención.
- **description**: 150–250 chars. Usada en cards del home y listado. Más conversacional que la seoDescription.
- **duration / durationSeconds**: ambos son obligatorios. `durationSeconds` alimenta el schema `VideoObject.duration` como ISO 8601.
- **topics**: texto libre en español. Pueden ser frases. Se muestran como tags y en el futuro generarán páginas `/temas/{slug}`.
- **keywords**: son long-tail reales (piensa "qué escribiría alguien en Google"). Separadas y en minúsculas.
- **relatedEpisodes**: array de números de episodio (`[4, 5, 9]`) con los que este episodio comparte temas. El template resuelve automáticamente los slugs y renderiza un bloque "Episodios relacionados" al final. Reglas:
  - Números enteros positivos que existan en la colección. Si referenciás un número inexistente, el build falla con un mensaje claro.
  - No incluir el propio número del episodio (el build también lo rechaza).
  - Ideal: 2–4 episodios. Más de 4 satura visualmente. Elegir los que comparten topics o narrativa.
  - Opcional pero recomendado — es la forma **segura** de enlazar episodios relacionados: no tenés que escribir slugs a mano ni recordar casos especiales (ej. EP09 tiene un slug explícito distinto del filename).
- **No incluyas** datos sensibles, emails personales de invitados sin consentimiento, ni tokens.

---

## Paso 4 — Escribir el body del episodio (estándar editorial)

Después del frontmatter, escribe el cuerpo Markdown. **Este contenido sí se renderiza** — es lo que Google indexa y los usuarios leen.

**Decisión editorial del proyecto**: usamos **"editorial destilado"** — NO transcript crudo, NO muro de texto. Cada episodio se refactoriza a una pieza editorial de alta densidad semántica usando la conversación como fuente.

### Por qué no transcript crudo

- Signal-to-noise bajo (~40% contenido de valor, ~60% conversación de relleno) diluye señales temáticas.
- Duplicación con los auto-captions ya indexados en YouTube.
- AI Overviews (ChatGPT, Perplexity, Google AI) extraen mejor respuestas de H2/H3 + bullets + tablas que de diálogo.
- Mala UX: nadie escanea 10k palabras; sí escanea 1.800 bien estructuradas.
- Helpful Content System de Google premia densidad editorial y voz curada, no volumen de texto.

Si el usuario necesita el transcript textual, se ofrece vía YouTube captions (accesible, cumple WCAG, sin carga de mantenimiento).

### Estructura estándar — usar las 8 secciones

```markdown
[Intro: 60–100 palabras. Hook + promesa. Responde "¿por qué escuchar esto?"
No reuses el `description` del frontmatter; este es más extenso y con voz editorial.]

## Lo que vas a aprender

- Takeaway 1 — frase accionable, 15–25 palabras
- Takeaway 2 — ...
- Takeaway 3 — ...
- (3 a 5 bullets total, concretos, sin "hablamos sobre X" — usar "aprenderás a X")

## [Sección temática 1 — H2 en forma de pregunta]

[2–4 párrafos destilados. Cita hosts con blockquote cuando una frase sea fuerte.
Usa listas, negritas en términos clave, enlaces a otros episodios cuando apliquen.]

> "Cita literal de uno de los hosts que vale la pena preservar." — Cristian Tala

## [Sección temática 2 — otra pregunta o afirmación fuerte]

...

## [Sección temática 3]

...

[Entre 3 y 6 secciones temáticas. Cada sección cubre una idea distinta del episodio.]

## Tabla comparativa

[Incluir **solo** si el episodio compara herramientas, precios, modelos, opciones.
Si no aplica, omitir la sección.]

| Opción | Cuándo conviene | Costo |
|---|---|---|
| ... | ... | ... |

## Capítulos del episodio

- **00:02** — Introducción y bienvenida
- **05:30** — [Título del bloque]
- **12:45** — [Título del bloque]
- ... (8 a 15 marcas de tiempo, distribuidas a lo largo del episodio)

## Preguntas frecuentes

### ¿Pregunta 1 en formato literal de búsqueda?

[Respuesta de 40–80 palabras. Responde directo. Va a FAQ schema cuando exista el campo `faq[]`.]

### ¿Pregunta 2?

...

[3 a 6 FAQs. Son preguntas que alguien googlea. Usa intent real, no "¿De qué trata el episodio?".]

## Recursos mencionados

- **[Nombre de la herramienta/artículo](https://url)** — 1 línea de qué es y por qué es relevante.
- ...

[Agrupa por tipo si hay muchos: herramientas, artículos, libros, papers, videos.]

---

🌐 [eslahoradeaprender.com](https://eslahoradeaprender.com) · 🎧 [Spotify](https://open.spotify.com/show/7o7JR0Un1jc6wev0VjNm0C) · 📺 [YouTube](https://www.youtube.com/@EsLaHoraDeAprender_com)

_Accesibilidad: activa los subtítulos en el reproductor de YouTube para leer la conversación completa._
```

### Reglas del body

- **Longitud objetivo**: 1.500–2.500 palabras. Denso, escaneable, sin relleno.
- **No transcript crudo**. Si necesitas apoyar accesibilidad, enlaza a YouTube captions.
- **Jerarquía**: solo H2 (`##`) y H3 (`###`) — el H1 lo genera el template.
- **H2 en formato pregunta cuando aplique** ("¿Qué X conviene para Y?") — captura AI Overviews y featured snippets.
- **Primeros 60–100 palabras after H2**: idealmente respuesta directa a la pregunta (patrón de extracción para AI).
- **Escanabilidad**: listas, negritas en keywords, tablas, blockquotes. Evita párrafos largos sin anclas visuales.
- **Nombres propios técnicos**: verificar spelling — los transcripts automáticos fallan con "Qwen" (no "Cuen"), "Kimi", "OpenClaw" (no "Open Claw"), "MiniMax", "Anthropic", "Gemma", "Claude Opus", "Claude Sonnet", "GenSpark", "HeyGen", "Ollama", "Jensen Huang", nombres LATAM específicos, etc.
- **Enlaces internos**: enlaza a otros episodios con `/episodios/XX-slug` cuando el contenido esté relacionado.
- **Enlaces externos**: descriptivos en el anchor. No usar "click aquí".
- **Blockquotes**: `> "..." — Nombre Host` para citas textuales. Aportan textura editorial y señal de autoría.
- **Imágenes extra**: `public/images/epXX/foo.webp` + `![alt descriptivo](/images/epXX/foo.webp)` con `width`/`height` o Astro Image cuando se migre.
- **Privacidad**: no publicar nombres completos de terceros mencionados off-record, números de teléfono, emails, datos personales de invitados sin consentimiento explícito. Si el transcript fuente incluye algo así, anonimizar o remover.

### Qué NO incluir

- Transcript completo.
- Muletillas ("eh", "o sea", "cachai" repetitivos, "claro, claro, claro").
- Chistes internos sin contexto.
- Referencias circulares de la conversación ("como decía antes", "volviendo a lo de hace rato").
- Nombres propios de personas mencionadas que no son hosts ni figuras públicas, salvo consentimiento.
- Información comercial/legal/privada que alguno de los hosts haya compartido off-record.

---

## Paso 5 — Validar antes de hacer commit

Desde la raíz del proyecto:

```bash
npm run build
```

Debe terminar con:

```
- 0 errors
- 0 warnings
```

Si hay errores de `astro check`:

- Revisa que todos los campos obligatorios del schema estén presentes.
- Confirma que `episode` es número, no string.
- Confirma que `durationSeconds` es número.
- Confirma que URLs son válidas (formato `https://...`).

Si el frontmatter tiene un problema, el build falla y muestra la línea exacta.

---

## Paso 6 — Verificar el HTML generado

Después del build, confirma que:

```bash
ls dist/episodios/
```

...lista un directorio con el slug del episodio nuevo.

Verificación rápida del HTML (reemplazar `XX-slug` por el real):

```bash
grep -c "seoTitle del episodio" dist/episodios/XX-slug/index.html          # debe ser >= 1
grep -o "PodcastEpisode\|VideoObject\|BreadcrumbList" dist/episodios/XX-slug/index.html | sort -u  # debe listar los 3
```

---

## Paso 7 — Commit y deploy

```bash
git add src/content/episodes/XX-slug.md public/thumbnails/epXX*.webp
git commit -m "feat: add Episode XX - <título corto>"
git push
```

Cloudflare Pages detecta el push a `main` y despliega automáticamente.

Después del deploy, **no olvidar**:

- Correr `./scripts/indexnow.sh` desde la raíz del repo (modo auto: detecta los `.md` que cambiaron en el último commit y notifica a Bing/Yandex/Naver/Seznam.cz). Alternativa: `./scripts/indexnow.sh NN` para un episodio específico por número, o `--dry-run` para previsualizar sin enviar.
- Probar social sharing: pegar la URL en X, LinkedIn, WhatsApp — la OG image debe renderizar correcta.
- Validar schema con https://validator.schema.org/ pegando la URL.
- Verificar que la URL aparece en `https://eslahoradeaprender.com/sitemap-0.xml` dentro de las 24h.

---

## Qué NO hacer

- **No renombrar** archivos `.md` ya publicados.
- **No borrar** episodios antiguos — si hay que despublicar, marcar `draft: true` (requiere agregar el campo al schema).
- **No usar** backticks alrededor de URLs en el body — deja los links como markdown normal.
- **No commitear** valores sensibles (claves, tokens, emails personales no públicos). El repo es público.
- **No agregar** dependencias nuevas sin justificación — el sitio prioriza performance y minimalismo.
- **No cambiar** BaseLayout ni otros archivos compartidos solo para un episodio. Si necesitas algo nuevo que aplique a todos, hazlo en una PR separada.

---

## Checklist final

**Archivo y frontmatter**

- [ ] Archivo `.md` creado con el naming correcto (`XX-slug.md`)
- [ ] Frontmatter completo y válido
- [ ] `seoTitle` ≤ 65 chars, `seoDescription` 120–155 chars
- [ ] Thumbnails `epXX.webp`, `epXX-sm.webp`, `epXX-xs.webp` en `public/thumbnails/`
- [ ] URLs de YouTube y Spotify correctas y apuntan al episodio real
- [ ] `topics` y `keywords` específicos, no genéricos
- [ ] `relatedEpisodes` definido con 2–4 números de episodios afines por tema (todos existen)

**Body editorial (estándar modo B)**

- [ ] Intro 60–100 palabras (hook + promesa), distinta del `description` del frontmatter
- [ ] Sección "Lo que vas a aprender" con 3–5 takeaways accionables
- [ ] 3–6 secciones temáticas con H2 preferentemente en formato pregunta
- [ ] Tabla comparativa si el episodio compara herramientas/precios/opciones
- [ ] Sección "Capítulos del episodio" con 8–15 timestamps
- [ ] Al menos 2 blockquotes citando textualmente a los hosts
- [ ] Sección "Preguntas frecuentes" con 3–6 FAQs (intent real de búsqueda)
- [ ] Sección "Recursos mencionados" con links externos + internos cuando apliquen
- [ ] Longitud total del body: 1.500–2.500 palabras
- [ ] Nombres técnicos verificados (Qwen, Kimi, OpenClaw, MiniMax, Anthropic, etc.)
- [ ] Sin transcript crudo, sin muletillas, sin datos privados de terceros

**Build y validación**

- [ ] `npm run build` pasa con 0 errores y 0 warnings
- [ ] HTML generado incluye `PodcastEpisode`, `VideoObject`, `BreadcrumbList`
- [ ] Shownotes renderizados (verificar que el body aparece en el HTML, no solo el frontmatter)

**Docs sincronizadas**

- [ ] `CHANGELOG.md` actualizado con entrada del episodio
- [ ] `package.json` con bump de versión según semver
- [ ] `README.md` si la publicación cambia algo visible desde fuera
- [ ] `ROADMAP.md` con items marcados como `done` si aplican

**Commit y post-deploy**

- [ ] Commit con mensaje `feat: add Episode XX - <título>`
- [ ] Push a `main` → deploy automático en Cloudflare Pages
- [ ] Validar schema con https://validator.schema.org/
- [ ] Rich Results Test https://search.google.com/test/rich-results
- [ ] Probar social preview (X, LinkedIn, WhatsApp)
- [ ] Correr `./scripts/indexnow.sh` (modo auto) después del push para notificar a Bing/Yandex/Naver/Seznam.cz

---

## Referencia: schema actual de `content.config.ts`

Consulta `src/content.config.ts` como fuente de verdad del schema. Si algún campo cambió, el archivo del schema gana sobre este documento.

Campos actuales (abril 2026):

**Obligatorios**: `title`, `episode`, `season`, `date`, `duration`, `durationSeconds`, `youtube`, `youtubeId`, `spotify`, `description`, `hosts[]`, `topics[]`.

**Opcionales**: `thumbnail`, `seoTitle`, `seoDescription`, `ogImage`, `keywords[]`, `relatedEpisodes[]` (números de episodio).

**Opcionales estructurados (alimentan JSON-LD, recomendados para SEO + AI Overviews)**:

- `excerpt`: hook corto ≤280 caracteres. Fallback para descripciones.
- `keyTakeaways[]`: 3-5 aprendizajes accionables. Emite como `about` en `PodcastEpisode`.
- `timestamps[]`: array de `{time, seconds, label}`. Emite como `hasPart` (Clip con `startOffset`) en `VideoObject` — Google los muestra como **chapter markers en SERP** y en YouTube card.
- `resources[]`: array de `{title, url, type, description?}` donde type es `tool|article|paper|book|video|repo|other`. Emite como `citation` en `PodcastEpisode`.
- `faq[]`: array de `{question, answer}`. **Emite `FAQPage` JSON-LD** — rich result de FAQs expandibles en SERP.
- `guests[]`: array de `{name, role?, company?, bio?, linkedin?}`. Emite como `actor` (Person) en `PodcastEpisode`.
- `updatedAt`: YYYY-MM-DD. Emite como `dateModified` — útil para episodios evergreen que se actualizan.

**Importante**: definir estos campos estructurados no cambia el render visual del body (los shownotes MD siguen igual). Solo activa el JSON-LD correspondiente. Idealmente, cuando uses estos campos, mantené los mismos datos en el body editorial para que el contenido visible y el schema estén alineados.

Campos planificados futuros (ver `ROADMAP.md`): `primaryTopic`, `cluster`, `transcript`, `transcriptUrl`.

### Ejemplo — frontmatter con campos estructurados

```yaml
keyTakeaways:
  - "Primer aprendizaje accionable"
  - "Segundo aprendizaje accionable"
timestamps:
  - time: "00:05"
    seconds: 5
    label: "Introducción"
  - time: "10:30"
    seconds: 630
    label: "Primer tema clave"
resources:
  - title: "Nombre de la herramienta"
    url: "https://ejemplo.com"
    type: "tool"
    description: "Descripción breve"
faq:
  - question: "¿Pregunta literal que alguien googlea?"
    answer: "Respuesta de 40-120 palabras que resuelve directamente."
guests:
  - name: "Nombre Invitado"
    role: "CEO"
    company: "Empresa"
    linkedin: "https://www.linkedin.com/in/..."
updatedAt: "2026-05-15"
```

Ver `src/content/episodes/09-estrategia-ia-tamano-empresa.md` como ejemplo completo (el primer episodio migrado a este formato).
