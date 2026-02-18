# 🚀 Deployment Guide - Es la Hora de Aprender

## ✅ Migración Completada

El sitio ha sido migrado de HTML estático a **Astro** manteniendo el diseño neo-brutalista original.

---

## 📁 Estructura del Proyecto

```
podcast-es-la-hora/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro       # Layout con estilos neo-brutalistas
│   ├── pages/
│   │   └── index.astro             # Homepage con Episodio 1
│   └── content/
│       └── episodes/
│           └── 01-openclaw-futuro-trabajo.md  # Metadata + transcripción
├── public/
│   └── images/                     # Assets estáticos
├── SEO-STRATEGY.md                 # Estrategia completa de posicionamiento
├── DEPLOYMENT.md                   # Esta guía
└── README.md                       # Documentación completa
```

---

## 🎯 Primer Episodio Agregado

**Título:** "OpenClaw y el Futuro del Trabajo"  
**Fecha:** 2026-02-18  
**Duración:** 59:39

**Embeddings integrados:**
- ✅ YouTube: `https://www.youtube.com/watch?v=4hm_iLJu7RQ`
- ✅ Spotify: `https://open.spotify.com/episode/5PbJqqJMZCzYFewlnqFs53`

**Metadata SEO completa:**
- Keywords principales identificadas
- Transcripción disponible en `/src/content/episodes/`
- Timestamps para YouTube
- Topics tags

---

## 🌐 Deployment

### Opción 1: Vercel (Recomendado)

```bash
# 1. Conectar repo a Vercel
vercel

# 2. Configurar proyecto
# Framework Preset: Astro
# Build Command: npm run build
# Output Directory: dist

# 3. Deploy
vercel --prod
```

### Opción 2: Netlify

```bash
# 1. Conectar repo a Netlify

# 2. Build settings:
# Build command: npm run build
# Publish directory: dist

# 3. Deploy
```

### Opción 3: Cloudflare Pages

```bash
# 1. Conectar repo GitHub

# 2. Build configuration:
# Framework preset: Astro
# Build command: npm run build
# Build output directory: /dist

# 3. Deploy
```

### Opción 4: VPS (Custom)

```bash
# 1. Build local
npm run build

# 2. Copiar dist/ a servidor
scp -r dist/* user@server:/var/www/eslahoradeaprender.com/

# 3. Configurar Nginx/Apache
# (Ver ejemplo de config abajo)
```

**Ejemplo Nginx:**

```nginx
server {
    listen 80;
    server_name eslahoradeaprender.com www.eslahoradeaprender.com;
    
    root /var/www/eslahoradeaprender.com;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 🔄 Workflow de Actualización

### Agregar nuevo episodio:

1. **Crear archivo markdown:**
   ```bash
   src/content/episodes/02-titulo-episodio.md
   ```

2. **Agregar metadata:**
   ```markdown
   ---
   title: "Título del Episodio"
   episode: 2
   season: 1
   date: "YYYY-MM-DD"
   youtube: "URL"
   spotify: "URL"
   ...
   ---
   ```

3. **Actualizar index.astro:**
   - Agregar episodio al array `episodes`
   - Incluir embeddings de YouTube + Spotify

4. **Build & deploy:**
   ```bash
   npm run build
   # Deploy según método elegido
   ```

---

## 📊 SEO Post-Deployment

### 1. Google Search Console

```bash
# Indexar URLs manualmente:
- https://eslahoradeaprender.com/
- https://eslahoradeaprender.com/ (con trailing slash)

# Enviar sitemap (generar con plugin Astro)
```

### 2. Schema Markup (TODO)

Agregar en `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  "name": "Es la hora de aprender",
  "description": "Tecnologías, IA y el futuro del ecosistema digital",
  "url": "https://eslahoradeaprender.com",
  "author": {
    "@type": "Organization",
    "name": "Es la hora de aprender"
  }
}
```

### 3. Social Meta Tags (✅ Ya incluidas)

- Open Graph
- Twitter Cards
- Canonical URLs

---

## 📝 Blog Posts de Distribución

**Crear antes de lanzar:**

1. **cristiantala.com:**
   - "Llevo 3 Semanas con OpenClaw..." *(Draft listo)*
   - "VPS vs Mac Mini para OpenClaw" *(Pendiente)*

2. **ecosistemastartup.com:**
   - "Nuevo Podcast Tech..." *(Draft listo)*
   - "50% trabajos automatizables..." *(Pendiente)*

**Ubicación drafts:**
- `/home/moltbot/clawd/content-strategy/ctala-drafts/`
- `/home/moltbot/clawd/content-strategy/ecosistema-drafts/`

---

## ✅ Checklist Pre-Launch

- [x] Migración a Astro completada
- [x] Episodio 1 integrado (YouTube + Spotify)
- [x] README actualizado con LinkedIn personales
- [x] SEO strategy documentada
- [x] Blog posts drafts creados
- [ ] Build producción exitoso (pendiente test)
- [ ] Deploy a hosting
- [ ] DNS configurado (eslahoradeaprender.com)
- [ ] SSL certificate instalado
- [ ] Google Search Console verificado
- [ ] Sitemap enviado
- [ ] Publicar blog posts (cristiantala + ecosistema)
- [ ] Anuncio LinkedIn (3 cuentas personales)
- [ ] Anuncio comunidad Skool
- [ ] Descripción YouTube optimizada

---

## 🚨 Troubleshooting

### Error: Module not found

```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Build falla

```bash
# Revisar sintaxis Astro
npm run astro check

# Ver logs completos
npm run build --verbose
```

### Embeddings no cargan

- Verificar URLs de YouTube/Spotify (deben ser `/embed/`)
- Revisar CORS headers en servidor

---

## 📧 Contacto Deploy

Si hay problemas técnicos:
- **Nyx** (vía Telegram)
- **Cristian Tala** (LinkedIn: ctala)

---

**Última actualización:** 2026-02-18  
**Status:** ✅ LISTO PARA DEPLOY
