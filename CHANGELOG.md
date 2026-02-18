# Changelog - Es la Hora de Aprender

Todos los cambios notables del proyecto se documentan aquí.

---

## [2.0.0] - 2026-02-18

### 🚀 Migración Completa a Astro

**BREAKING CHANGES:**
- Migrado de HTML estático a Astro framework
- Estructura de archivos completamente reorganizada
- Build process ahora requerido (`npm run build`)

### ✨ Features Agregadas

**Episodio 1 Integrado:**
- Título: "OpenClaw y el Futuro del Trabajo"
- Duración: 59:39
- YouTube embedding: https://www.youtube.com/watch?v=4hm_iLJu7RQ
- Spotify embedding: https://open.spotify.com/episode/5PbJqqJMZCzYFewlnqFs53
- Metadata completa (keywords, topics, transcripción)
- Timestamps para YouTube

**LinkedIn Links Actualizados:**
- Cristian Tala: linkedin.com/in/ctala/
- Diego Arias: linkedin.com/in/godiegoarias/
- Rodrigo Rojo: linkedin.com/in/rodrigorojo/
- Links ahora son clickables en los name-tags

**SEO Optimizado:**
- Meta tags Open Graph
- Twitter Cards
- Canonical URLs
- Sitemap preparado (pending)
- Schema markup preparado (pending)

**Documentación:**
- `SEO-STRATEGY.md` - Estrategia completa de posicionamiento
- `DEPLOYMENT.md` - Guía de deployment (Vercel/Netlify/VPS)
- `README.md` - Documentación completa del proyecto
- Blog post drafts creados para distribución

### 🔧 Cambios Técnicos

**Stack:**
- Astro 5.0.0
- TypeScript (strict mode)
- Tailwind CSS via CDN
- Neo-brutalismo design system mantenido

**Estructura:**
```
src/
├── layouts/
│   └── BaseLayout.astro       # Layout con estilos globales
├── pages/
│   └── index.astro             # Homepage con episodios
└── content/
    └── episodes/
        └── 01-openclaw-futuro-trabajo.md  # Metadata + transcripción
```

**Build Output:**
- `dist/` - HTML estático generado
- `dist/index.html` - Homepage con episodio 1 integrado
- `dist/_astro/` - Assets optimizados

### 📝 Blog Posts Drafts Creados

**cristiantala.com:**
- "Llevo 3 Semanas con OpenClaw: Ahorré $1,500 y Multipliqué mi Productividad x10"
- 9,607 bytes, listo para publicar
- Ubicación: `~/clawd/content-strategy/ctala-drafts/`

**ecosistemastartup.com:**
- "Nuevo Podcast Tech: Es la Hora de Aprender..."
- 7,699 bytes, listo para publicar
- Ubicación: `~/clawd/content-strategy/ecosistema-drafts/`

### 🐛 Fixes

- Eliminado `index.html` estático de la raíz (conflicto con Astro)
- Agregado `.gitignore` para node_modules y dist/
- Frameborder warnings (deprecated HTML attr, no crítico)

### 📦 Dependencies

**Nuevas:**
- `astro@^5.0.0`
- `@astrojs/check@^0.9.0`
- `typescript@^5.0.0`

**Scripts NPM:**
```json
{
  "dev": "astro dev",
  "build": "astro check && astro build",
  "preview": "astro preview"
}
```

---

## [1.0.0] - 2026-01-XX (Fecha aproximada)

### ✨ Versión Inicial

- Landing page HTML estático
- Diseño neo-brutalista (Acid Green + Electric Blue)
- Mensaje "Coming Soon"
- Links LinkedIn en footer
- Mobile-first responsive design

---

## 🔮 Próximas Versiones

### [2.1.0] - Planificado

**Features:**
- [ ] GitHub Pages deployment automático
- [ ] Sitemap.xml generado
- [ ] Schema markup para podcasts
- [ ] RSS feed
- [ ] Analytics integrado

**Episodios:**
- [ ] Episodio 2: "N8N Deep Dive"
- [ ] Episodio 3: "Herramientas Self-Hosted"
- [ ] Episodio 4: "IA en Educación"

**Mejoras:**
- [ ] Collection para episodios (src/content.config.ts)
- [ ] Página individual por episodio (/episodios/01-openclaw-futuro-trabajo)
- [ ] Filtros por tema/tag
- [ ] Búsqueda de episodios

---

## 📌 Cómo Ver el Sitio Actualizado

**El código fuente está en `src/`, el sitio compilado en `dist/`**

### Opción 1: Build Local
```bash
npm run build
npm run preview
# Ver en http://localhost:4321
```

### Opción 2: Deploy Vercel
1. Conectar repo en https://vercel.com/new
2. Vercel detecta Astro automáticamente
3. Deploy → sitio live

### Opción 3: GitHub Pages (Próximamente)
Configuración automática planeada para v2.1.0

---

## 🤝 Contribuciones

Proyecto open source bajo Licencia MIT.

Ver [DEPLOYMENT.md](DEPLOYMENT.md) para guía completa de deployment.
Ver [SEO-STRATEGY.md](SEO-STRATEGY.md) para estrategia de posicionamiento.

---

**Mantenido por:** Nyx (AI Assistant)  
**Supervisado por:** Cristian Tala  
**Última actualización:** 2026-02-18 09:35 GMT-3
