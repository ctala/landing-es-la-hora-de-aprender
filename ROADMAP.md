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
- [x] **Extender schema Zod con campos opcionales estructurados** — hecho en v3.10.0. Agregados: `excerpt`, `keyTakeaways[]`, `timestamps[]`, `resources[]`, `faq[]`, `guests[]`, `updatedAt`. Pendientes para futuros sprints: `primaryTopic`/`cluster`, `transcript`/`transcriptUrl`.
- [x] **FAQPage JSON-LD automático** — hecho en v3.10.0. Si `faq[]` está definido en el frontmatter, se emite `FAQPage` schema. Mismo patrón para `timestamps[]` → `hasPart: Clip` en VideoObject (chapter markers en SERP), `resources[]` → `citation`, `keyTakeaways[]` → `about`, `guests[]` → `actor`, `updatedAt` → `dateModified`.
- [x] **Migrar los 8 episodios restantes al formato estructurado** — hecho en v3.11.0. Los 9 episodios emiten ahora FAQPage + VideoObject.hasPart (Clip con startOffset) + PodcastEpisode.citation/about en el HTML. Extracción automática del body via `/tmp/migrate-episodes.py` + inyección en frontmatter.
- [ ] **Render visual desde frontmatter estructurado** — complemento opcional de lo anterior. Hoy los shownotes MD tienen las FAQs/takeaways/recursos como texto. Si se define el campo en frontmatter, se podría: (a) reemplazar la sección del MD por render automático desde array (garantiza consistencia visual + schema), o (b) mantener dual para máxima flexibilidad editorial. Decidir cuando se migren los 8 episodios.
- [ ] **Topic chips clickables** — hoy `topics[]` solo se muestra como pills decorativas. Hacer que cada chip linkee a `/temas/{slug}` (ver siguiente).
- [x] **Links internos de episodios resueltos por número** — hecho en v3.9.0. Campo `relatedEpisodes: number[]` en el schema + render automático en el template; build falla si un número referenciado no existe. Queda pendiente la parte (b): validator post-build para los links hardcoded dentro del body Markdown (los que no usan `relatedEpisodes`).
- [ ] **Validator de links internos del body** — complemento de `relatedEpisodes`. Script post-build que parsea el HTML generado, extrae todos los `/episodios/*` del contenido y falla si alguno apunta a un slug inexistente. Cubre los links contextuales dentro de párrafos (ej. "como vimos en [el episodio pasado](/episodios/...)").

---

## Esta semana / próximas 2 semanas

- [ ] **Páginas de cluster `/temas/[topic]`** — generadas desde `topics[]` (o `primaryTopic` del schema). Cada página lista episodios del cluster + intro editorial corta. 3–5 clusters iniciales propuestos en el diagnóstico: agentes-ia, openclaw, modelos-ia, futuro-trabajo, estrategia-ia.
- [ ] **Navegación real en `SiteHeader.astro`** — añadir links internos: Episodios · Temas · Guías (cuando existan) · Suscribirse. Hoy el header solo tiene CTAs externos a YouTube/Spotify.
- [x] **Bloque "Episodios relacionados"** al final de cada episodio — hecho en v3.9.0 con `relatedEpisodes[]`. Render automático de 3 cards. Variante respecto al item original: la selección es **manual** (el autor define los números en frontmatter) y no automática por topics compartidos. Si más adelante queremos auto-derivación por topic, se agrega un fallback que sugiera relacionados cuando `relatedEpisodes` esté vacío.
- [ ] **OG images 1200×630 JPG por episodio** — hoy WhatsApp/LinkedIn no renderean WebP confiablemente. Opciones: (a) pre-generar JPGs, (b) endpoint `/og/[slug].png.ts` con Satori en build.
- [x] **Analytics — medir el tráfico real** — hecho en v3.11.0. Cloudflare Web Analytics activado (opción A de la evaluación previa): beacon ~1.4 KB defer, cero cookies, cero impacto en LCP/CLS, sin banner de consentimiento. Reporta pageviews + Core Web Vitals reales desde cada deploy. Ver dashboard en Cloudflare Pages → Analytics.
- [ ] **Analytics — opciones descartadas por ahora** (para referencia futura):
  - **Cloudflare Web Analytics** (gratis, ya estamos en Cloudflare Pages, ~0 overhead, sin cookies, privacy-friendly) — primera opción si basta con métricas básicas de tráfico.
  - **Plausible** o **Umami** (~1KB script, sin cookies, privacy-friendly, open source) — si se necesita algo más rico que Cloudflare pero manteniendo performance.
  - **GA4 via GTM** — solo si se requiere integración con Google Ads / Search Console avanzada. Aceptar el trade-off de ~45KB de JS cliente y manejo de consentimiento por GDPR/ley chilena.
  Decidir primero el criterio (privacidad vs. features). Si se elige GA4/GTM, cargar con `defer` y evaluar Partytown para mover a un web worker.
