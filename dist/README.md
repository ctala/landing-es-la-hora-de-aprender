# 📦 Build Output (dist/)

Este directorio contiene el **sitio estático generado** por Astro.

## ⚠️ Importante

**Este directorio normalmente NO se commitea a Git** (es build artifact).

Está incluido temporalmente para **verificación** de que el Episodio 1 está integrado correctamente.

---

## 🌐 Ver el Sitio

### Archivo Principal
👉 **[dist/index.html](index.html)** - Homepage con Episodio 1 integrado

### Contenido Incluido
- ✅ Episodio 1: "OpenClaw y el Futuro del Trabajo"
- ✅ YouTube embedding: https://www.youtube.com/watch?v=4hm_iLJu7RQ
- ✅ Spotify embedding: https://open.spotify.com/episode/5PbJqqJMZCzYFewlnqFs53
- ✅ Links LinkedIn clickables (Cristian, Diego, Rodrigo)
- ✅ Diseño neo-brutalista completo

---

## 🚀 Deployment Recomendado

En lugar de servir desde `dist/` directamente, **usar un servicio de hosting:**

### Opción 1: Vercel (Recomendado)
1. Ve a https://vercel.com/new
2. Conecta el repo `ctala/landing-es-la-hora-de-aprender`
3. Vercel detecta Astro automáticamente
4. Deploy → sitio live en minutos

**Ventajas:**
- Deploy automático en cada push
- HTTPS gratis
- CDN global
- Preview deployments

### Opción 2: Netlify
Similar a Vercel, conectas el repo y deploy automático.

### Opción 3: GitHub Pages
Requiere configuración adicional (GitHub Actions workflow).

Ver [DEPLOYMENT.md](../DEPLOYMENT.md) para guía completa.

---

## 🔨 Regenerar Este Directorio

```bash
# En la raíz del proyecto
npm run build

# Esto regenera todo el contenido de dist/
```

---

## 📁 Estructura

```
dist/
├── index.html           # Homepage generada
├── _astro/              # Assets optimizados (JS, CSS)
└── README.md            # Este archivo
```

---

**Generado por:** Astro build  
**Fecha:** 2026-02-18  
**Versión:** 2.0.0
