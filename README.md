# Es la Hora de Aprender - Podcast Tech

> 🎙️ Tecnologías, IA y el futuro del ecosistema digital analizado semanalmente por quienes están en la cancha.

[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@EsLaHoraDeAprender_com?sub_confirmation=1)
[![Spotify](https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white)](https://open.spotify.com/show/7o7JR0Un1jc6wev0VjNm0C)

**🌐 Live:** [eslahoradeaprender.com](https://eslahoradeaprender.com) | **v3.1.0**

![Performance](https://img.shields.io/badge/Performance-94-brightgreen?style=flat-square)
![Accessibility](https://img.shields.io/badge/Accessibility-95-brightgreen?style=flat-square)
![Best Practices](https://img.shields.io/badge/Best_Practices-96-brightgreen?style=flat-square)
![SEO](https://img.shields.io/badge/SEO-92-brightgreen?style=flat-square)

---

## 🎤 Anfitriones

- **[Cristian Tala](https://cristiantala.com)** — Inversionista y emprendedor (Startup & VC)
- **[Diego Arias](https://godiegoarias.com)** — Experto en educación y talento digital
- **[Rodrigo Rojo](https://www.rojo.me)** — Estratega en IA y curador de tendencias

---

## 🚀 Stack

- **[Astro 5](https://astro.build)** — Content Collections + SSG
- **Tailwind CSS v4** — `@theme` con colores custom
- **TypeScript + Zod** — Schema tipado
- **Cloudflare Pages** — Deploy automático on push
- **Neo-Brutalismo** — Acid Green `#ccff00` + Electric Blue `#2d5bff`

---

## 📺 Episodios

| # | Título | Fecha | Links |
|---|--------|-------|-------|
| 2 | Herramientas de IA, Build vs Buy y Por Qué los Procesos Importan Más | 2026-02-26 | [YouTube](https://www.youtube.com/watch?v=43nvC-1fxKY) · [Spotify](https://open.spotify.com/episode/5muA5rtP0sWEwxZgt12dF9) · [Web](https://eslahoradeaprender.com/episodios/02-herramientas-ia-build-vs-buy) |
| 1 | OpenClaw y el Futuro del Trabajo | 2026-02-18 | [YouTube](https://www.youtube.com/watch?v=4hm_iLJu7RQ) · [Spotify](https://open.spotify.com/episode/5PbJqqJMZCzYFewlnqFs53) · [Web](https://eslahoradeaprender.com/episodios/01-openclaw-futuro-trabajo) |

### Agregar un episodio

Crear `src/content/episodes/XX-slug.md` con frontmatter → push. Se genera automáticamente: página, sitemap, video-sitemap, RSS, navegación prev/next.

Ver checklist completo: [`skills/podcast-eslahoradeaprender/SKILL.md`](../../skills/podcast-eslahoradeaprender/SKILL.md)

---

## 📂 Estructura

```
src/
├── content.config.ts              # Schema Zod (Content Collections)
├── content/episodes/              # Un .md por episodio
├── components/
│   ├── SiteHeader.astro
│   └── SiteFooter.astro
├── layouts/BaseLayout.astro       # SEO, schemas, fonts
├── pages/
│   ├── index.astro                # Homepage (YouTube facade pattern)
│   ├── episodios/[...slug].astro  # Ruta dinámica
│   ├── feed.xml.ts                # RSS dinámico
│   ├── video-sitemap.xml.ts       # Video sitemap dinámico
│   └── 404.astro
└── styles/global.css

public/
├── thumbnails/                    # WebP self-hosted (sm + full)
├── robots.txt
├── manifest.json
├── sw.js
└── og-image.jpg
```

---

## 🛠️ Comandos

```bash
npm install          # Instalar dependencias
npm run dev          # Dev server en localhost:4321
npm run build        # Build producción → ./dist/
npm run preview      # Preview local del build
npm run validate     # Validar build pre-deploy
```

---

## ⚡ Performance (v3.1.0)

| Métrica | Valor |
|---------|-------|
| FCP | 2.5s |
| LCP | 2.5s |
| TBT | 0ms |
| CLS | 0.001 |

**Optimizaciones:**
- YouTube facade pattern (0 iframes en carga inicial, click-to-play)
- Google Fonts async (preload + onload, non-render-blocking)
- Thumbnails self-hosted WebP (29-33KB por card)
- Zero JavaScript bundle (solo facade script inline)

---

## 🌐 SEO

**Features:**
- Schema markup: PodcastSeries, PodcastEpisode, VideoObject, BreadcrumbList
- hreflang: es, es-cl, x-default
- Geo tags: Santiago, Chile
- RSS feed: [/feed.xml](https://eslahoradeaprender.com/feed.xml)
- Sitemaps: [index](https://eslahoradeaprender.com/sitemap-index.xml) · [video](https://eslahoradeaprender.com/video-sitemap.xml)
- Open Graph + Twitter Cards
- Canonical URLs por página

---

## 📄 Licencia

MIT — Ver [LICENSE](LICENSE).

---

<p align="center">
  <strong>Hecho con ⚡️ desde Santiago de Chile</strong>
</p>
