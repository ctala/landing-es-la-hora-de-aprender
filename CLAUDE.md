# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Objetivo del sitio

Sitio oficial del podcast "Es la Hora de Aprender" sobre IA, agentes y estrategia tecnológica para empresas. Audiencia: LATAM + España, en español. Funciones:

1. **Descubrimiento orgánico** — punto de entrada desde búsqueda (Google, AI search) hacia los episodios.
2. **Activo editorial** — cada episodio es pieza indexable con valor propio, no solo un embed de YouTube/Spotify.
3. **Hub de marca** — autoridad temática sobre IA aplicada a empresas.

## Prioridades

Orden estricto cuando dos objetivos compiten:

1. **Performance** — zero JS cliente innecesario, static output, todo en build-time. No se sacrifica por SEO.
2. **SEO + discoverability** — maximizar tráfico orgánico y visibilidad en AI Overviews.
3. **Mantenibilidad editorial** — agregar un episodio debe ser rápido. Ver `docs/agent-add-new-episode.md`.
4. **Diseño** — neo-brutalismo es identidad, mantener consistencia.

### Restricción dura de performance

- **No** agregar librerías cliente sin justificación documentada.
- **No** agregar JS cliente que no sea estrictamente necesario (hoy: facade YouTube + topics toggle).
- **No** hacer SSR o hybrid — static output es ley.
- **No** cambiar el patrón de fonts async, YouTube facade, ni thumbnails self-hosted.
- Si una mejora SEO requiere JS cliente o degrada LCP/CLS, proponer con alternativa.

## Repositorio público — reglas de seguridad

Este repo es **público** (GitHub / Cloudflare Pages). Aplican reglas estrictas:

- No commitear valores sensibles (tokens, API keys, emails privados, coordenadas personales no públicas).
- No leer archivos con secretos (`.env*`, `credentials*`, `*.key`, `*.pem`). Si un agente los necesita, pedir permiso al usuario antes de abrirlos.
- No inspeccionar directorios personales (`~/.ssh`, `~/.aws`, `~/.config`) desde tareas del proyecto.
- Si se detecta algo privado expuesto en el repo: reportar genéricamente (ruta + descripción), no reproducir el valor.
- Usar placeholders en código de ejemplo.

Parte de este enforcement vive en `.claude/settings.json` (`permissions.deny`). CLAUDE.md es guía; settings es enforcement.

## URLs estables

**Nunca renombrar episodios ni rutas ya publicadas.** Si hay que cambiar un slug: agregar redirect 301 en `public/_headers`, mantener la URL vieja activa.

## Formato esperado de auditorías y planes

Cuando se solicita un diagnóstico o plan (solo o multiagente):

1. **Diagnóstico primero, sin cambios** — nunca modificar código en fase de auditoría.
2. **Referencias concretas** — archivos, componentes, rutas, números de línea. Nada genérico.
3. **Datos del repo, no del training set** — si falta información, decirlo explícitamente en lugar de inventar.
4. **Priorización impacto × esfuerzo × riesgo de performance** — tres ejes obligatorios.
5. **Sección "Si solo pudiéramos hacer 5 cosas"** al final de cada diagnóstico.
6. **Sección "Lo que NO deberíamos tocar"** — protege las fortalezas existentes.
7. **Trade-offs explícitos** — si un fix daña performance, proponer alternativa.

Para planes de implementación:

- Quick wins / esta semana / este mes / futuro.
- Cada acción con impacto estimado, esfuerzo estimado, riesgo, archivos afectados.
- No escribir código hasta que el usuario apruebe el plan.

## Workflows documentados

- **Agregar un episodio nuevo** → `docs/agent-add-new-episode.md` (también `/new-episode` en Claude Code).
- **Roadmap vivo** → `ROADMAP.md` (raíz del repo, build in public).

## Documentación sincronizada

Cada cambio no-trivial debe dejar al día **todos** los archivos relevantes, no solo el código:

