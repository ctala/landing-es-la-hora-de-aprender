# Roadmap — Es la Hora de Aprender

Documento vivo de mejoras priorizadas para el sitio. Build in public: lo mantenemos en el repo.

Formato por item: `[estado] Título — impacto / esfuerzo / riesgo-performance`. Estados: `done` · `in-progress` · `next` · `later`.

---

## Principios

1. La **velocidad de carga** es una fortaleza del sitio. No la sacrificamos por SEO.
2. Priorizar cambios **estáticos en build-time**. Evitar JS cliente innecesario.
3. **No cambiar URLs ya publicadas**. Si se renombra un episodio, se agrega redirect 301 en `public/_headers`.
4. Sin librerías nuevas salvo justificación clara (performance o unlock editorial).

---

## Hecho (2026-04)

- [x] **Renderizar body Markdown del episodio** en `src/pages/episodios/[...slug].astro` — el contenido de los shownotes en los `.md` ahora aparece en el HTML (antes era invisible para Google y usuarios). Muy alto impacto, cero riesgo de performance.
- [x] **Usar `seoTitle` / `seoDescription`** del frontmatter — los episodios ya tenían campos SEO optimizados en el YAML que nunca se usaban. Ahora BaseLayout los prioriza.
- [x] **JSON-LD por episodio**: `PodcastEpisode` + `VideoObject` + `BreadcrumbList` emitidos en `<head>` via slot `head-extra` en `BaseLayout.astro`.
- [x] **`<meta robots>`** con `max-image-preview:large, max-snippet:-1` para habilitar rich cards y snippets largos.
- [x] **hreflang simplificado** — solo `es` + `x-default` (se removió el `es-cl` redundante).
- [x] **Fix skip-link** — `<main id="main-content">` ahora presente en todas las páginas (antes solo en home).
- [x] **Breadcrumb completo** en episodio — ahora es `Inicio › Episodios › EP N: Título` (antes saltaba el nivel `/episodios/` e incluía solo el número).
- [x] **Título del home LATAM-neutral** — sacamos "en Chile" del `<title>` default; las geo tags quedan intactas porque el podcast es de Chile.
- [x] **`webFeed` en schema PodcastSeries** — enlaza al RSS feed.
- [x] **Build limpio** — 0 errores, 0 warnings de `astro check`.

---

## Siguientes (quick wins, alto impacto)

- [x] **Rellenar body editorial de episodios 01–04 y refactorizar 05–09 al estándar modo B** — hecho en v3.8.0 usando los transcripts de Riverside como fuente. Los 9 episodios ahora renderizan 2.000–3.300 palabras cada uno con las 8 secciones obligatorias.
- [ ] **Extender schema Zod** en `src/content.config.ts` con campos opcionales para soportar la plantilla ideal sin romper los 9 `.md` actuales:
  - `excerpt` (hook corto distinto al description largo)
  - `keyTakeaways: z.array(z.string())`
  - `timestamps: z.array({time, seconds, label})`
  - `resources: z.array({title, url, type})`
  - `faq: z.array({question, answer})`
  - `guests: z.array({name, role, bio, linkedin?})`
  - `primaryTopic` / `cluster` (enum)
  - `transcriptUrl` / `transcript`
  - `updatedAt`
  Impacto: habilitador de todo lo demás · Esfuerzo: bajo.
- [ ] **Renderizar key takeaways + FAQs desde frontmatter** en la página de episodio, cuando los campos existan. Emitir `FAQPage` JSON-LD automáticamente si hay FAQs.
- [ ] **Topic chips clickables** — hoy `topics[]` solo se muestra como pills decorativas. Hacer que cada chip linkee a `/temas/{slug}` (ver siguiente).
- [ ] **Links internos de episodios resueltos por número** — hoy los enlaces tipo `/episodios/XX-slug` dentro del body Markdown son hardcoded y pueden romperse si el autor/agente escribe el slug incorrecto. Dos opciones: (a) campo `relatedEpisodes: number[]` en el schema + render automático en el template (resuelve slugs por número de episodio en build), (b) build-time validator que grepea todos los `/episodios/*` del contenido renderizado y falla el build si algún link apunta a un slug inexistente. Ideal las dos. Impacto: evita 404s silenciosos en cada publicación.

---

## Esta semana / próximas 2 semanas

- [ ] **Páginas de cluster `/temas/[topic]`** — generadas desde `topics[]` (o `primaryTopic` del schema). Cada página lista episodios del cluster + intro editorial corta. 3–5 clusters iniciales propuestos en el diagnóstico: agentes-ia, openclaw, modelos-ia, futuro-trabajo, estrategia-ia.
- [ ] **Navegación real en `SiteHeader.astro`** — añadir links internos: Episodios · Temas · Guías (cuando existan) · Suscribirse. Hoy el header solo tiene CTAs externos a YouTube/Spotify.
- [ ] **Bloque "Episodios relacionados por tema"** al final de cada episodio — 3 cards de episodios que compartan ≥1 topic con el actual. Reemplaza/complementa el prev/next cronológico.
- [ ] **OG images 1200×630 JPG por episodio** — hoy WhatsApp/LinkedIn no renderean WebP confiablemente. Opciones: (a) pre-generar JPGs, (b) endpoint `/og/[slug].png.ts` con Satori en build.
- [ ] **Analytics — medir el tráfico real** para tomar decisiones basadas en datos. Prerequisito para validar el impacto de los cambios SEO. Opciones ordenadas por impacto/perf:
  - **Cloudflare Web Analytics** (gratis, ya estamos en Cloudflare Pages, ~0 overhead, sin cookies, privacy-friendly) — primera opción si basta con métricas básicas de tráfico.
  - **Plausible** o **Umami** (~1KB script, sin cookies, privacy-friendly, open source) — si se necesita algo más rico que Cloudflare pero manteniendo performance.
  - **GA4 via GTM** — solo si se requiere integración con Google Ads / Search Console avanzada. Aceptar el trade-off de ~45KB de JS cliente y manejo de consentimiento por GDPR/ley chilena.
  Decidir primero el criterio (privacidad vs. features). Si se elige GA4/GTM, cargar con `defer` y evaluar Partytown para mover a un web worker.