- [x] **Arreglar `scripts/indexnow.sh`** — hecho en v3.11.0. Script reescrito con dos modos: (a) auto: detecta episodios que cambiaron en el último commit vía `git diff HEAD^ HEAD`; (b) explícito: `./scripts/indexnow.sh NN NN`. Resuelve `slug:` del frontmatter cuando aplica, emite URLs con trailing slash consistente, incluye sitemaps + feed. Flag `--dry-run` para debug.
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
- [x] **Conectar Google Search Console** — ya conectado y submittido sitemap + request-indexing hecho sobre EP03 post-deploy v3.11.0.
- [ ] **Conectar Bing Webmaster Tools** — pendiente. Cubre Bing, y también alimenta a ChatGPT Search / Copilot. Más generoso que GSC en cuota de URL Submission (10.000/día vs 10-15).
- [ ] **Rich Results Test post-deploy** — validar en https://search.google.com/test/rich-results que una URL de episodio muestre elegibilidad para FAQ + Video + Breadcrumb + Speakable. Hacerlo cada vez que se cambian schemas.

---

## Sprint GEO (Generative Engine Optimization) — v3.12.0

- [x] **robots.txt explícito con allow de AI bots** — GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot, Meta/Bytespider/Amazonbot/cohere-ai/MistralAI-User y otros. Varios son opt-in por defecto.
- [x] **`/llms.txt` generado en build** desde la collection — `src/pages/llms.txt.ts` con descripción, licencia CC BY 4.0, episodios indexados, política de atribución.
- [x] **`ItemList` JSON-LD en home** — enumera los 9 episodios para AI crawlers.
- [x] **`SpeakableSpecification` en episodios** — apunta a h1 + primer párrafo + key takeaways del shownotes.
- [x] **Direct-answer-first rewrite** — hecho en v3.12.1. 18 rewrites aplicados en ep01-ep08 (EP09 ya estaba OK como piloto). Los primeros párrafos post-H2 ahora responden declarativo.
- [ ] **`mentions[]` con `sameAs` a Wikidata** en top 5 entidades (Anthropic, OpenAI, Claude, NVIDIA, Karpathy) — pendiente.
- [ ] **Person schema profundo** por host (knowsAbout, sameAs, worksFor) + página `/hosts/{slug}/` — pendiente.
- [ ] **Custom `serialize` en `@astrojs/sitemap`** con priority y lastmod precisos — pendiente.

## Sprint UX (post-auditoría ux-designer) — pendiente

- [ ] Link "Episodios" en SiteHeader + fix mobile nav.
- [ ] Reemplazar emojis 📺🎧 por SVGs consistentes en CTAs de episodio.
- [ ] Fix contraste footer `v{version}` y breadcrumb `text-gray-500 → 700`.
- [ ] "Temas tratados" `<h2>` → `<h3>` + `aria-label` en `.shownotes` (jerarquía H1-H2-H3 correcta para screen readers).
- [ ] Renderizar `timestamps` como chapter markers clickeables arriba del shownotes (data ya en frontmatter).
- [ ] Wrapper `overflow-x: auto` en tablas del shownotes (mobile).
- [ ] TOC sticky en desktop aprovechando el espacio lateral muerto de la card de shownotes.
- [ ] Filtros/search en `/episodios/` (solo CSS `:has()` + data-attrs, sin JS framework).
- [ ] Compartir / copiar link en CTAs de episodio.

## Cambios más grandes / futuro

- [ ] **Migrar a MDX (`@astrojs/mdx`)** — habilita componentes embebidos en los episodios (`<Chapters>`, `<ResourceCard>`, `<FAQ>`) sin JS cliente.
- [ ] **Página `/suscribirse`** — hub con Apple Podcasts, Spotify, YouTube, RSS, Amazon Music.
- [ ] **Newsletter capture** en footer — Buttondown o ConvertKit, solo email, sin backend propio.
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

- **2026-04-23** — Licencia del contenido editorial (shownotes): **CC BY 4.0 confirmada**. Los hosts decidieron mantener la licencia más permisiva. Razones: (a) maximiza visibilidad en AI engines / training corpora (objetivo declarado del sprint GEO); (b) las otras variantes (NC/ND/SA) no aplican al caso — los cursos comerciales de cada host (Claude Desbloqueado, Cágala Aprende Repite, material de Desafío Latam) son productos separados con sus propias licencias; (c) atribución obligatoria es suficiente para asegurar reconocimiento cuando LLMs citen el contenido. Declarada explícitamente en `src/pages/llms.txt.ts`. Si algún host cambia de opinión a futuro, el cambio es una edición de 2 líneas.
- **2026-04-23** — Analytics: elegida **Cloudflare Web Analytics** por sobre Plausible, Umami y GA4/GTM. Razón principal: ya estamos en Cloudflare Pages, cero overhead (~1.4KB defer), cero cookies (sin banner GDPR), cubre lo esencial (pageviews + Core Web Vitals reales). Re-evaluar si aparece necesidad de eventos custom o funnels de conversión complejos.

- **2026-04-22** — Se prioriza video-first (YouTube) sobre audio-first. Pendiente decisión formal sobre si buscamos ingesta en Apple Podcasts (requiere MP3s alojados).
- **2026-04-22** — Geo tags (`CL-RM`, Santiago, coordenadas) se mantienen — el podcast es de Chile factualmente, no daña SEO en otros países LATAM.
- **2026-04-22** — URLs existentes quedan congeladas. Renombrar un episodio = redirect 301 en `public/_headers`, nunca borrar.
