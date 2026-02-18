# 📊 Google Search Console - Setup Guide

**Sitio:** https://eslahoradeaprender.com

---

## 🚀 Configuración Inicial

### 1. Verificar Propiedad del Sitio

1. **Ve a:** https://search.google.com/search-console
2. **Agregar propiedad** → Tipo: **Prefijo de URL**
3. **URL:** `https://eslahoradeaprender.com`

### 2. Método de Verificación (Cloudflare Pages)

**Opción recomendada: DNS (TXT record)**

1. Google te dará un código como: `google-site-verification=ABC123XYZ`
2. En Cloudflare DNS, agrega:
   - Type: `TXT`
   - Name: `@` (o raíz del dominio)
   - Content: `google-site-verification=ABC123XYZ`
   - TTL: Auto
3. Vuelve a Google Search Console → Click **Verificar**

---

## 📄 Enviar Sitemaps

Una vez verificado el sitio:

### Sitemap Index (Principal)

1. **Search Console** → **Sitemaps** (menú izquierdo)
2. **Agregar sitemap:** `sitemap-index.xml`
3. **Enviar**

**Este sitemap incluye automáticamente:**
- ✅ `sitemap.xml` (páginas)
- ✅ `video-sitemap.xml` (videos de YouTube)

### Sitemaps Individuales (Opcional)

También puedes enviar cada uno por separado:

1. `sitemap.xml` - Páginas del sitio
2. `video-sitemap.xml` - Videos de YouTube

---

## 🎥 Video Sitemap (YouTube SEO)

### Características del Video Sitemap

Nuestro `video-sitemap.xml` incluye:

**Metadatos completos para cada episodio:**
- ✅ Thumbnail (maxresdefault de YouTube)
- ✅ Título optimizado para SEO
- ✅ Descripción completa
- ✅ URL del contenido (YouTube watch)
- ✅ Player embed URL
- ✅ Duración en segundos
- ✅ Fecha de publicación
- ✅ Family-friendly: yes
- ✅ Uploader info
- ✅ 12+ tags por video
- ✅ Categoría: Technology

**Beneficios:**
- 🎯 Videos aparecen en Google Video Search
- 🎯 Rich snippets en resultados de búsqueda
- 🎯 Thumbnails en SERPs
- 🎯 Mejor posicionamiento para queries de video
- 🎯 Métricas de video en Search Console

---

## 📊 Qué Monitorear

### Después de 48-72 horas:

**Performance (Rendimiento):**
- Impresiones totales
- Clicks totales
- CTR promedio
- Posición promedio

**Cobertura:**
- Páginas indexadas (debe mostrar 2: homepage + episodio 1)
- Errores (idealmente 0)
- Páginas válidas con advertencias

**Videos:**
- Impresiones en Video Search
- Clicks en videos
- Posición promedio de videos

**Experience (Core Web Vitals):**
- LCP (Largest Contentful Paint) - debe ser verde
- FID (First Input Delay) - debe ser verde
- CLS (Cumulative Layout Shift) - debe ser verde

---

## 🎯 Keywords a Monitorear (Queries)

Después de 7 días, revisa en **Performance** → **Search queries**:

**Keywords principales esperadas:**
- es la hora de aprender podcast
- openclaw tutorial español
- podcast tecnología chile
- agentes ia personalizados
- futuro del trabajo ia
- cristian tala podcast
- diego arias podcast
- rodrigo rojo podcast

**Long-tail keywords:**
- openclaw vs chatgpt
- como instalar openclaw
- automatización con ia chile
- vps vs mac mini para ia
- n8n tutorial español

---

## 🔧 Troubleshooting

### "Sitemap no se puede leer"

**Causa:** Error de formato XML  
**Solución:** Validar en https://www.xml-sitemaps.com/validate-xml-sitemap.html

### "URL no está en Google"

**Causa:** Normal las primeras 48-72 horas  
**Solución:** 
1. **Request Indexing** en Search Console
2. Compartir URL en redes sociales (acelera crawling)
3. Backlinks desde cristiantala.com y ecosistemastartup.com

### "Videos no aparecen"

**Causa:** Video sitemap no procesado aún  
**Solución:**
1. Verificar que `video-sitemap.xml` esté enviado
2. Esperar 7-14 días para indexación de videos
3. Verificar que VideoObject schema esté presente

---

## 📈 Métricas de Éxito (30 días)

| Métrica | Objetivo |
|---------|----------|
| Páginas indexadas | 2 (homepage + ep1) |
| Impresiones | 500+ |
| Clicks | 25+ |
| CTR | 5%+ |
| Posición promedio | <30 |
| Videos indexados | 1 |
| Errores | 0 |

---

## 🔗 URLs Clave a Indexar

**Páginas:**
- `https://eslahoradeaprender.com/`
- `https://eslahoradeaprender.com/episodios/01-openclaw-futuro-trabajo`

**Sitemaps:**
- `https://eslahoradeaprender.com/sitemap-index.xml`
- `https://eslahoradeaprender.com/sitemap.xml`
- `https://eslahoradeaprender.com/video-sitemap.xml`

**Videos (YouTube):**
- `https://www.youtube.com/watch?v=4hm_iLJu7RQ`

---

## 🎓 Recursos Adicionales

**Validadores:**
- Schema markup: https://validator.schema.org/
- Rich results: https://search.google.com/test/rich-results
- Sitemap validator: https://www.xml-sitemaps.com/validate-xml-sitemap.html

**Documentación Google:**
- Video sitemaps: https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps
- Podcast SEO: https://developers.google.com/search/docs/appearance/podcast-home

---

**Última actualización:** 2026-02-18  
**Responsable:** Nyx + Cristian Tala