- [ ] **Arreglar `scripts/indexnow.sh`** — hoy tiene URLs hardcodeadas (solo notifica home + ep01). Generar la lista desde la colección en build.
- [ ] **Arreglar `scripts/validate-build.sh`** — hoy greppea `"OpenClaw y el Futuro del Trabajo"` (ep01) que ya no aparece en home con ≥8 episodios. Refactor a validar estructura, no un título específico.

---

## Este mes

- [ ] **Páginas pilar evergreen** en `/guias/`:
  - `/guias/agentes-ia-empresas`
  - `/guias/openclaw`
  - `/guias/estrategia-ia-por-tamano`
  Cada una 2.500–3.500 palabras, TOC, FAQs, enlaces a episodios del cluster. Son el activo SEO de largo plazo del sitio.
- [ ] **Transcripciones de episodios** — prioridad 5, 6, 7, 8, 9 (los que ya tienen shownotes ricos). Cristian puede aportar las que ya tenga; para las que falten se transcribe con Whisper + limpieza con LLM. Colocar como colapsable `<details>` dentro del episodio, no página aparte. Canonical al episodio.
- [ ] **Páginas de host** `/hosts/{slug}` — bio + listado de episodios. E-E-A-T + hooks para LLMs. Datos ya existen en `hosts[]` del frontmatter.
- [ ] **Decisión sobre RSS feed** — hoy `src/pages/feed.xml.ts:58` emite `<enclosure url="${youtube}" type="video/mp4" length="0">`. Para Apple Podcasts se necesitan MP3s reales con length en bytes. Decidir: (a) video-podcast-only → ajustar feed y no buscar ingesta en Apple, (b) audio + video → alojar MP3s y corregir enclosure.
- [ ] **Conectar Google Search Console y Bing Webmaster Tools** — sin GSC no sabemos qué queries ya rankean. Prerequisito para medir impacto real de estos fixes.

---

## Cambios más grandes / futuro

- [ ] **Migrar a MDX (`@astrojs/mdx`)** — habilita componentes embebidos en los episodios (`<Chapters>`, `<ResourceCard>`, `<FAQ>`) sin JS cliente.
- [ ] **Página `/suscribirse`** — hub con Apple Podcasts, Spotify, YouTube, RSS, Amazon Music.
- [ ] **Newsletter capture** en footer — Buttondown o ConvertKit, solo email, sin backend propio.
- [ ] **Share buttons en episodio** — X/LinkedIn/WhatsApp/copy-link. Native Web Share API en mobile.
- [ ] **Timestamps clicables** que sincronicen con el player YouTube.
- [ ] **Partir `BaseLayout.astro` (389 líneas)** en `SEO.astro` + `JsonLd.astro` + `global.css`.
- [ ] **Self-hostear Google Fonts** (vía `fontsource` o API experimental de Astro 5) — elimina 2 RTT a fonts.googleapis.com, reduce CLS. Contra: +60–80KB en bundle inmutable.
- [ ] **Revisar service worker** (`public/sw.js`) — estrategia actual puede cachear HTML viejo y demorar la actualización de fixes SEO en clientes existentes. Evaluar reescritura a stale-while-revalidate solo para assets, o eliminación con tombstone SW.
- [ ] **Reemplazar `<img>` por `astro:assets` / `<Image>`** para thumbnails — ganancia en srcset automático, AVIF, hash de cache.
- [ ] **Actualizar `SEO-STRATEGY.md`** (doc interno) — está desactualizado respecto al estado real del podcast con 9 episodios.

---

## Métricas a seguir (después de conectar GSC)

- Queries indexadas y posición promedio por tipo de página (home / listado / episodio / cluster / pillar).
- CTR por query.
- Páginas con más impresiones y páginas con CTR bajo (oportunidad de mejorar meta description).
- Rich results válidos: Podcast, Video, FAQ, Breadcrumb.
- Core Web Vitals (CrUX) — mantener LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.
- Tiempo en página y bounce rate por tipo de URL.

---

## Registro de decisiones

- **2026-04-22** — Se prioriza video-first (YouTube) sobre audio-first. Pendiente decisión formal sobre si buscamos ingesta en Apple Podcasts (requiere MP3s alojados).
- **2026-04-22** — Geo tags (`CL-RM`, Santiago, coordenadas) se mantienen — el podcast es de Chile factualmente, no daña SEO en otros países LATAM.
- **2026-04-22** — URLs existentes quedan congeladas. Renombrar un episodio = redirect 301 en `public/_headers`, nunca borrar.
