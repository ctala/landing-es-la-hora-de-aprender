# 🌐 Cloudflare Pages Deployment

Guía completa para deploy del sitio en Cloudflare Pages.

---

## 🚀 Setup Inicial (Primera Vez)

### 1. Conectar Repositorio

1. Ve a: https://dash.cloudflare.com/
2. **Workers & Pages** → **Create application** → **Pages**
3. **Connect to Git** → Autoriza GitHub
4. Selecciona el repositorio: `ctala/landing-es-la-hora-de-aprender`

### 2. Configuración del Build

**Framework preset:** Astro (o "None" si no aparece)

**Build configuration:**
```
Build command: npm run build
Build output directory: dist
Root directory: / (dejar vacío o default)
```

**Branch deployments:**
- Production branch: `main`
- Preview deployments: Enabled ✓

**Build settings:**
- Build watch paths: `*` (default)
- Build system version: Version 3 (default)
- Enable build comments: ✓ (recomendado)

### 3. Variables de Entorno

**No se necesitan variables de entorno** para este proyecto.

(Si en el futuro se agregan APIs privadas, agregar aquí)

### 4. Deploy

1. Click **"Save and Deploy"**
2. Cloudflare inicia el primer build automáticamente
3. Espera 2-3 minutos
4. Tu sitio estará live en: `https://landing-es-la-hora-de-aprender.pages.dev`

---

## 🔧 Configuración Adicional (Opcional pero Recomendada)

### Build Cache (Acelera Builds)

En **Settings** → **Build**:
- **Build cache:** Enable ✓

Esto cachea `node_modules` y reduce el tiempo de build de ~90s a ~30s.

### Custom Domain

Si tienes `eslahoradeaprender.com`:

1. **Settings** → **Custom domains** → **Set up a custom domain**
2. Agregar: `eslahoradeaprender.com`
3. Agregar: `www.eslahoradeaprender.com`
4. Cloudflare configura DNS automáticamente
5. SSL se activa automáticamente (gratis)

---

## 🔄 Deploy Automático

Cada vez que haces `git push origin main`:
1. Cloudflare detecta el push (webhook)
2. Ejecuta `npm run build`
3. Deploy automático del contenido de `dist/`
4. URL de producción actualizada

**Preview deployments:**
- Pull Requests generan preview URLs automáticamente
- Formato: `https://COMMIT-HASH.landing-es-la-hora-de-aprender.pages.dev`

---

## ✅ Validación Pre-Deploy (Recomendado)

**Antes de hacer push, valida localmente:**

```bash
# Desde la raíz del proyecto
bash scripts/validate-build.sh
```

Este script verifica:
- ✓ Build exitoso
- ✓ CSS generado correctamente
- ✓ Episodio 1 integrado
- ✓ Embeddings presentes

**Preview local antes de push:**

```bash
npm run build
npm run preview
# Abre http://localhost:4321
# Revisa que se vea correctamente
# Ctrl+C para salir
```

---

## 🐛 Troubleshooting

### Problema: Sitio se ve sin estilos

**Causa:** Tailwind CSS no está integrado correctamente.

**Solución:**
1. Verifica que exista: `src/styles/global.css`
2. Verifica que contenga: `@import "tailwindcss";`
3. Verifica que `BaseLayout.astro` importe: `import '../styles/global.css';`
4. **NO uses** `<script src="https://cdn.tailwindcss.com"></script>`

### Problema: Build falla en Cloudflare

**Ver logs:**
1. **Deployments** → Click en el deployment fallido
2. **View build log**
3. Buscar el error específico

**Errores comunes:**

**Error: `npm ERR! missing script: build`**
- Solución: Verifica que `package.json` tenga `"build": "astro check && astro build"`

**Error: `Module not found`**
- Solución: Commit `package-lock.json` al repo
- Cloudflare usa `npm ci` (necesita lock file)

**Error: `dist/ is empty`**
- Solución: Verifica que `astro.config.mjs` NO tenga output adapter
- Para páginas estáticas, no usar `@astrojs/node` u otros adapters

### Problema: Deployment no se dispara automáticamente

**Verificar webhook:**
1. **Settings** → **Builds & deployments** → **Build configurations**
2. Branch control: `main` debe estar activo
3. Automatic deployments: `Enabled`

**Forzar deployment manualmente:**
- Opción 1: **Deployments** → **Create deployment** → Branch `main`
- Opción 2: Commit vacío:
  ```bash
  git commit --allow-empty -m "trigger: Force Cloudflare rebuild"
  git push origin main
  ```

---

## 📊 Monitoreo y Analytics

### Build Stats

En **Deployments** puedes ver:
- Tiempo de build
- Errores/warnings
- Assets generados
- Tamaño del bundle

### Analytics (Opcional)

Cloudflare Pages incluye **Web Analytics gratis**:
1. **Settings** → **Analytics**
2. Enable Web Analytics
3. Ver tráfico, páginas vistas, geolocalización, etc.

---

## 🔐 Seguridad

### Headers de Seguridad (Recomendado)

Crear archivo `public/_headers`:

```
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Cloudflare aplicará estos headers automáticamente.

### HTTPS

- SSL automático (gratis)
- Certificados renovados automáticamente
- HTTPS enforced por defecto

---

## 📈 Performance

### Optimizaciones Automáticas

Cloudflare Pages incluye:
- ✓ Brotli compression
- ✓ HTTP/2 & HTTP/3
- ✓ CDN global (200+ locations)
- ✓ Auto-minify HTML/CSS/JS

### Cache Control

Assets en `dist/_astro/` tienen cache automático:
- CSS/JS: `max-age=31536000` (1 año)
- HTML: `no-cache` (siempre fresh)

---

## 🆘 Soporte

**Documentación oficial:**
- https://developers.cloudflare.com/pages/

**Si tienes problemas:**
1. Revisa los logs del build en Cloudflare
2. Valida localmente con `bash scripts/validate-build.sh`
3. Compara con el commit anterior que funcionaba

---

## 📝 Checklist Deploy

Antes de cada deploy importante:

- [ ] `bash scripts/validate-build.sh` pasa
- [ ] Preview local se ve correctamente (`npm run preview`)
- [ ] Commit descriptivo con changelog
- [ ] Push a `main`
- [ ] Verificar deploy en Cloudflare
- [ ] Probar URL de producción
- [ ] Verificar en mobile (responsive)

---

**Última actualización:** 2026-02-18  
**Mantenido por:** Nyx + Cristian Tala
