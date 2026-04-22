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
- **No incluyas** datos sensibles, emails personales de invitados sin consentimiento, ni tokens.

---

## Paso 4 — Escribir el body del episodio

Después del frontmatter, escribe el cuerpo Markdown. **Este contenido sí se renderiza** — es lo que Google indexa y los usuarios leen.

### Estructura recomendada

```markdown
[Párrafo de introducción: 60-100 palabras. Gancho editorial + promesa del episodio. Responde "¿por qué escuchar esto?"]

## 🎙️ Lo que traemos esta semana

[Para episodios tipo recap/news: 1 párrafo por host explicando qué trae cada uno. Tono conversacional.]

## [Sección temática 1 — usa H2 en forma de pregunta cuando aplique]

[Contenido de la sección. Cita a los hosts con bullet o blockquote cuando corresponda.]

### [Subsección H3 si aplica]

[Tablas, listas, citas, negritas. Markdown estándar.]

## [Sección temática 2]

...

## [Sección de conclusión o insight clave]

...

---

## 🔗 Links Mencionados

- **[Nombre descriptivo](https://url)** — qué es y por qué es relevante.
- ...

🌐 [eslahoradeaprender.com](https://eslahoradeaprender.com)
🎧 [Spotify](https://open.spotify.com/show/7o7JR0Un1jc6wev0VjNm0C)
📺 [YouTube](https://www.youtube.com/@EsLaHoraDeAprender_com)
```

### Reglas del body

- **Longitud mínima**: 1.200 palabras. Ideal: 2.500–4.500 (incluyendo transcript colapsado cuando exista).
- **Jerarquía**: solo H2 (`##`) y H3 (`###`) dentro del body. El H1 lo genera el template.
- **Los H2 en formato pregunta funcionan mejor** para Google AI Overviews. Ejemplo: `## ¿Qué herramientas conviene a una PYME?` en lugar de `## Herramientas para PYMEs`.
- **Escanabilidad**: usa listas, negritas, tablas y blockquotes. Evita párrafos largos sin anclas visuales.
- **Enlaces internos**: enlaza a otros episodios con `/episodios/XX-slug` cuando el contenido esté relacionado. Es SEO oro.
- **Enlaces externos**: libres, descriptivos. No usar `click aquí` como anchor.
- **Imágenes extra**: si agregas, guárdalas en `public/images/epXX/` y usa `![alt descriptivo](/images/epXX/foo.webp)`.
- **Emojis en H2**: opcional, usados con moderación para señalización visual. No obligatorios.

### Cuándo agregar secciones específicas

- **"Recursos mencionados" al final**: obligatorio si se citan herramientas/libros/papers. Ayuda SEO y UX.
- **Tablas comparativas**: muy valiosas para featured snippets. Úsalas cuando compares herramientas, precios, opciones.
- **Blockquotes**: usa `>` para citar a hosts textualmente. Da textura editorial.
- **Timestamps**: por ahora como texto (`00:12:34 — Tema`). Cuando se agregue el campo `timestamps[]` al schema serán estructurados y clicables.

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

- Actualizar `scripts/indexnow.sh` para incluir la URL nueva (hoy tiene URLs hardcodeadas).
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

- [ ] Archivo `.md` creado con el naming correcto (`XX-slug.md`)
- [ ] Frontmatter completo y válido
- [ ] Body Markdown con ≥1.200 palabras
- [ ] Thumbnails generados en `public/thumbnails/`
- [ ] `npm run build` pasa con 0 errores y 0 warnings
- [ ] HTML generado incluye `PodcastEpisode`, `VideoObject`, `BreadcrumbList`
- [ ] URLs de YouTube y Spotify son válidas y apuntan al episodio correcto
- [ ] Topics y keywords son específicos, no genéricos
- [ ] Commit con mensaje `feat: add Episode XX - <título>`
- [ ] Después del deploy: validar en schema.org validator y probar social preview

---

## Referencia: schema actual de `content.config.ts`

Consulta `src/content.config.ts` como fuente de verdad del schema. Si algún campo cambió, el archivo del schema gana sobre este documento.

Campos actuales (abril 2026): `title`, `episode`, `season`, `date`, `duration`, `durationSeconds`, `youtube`, `youtubeId`, `thumbnail?`, `spotify`, `description`, `seoTitle?`, `seoDescription?`, `ogImage?`, `hosts[]`, `topics[]`, `keywords?`.

Campos planificados (ver `ROADMAP.md`): `excerpt`, `keyTakeaways[]`, `timestamps[]`, `resources[]`, `faq[]`, `guests[]`, `primaryTopic`, `cluster`, `transcript`, `transcriptUrl`, `updatedAt`.