- `CHANGELOG.md` — entrada en la versión nueva con qué cambió.
- `package.json` — bump de versión según [semver](https://semver.org/): patch para fixes, minor para features compatibles, major para breaking.
- `README.md` — si la feature es visible para quien lee el repo desde fuera.
- `ROADMAP.md` — marcar items como `done` cuando se completen, añadir nuevos descubiertos.
- `docs/*.md` — actualizar workflows documentados si cambian.
- `CLAUDE.md` — actualizar arquitectura/gotchas si cambian contratos internos.

**El footer del sitio muestra la versión automáticamente** — `src/components/SiteFooter.astro` importa `pkg.version` desde `package.json` y la fecha del build. No hay que tocarlo al bumpear versión. Histórico: hasta v3.9.0 la versión estaba hardcoded en el footer y se olvidaba actualizar a cada release; desde v3.9.1 es automático.

Regla de oro: si un lector nuevo del repo no puede reconstruir qué pasó mirando `CHANGELOG.md` + `ROADMAP.md` + `git log`, falta sincronización.

## Comandos

```bash
npm run dev          # Dev server en localhost:4321
npm run build        # astro check && astro build → ./dist/ (type-checking BLOQUEA el build)
npm run preview      # Preview local del build
npm run validate     # scripts/validate-build.sh — build + smoke checks de dist/
```

No hay framework de tests configurado. `astro check` dentro de `npm run build` es el único gate de tipos.

## Arquitectura

**Sitio estático Astro 5** que renderiza un podcast como páginas individuales por episodio, más feeds/sitemaps generados en build. Zero JS bundle excepto un script inline de facade de YouTube.

### Content Collections como única fuente de verdad

`src/content.config.ts` define 3 collections vía Zod. Cada entry es un `.md` y todo lo demás se deriva.

| Collection | Path source | URL | Schema JSON-LD emitido | Propósito |
|---|---|---|---|---|
| `episodes` | `src/content/episodes/XX-slug.md` | `/episodios/{id}/` | `PodcastEpisode` + `VideoObject` + `BreadcrumbList` + `FAQPage`* | Cada episodio del podcast |
| `guias` | `src/content/guias/{slug}.md` | `/guias/{id}/` | `TechArticle` + `BreadcrumbList` + `FAQPage`* | Pillars evergreen del Sprint SEO Growth |
| `glosario` | `src/content/glosario/{slug}.md` | `/glosario/{id}/` | `DefinedTerm` + `BreadcrumbList` | Términos técnicos de IA aplicada |

\* `FAQPage` se emite solo cuando el frontmatter define `faq[]`.

**Convenciones compartidas:**
- El `id` de cada entry es el nombre del archivo sin extensión y se usa como slug de URL.
- `relatedEpisodes: number[]` y `relatedGuides: string[]` son validados en `getStaticPaths()` de cada route — referencia inválida BLOQUEA el build (mensaje explícito).
- `[...slug].astro` de cada collection emite los JSON-LD via `<Fragment slot="head-extra">` del BaseLayout (mismo patrón).
- Agregar contenido = crear el `.md` con frontmatter válido y push. Sitemap, índices y schemas se regeneran solos.

**Routes especializadas:**
- `src/pages/episodios/[...slug].astro` calcula `prevEpisode`/`nextEpisode` ordenando por `data.episode`.
- `src/pages/guias/[...slug].astro` resuelve `relatedEpisodes` + `relatedGuides` y emite el funnel CTA contextual al final (deep-link a curso CAR + UTM).
- `src/pages/glosario/[...slug].astro` resuelve `relatedEpisodes` + `relatedGuides` (de hubs) + `relatedGlossary` (otros términos) y emite `DefinedTerm` con `inDefinedTermSet`.

**Feeds y sitemaps:**
- `src/pages/feed.xml.ts` genera el RSS de podcast con extensiones `itunes:`, `googleplay:`, `spotify:` (usa `@astrojs/rss`).
- `src/pages/video-sitemap.xml.ts` emite el video sitemap de Google manualmente (no usa `@astrojs/sitemap`).
- `@astrojs/sitemap` genera `sitemap-index.xml` automáticamente (filtra `/404`).
- `src/pages/index.astro` muestra `latest` + `olderEpisodes.slice(1, 7)` (máximo 6 en home) + `featuredGuides.slice(0, 4)` (máximo 4 guías en home) + bloque Comunidades.

### SEO y schema centralizados en BaseLayout

`src/layouts/BaseLayout.astro` es el único punto donde viven: canonical, hreflang (`es`, `x-default`), meta robots (`index, follow, max-image-preview:large, max-snippet:-1`), geo tags Chile, OG/Twitter Cards, manifest PWA, registro del service worker, y el JSON-LD `PodcastSeries`. Acepta props `seoTitle` y `seoDescription` que sobrescriben los defaults si el frontmatter del episodio los define.

El layout expone un slot nombrado `head-extra` para inyectar JSON-LD específico por página:

- **`src/pages/index.astro`** usa el slot para emitir `ItemList` con todos los episodios (orden descendente). Esto ayuda a AI crawlers a enumerar el corpus.
- **`src/pages/episodios/[...slug].astro`** emite `PodcastEpisode` (con `speakable`, `about`, `citation`, `actor`, `dateModified`), `VideoObject` (con `hasPart` / `Clip` cuando hay timestamps), `BreadcrumbList`, y `FAQPage` cuando el frontmatter define `faq[]`. Además pasa al BaseLayout `seoTitle`, `seoDescription`, `ogType="article"`, `canonicalUrl` (con trailing slash), `datePublished` y `keywords`.

### Archivos públicos para motores y AI crawlers

- `public/robots.txt` — declaración explícita de allow para GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot, Bytespider, Amazonbot, cohere-ai, Meta-ExternalAgent, DuckAssistBot, MistralAI-User, YouBot. Varios de estos son opt-in por defecto — sin declaración explícita NO crawlean aunque `User-agent: *` permita. Catch-all al final para los demás.
- `src/pages/llms.txt.ts` — genera `/llms.txt` dinámicamente desde la collection siguiendo la propuesta de Jeremy Howard/Answer.AI (https://llmstxt.org/). Contiene: descripción del podcast, licencia CC BY 4.0 declarada explícita, canonical, feeds, temas principales (extraídos de `topics[]` de todos los episodios), y lista de episodios con summary + URL. Si cambia la propuesta de licencia (ej. a `CC BY-NC-SA` para preservar modelo comercial de cursos de los hosts), actualizar en ese archivo.
- `src/pages/feed.xml.ts` — RSS del podcast (iTunes/Spotify/Google Play). URLs con trailing slash.
- `src/pages/video-sitemap.xml.ts` — video-sitemap manual (Astro sitemap no lo cubre).
- `sitemap-index.xml` + `sitemap-0.xml` — autogenerados por `@astrojs/sitemap`.

### Capa SEO Growth (`/guias/` y `/glosario/`)

Sprint construido en mayo 2026 sobre datos GSC + DataForSEO. Plan completo en `docs/SEO-GROWTH-STRATEGY.md`; estado por fase en `ROADMAP.md` § "Sprint SEO Growth (2026-05)".

**Arquitectura hub-and-spoke en 3 capas:** `/guias/{slug}/` (pillars evergreen deep, ~2-3K palabras, rankean head terms) ↔ episodios (cross-link via `relatedEpisodes`) ↔ comunidades (funnel via CTA). Lista de hubs vive en `src/content/guias/` — al momento 8 piezas activas (claude-code, n8n, openclaw, agentes-de-ia, hermes-agent, gemini-vs-chatgpt, validar-idea-con-ia, emprender-con-ia).

**Funnel a comunidades (frontmatter `funnel{}`):** cada hub cierra con CTA contextual con deep-link al recurso CAR específico + UTM convención fija:
```
?utm_source=eslahoradeaprender&utm_medium=organic&utm_campaign=hub_{slug}
```
Short ids verificados de cursos CAR (resuelven 307→200, robustos a rename del slug largo): Cofre del Pirata `013cda18`, AI Agents Starter Kit `f970d84d`, Automatiza con n8n MC-04 `006029ac`, Intro a LLMs `8d3910b1`, Validación de Ideas `df8bdae0`. **Usar el SHORT id, NO el id 32-hex** (este último da 404). Para obtener short id de cualquier curso: `client.classroom.listCourses()` y leer el campo `name`.

**Bloque Comunidades en home (`src/pages/index.astro`):** 3 columnas CAR (Cristian, Skool) + Diego (WhatsApp) + Rodrigo (Skool), cada uno con UTM `home_funnel_{car,diego,rojo}`. Es el único funnel del home que enlaza a recursos externos del ecosistema de los hosts. La card de Diego usa `style="background-color: #0a0a0a;"` inline porque `bg-black` no rinde en este Tailwind v4 setup (ver Gotchas).

**Glosario complementario con eco** (`ecosistemastartup.com/glosario/`, ~550 términos broad startup):
- Eco cubre términos broad (AI Agent, LLM, Fine-tuning conceptuales) — ELHDA cubre deep-dive técnico (MCP, tool use, harness, agent ops, vibecoding, dreaming).
- **Antes de crear cualquier entry nueva en ELHDA glosario**: `curl -sIL https://ecosistemastartup.com/glosario/{slug}/` — 301 = existe en eco; decidir cross-link o skip. Si no existe (404), crear sin restricción.
- Cross-link estándar en entries con companion en eco: sección "Ver también" al final usando el short slug (`/glosario/{slug}/`), no el canonical largo `/glosario/{slug}-que-es-guia-completa-2026/`.
- Regla operativa completa en `~/.claude/projects/.../memory/feedback_glosario_complementario.md`.

**Loop podcast → hub (Fase 4 del sprint):** al publicar un episodio nuevo via el skill `elhda-new-episode`, correr como Paso 11 el script que agrega el episodio al `relatedEpisodes[]` de los hubs que toque. Idempotente, dry-run support:
```bash
python3 .claude/skills/elhda-new-episode/scripts/update_hubs_for_episode.py \
    --episode N --hubs slug1,slug2,slug3 [--dry-run]
```
El script vive en el repo padre privado `Estrategias`, no acá. Documentado en el `SKILL.md` del skill.

**El script ya no toca `updatedAt`** (17-nov-2026): sumar un episodio no es una actualización de contenido.

### Candado de guías y glosario (`scripts/check-contenido.mjs`)

Corre al inicio de `npm run build`, en local y en Cloudflare Pages. No usa git: compara cada archivo de `src/content/guias/` y `src/content/glosario/` contra `scripts/contenido.lock.json` (huella del contenido + `updatedAt`). Bloquea el build cuando:

- **`updatedAt` se movió y el texto no cambió.** La fecha alimenta `dateModified` y el «Actualizada:» visible; una fecha fresca sin cambio real es un engaño que los buscadores pueden penalizar.
- **El texto cambió y `updatedAt` no.** Una actualización que no mueve la fecha no se vuelve a rastrear.
- **Una guía lista un episodio (≥ `coberturaDesde`, hoy 30) y el cuerpo no lo cita** con su enlace `/episodios/NN-…/`. Sumar el episodio a `relatedEpisodes` no actualiza la guía.
- **Hay voseo** («podés», «usá»). Detector portado de `cursos/scripts/etapas/comun.py` (lista cerrada + terminación); un falso positivo se agrega a `NO_VOSEO` con su caso, en las tres copias.
- **Un enlace interno no existe** (`/episodios/…/`, `/guias/…/`, `/glosario/…/`).
- Hay cambios coherentes sin registrar en el lock.

«Contenido» = cuerpo + `title`/`term` + `description` + `aliases` + `faq` + `resources`. No cuentan `relatedEpisodes`, `relatedGuides`, `relatedGlossary`, `keywords`, `seoTitle`, `seoDescription` ni `funnel`.

```bash
npm run contenido:registrar                                   # tras editar texto + fecha; commitear el lock junto al cambio
node scripts/check-contenido.mjs --menor "motivo" <archivo>   # errata o enlace roto: registra sin mover la fecha
node scripts/check-contenido.mjs --sin-texto <guia> <N> "motivo"  # el episodio N no aporta nada a esa guía
npm run test:contenido                                        # pruebas del candado
```

`--registrar` se niega a registrar un estado incoherente, así que el lock no sirve para blanquear una fecha. Las dos salidas exigen motivo escrito y quedan en el lock (`cambiosMenores`, `sinTexto`).

### Optimizaciones de performance (decisiones no obvias)

- **YouTube facade pattern**: el thumbnail es un `<img>` + botón de play; el `<iframe>` solo se inyecta al primer click por un script `is:inline` duplicado en `index.astro` y `[...slug].astro`. Cualquier cambio al handler debe replicarse en ambos lugares.
- **Google Fonts async**: `<link rel="preload" as="style" ... onload="this.rel='stylesheet'">` con fallback `<noscript>`. No hacer que el CSS de fuentes bloquee el render.
- **Thumbnails self-hosted**: `/public/thumbnails/epXX.webp` (full) y `epXX-sm.webp` (cards). La página de episodio usa la variante `-sm`; el home usa `maxresdefault.jpg` de YouTube para el featured. El schema permite `thumbnail` opcional por episodio.

### Diseño: neo-brutalismo con Tailwind v4

Tailwind v4 se configura vía `@tailwindcss/vite` (no hay `tailwind.config.js`). Las clases del sistema neo-brutalista viven como CSS global dentro de `BaseLayout.astro`: `.brutal-card`, `.brutal-btn`, `.marquee`, `.name-tag`, `.hero-pattern`, `.skip-link`. Colores en CSS vars: `--acid-green: #ccff00`, `--electric-blue: #2d5bff`. Fuentes: `Archivo Black` (titulares) + `Space Grotesk` (body).

### Deploy

Cloudflare Pages auto-deploy on push a `main`. Framework preset: Astro, build `npm run build`, output `dist/`. `public/_headers` y `public/robots.txt` controlan headers/crawling.

## Gotchas

- **`scripts/validate-build.sh` está parcialmente obsoleto**: greppea `"OpenClaw y el Futuro del Trabajo"` (Ep01) en `dist/index.html`, pero el home solo muestra los 7 episodios más recientes. Con ≥8 episodios publicados la validación falla aunque el build esté sano. No lo uses como gate sin actualizarlo.
- **`scripts/indexnow.sh` notifica automáticamente**: desde v3.11.0 detecta qué episodios cambiaron en el último commit (`git diff HEAD^`), arma URLs con trailing slash correcto (resolviendo `slug:` del frontmatter cuando aplica), y notifica a Bing/Yandex/Naver/Seznam. Modo explícito: `./scripts/indexnow.sh 10 11` para eps específicos. Flag `--dry-run` para previsualizar payload sin enviar. Correr desde la raíz del repo después de cada push.
- **El `slug` del frontmatter (si existe) gana sobre el filename para la URL**. Ejemplo real: `09-estrategia-ia-tamano-empresa.md` con `slug: "09-estrategia-ia-tamano-empresa-solo-entrepreneur"` → URL final `/episodios/09-estrategia-ia-tamano-empresa-solo-entrepreneur/`. Si el frontmatter no tiene `slug`, el filename (sin extensión) es el `ep.id`. En ambos casos: **nunca cambiar el slug/filename de un episodio publicado** — rompe links externos y canónicos. Si hay que renombrar, agregar redirect 301 en `public/_headers` y mantener viva la URL vieja.
- **El `build` ejecuta `astro check`**: los errores de tipo en `.astro`/`.ts` bloquean el deploy. Si se agrega un campo al schema Zod, todas las referencias `episode.data.*` deben compilar.
- **Service worker activo** (`public/sw.js`): cambios en assets pueden quedar cacheados en clientes existentes hasta que el SW se actualice.
- **Tailwind v4 `bg-black` no siempre rinde**: el `@theme` en `src/styles/global.css` solo declara `--color-acid` y `--color-electric`. La utility `bg-black` puede colisionar con el `background:var(--white)` shorthand del `.brutal-card` y perder por cascade — incluso el arbitrary `bg-[#0a0a0a]` puede no ser pickeado por el JIT v4 en algunos casos. **Workaround verificado**: usar `style="background-color: #hex;"` inline (gana siempre). Aplicado en la card de Diego (`src/pages/index.astro`).
- **Headers de páginas índice deben ir dentro de `brutal-card bg-white`**: el `.hero-pattern` del body (dotted) atraviesa letras de peso regular (font-weight normal) cuando se ven directamente sobre él — genera ilusión de "outline" por baja contraste. Los H1 con `font-black` no tienen el bug por letras gruesas. Patrón aplicado en `/episodios/`, `/guias/`, `/glosario/` index. Si agregás una página índice nueva, envolvé el `<header>` en `<div class="brutal-card p-6 md:p-10 bg-white">`.
- **ELHDA glosario es complementario con eco glosario, NO competidor**: ver sección "Capa SEO Growth" arriba. Antes de crear cualquier entry en `src/content/glosario/`, verificar si el término ya está en eco y decidir cross-link vs skip vs deep-dive. La regla operativa completa está en la auto-memoria de Claude Code (`~/.claude/projects/.../memory/feedback_glosario_complementario.md`).
