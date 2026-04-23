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

### Content Collection como única fuente de verdad

Un episodio = un archivo en `src/content/episodes/XX-slug.md`. Todo lo demás se deriva:

- `src/content.config.ts` define el schema Zod del frontmatter. El `id` de cada entry es el nombre del archivo sin extensión (ej. `09-estrategia-ia-tamano-empresa`) y se usa como slug de URL en `/episodios/{id}`.
- `src/pages/episodios/[...slug].astro` genera `getStaticPaths()` desde la colección y calcula `prevEpisode`/`nextEpisode` ordenando por `data.episode`.
- `src/pages/feed.xml.ts` genera el RSS de podcast con extensiones `itunes:`, `googleplay:`, `spotify:` (usa `@astrojs/rss`).
- `src/pages/video-sitemap.xml.ts` emite el video sitemap de Google manualmente (no usa `@astrojs/sitemap`).
- `@astrojs/sitemap` genera `sitemap-index.xml` automáticamente (filtra `/404`).
- `src/pages/index.astro` muestra `latest` + `olderEpisodes.slice(1, 7)` (máximo 6 en home, 7 totales incluyendo el featured).

Agregar un episodio = crear el `.md` con frontmatter válido y push. Página, navegación, RSS, video-sitemap y sitemap se regeneran solos.

### SEO y schema centralizados en BaseLayout

`src/layouts/BaseLayout.astro` es el único punto donde viven: canonical, hreflang (`es`, `x-default`), meta robots (`index, follow, max-image-preview:large, max-snippet:-1`), geo tags Chile, OG/Twitter Cards, manifest PWA, registro del service worker, y el JSON-LD `PodcastSeries`. Acepta props `seoTitle` y `seoDescription` que sobrescriben los defaults si el frontmatter del episodio los define.

El layout expone un slot nombrado `head-extra` para inyectar JSON-LD específico por página. La página de episodio (`src/pages/episodios/[...slug].astro`) usa ese slot para emitir `PodcastEpisode`, `VideoObject` y `BreadcrumbList` por cada episodio, además de pasar `seoTitle`, `seoDescription`, `ogType="article"`, `canonicalUrl`, `datePublished` y `keywords`.

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
