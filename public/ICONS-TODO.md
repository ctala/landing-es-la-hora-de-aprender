# 🎨 Icons & Favicons - TODO

## ⚠️ Pendiente de Generación

Los siguientes archivos están referenciados en `BaseLayout.astro` pero **NO están generados aún**:

```
public/
├── favicon.ico              # 16x16, 32x32, 48x48 (multi-size ICO)
├── favicon-16x16.png        # 16x16 PNG
├── favicon-32x32.png        # 32x32 PNG
├── apple-touch-icon.png     # 180x180 PNG (Apple devices)
├── android-chrome-192x192.png  # 192x192 PNG (Android)
└── android-chrome-512x512.png  # 512x512 PNG (Android)
```

## 🚀 Generación Rápida (Recomendado)

### Opción 1: RealFaviconGenerator (Automático)

1. **Ve a:** https://realfavicongenerator.net/
2. **Sube:** `og-image.jpg` (o crea un logo cuadrado 512x512)
3. **Configura:**
   - iOS: Background color `#2d5bff` (Electric Blue)
   - Android: Theme color `#2d5bff`
   - Windows Metro: Tile color `#ccff00` (Acid Green)
4. **Descarga** el paquete ZIP
5. **Extrae** todos los archivos a `public/`

**Resultado:** ~15 archivos con todos los tamaños necesarios

### Opción 2: Manual (Si tienes diseñador)

**Diseño sugerido:**
- **Fondo:** Electric Blue (`#2d5bff`) o Acid Green (`#ccff00`)
- **Texto:** "EHDA" en Archivo Black
- **Borde:** Negro 4px (neo-brutalismo)
- **Formato:** Cuadrado, sin padding excesivo

**Tamaños requeridos:**
- 512x512 → Master (generar todo desde este)
- 192x192 → Android
- 180x180 → Apple Touch Icon
- 32x32, 16x16 → Browser tabs
- ICO multi-size → Soporte legacy

## 📱 Iconos PWA (manifest.json)

El archivo `manifest.json` ya está configurado, solo necesita los archivos PNG:

```json
{
  "icons": [
    {
      "src": "/android-chrome-192x192.png",   // ← Generar este
      "sizes": "192x192"
    },
    {
      "src": "/android-chrome-512x512.png",   // ← Generar este
      "sizes": "512x512"
    }
  ]
}
```

## 🎯 Impacto SEO/UX

**Con favicons:**
- ✅ Profesionalismo (+branding)
- ✅ Reconocimiento visual en tabs
- ✅ PWA installable (Android/iOS)
- ✅ Bookmarks con icono propio

**Sin favicons:**
- ⚠️ Browser muestra icono genérico
- ⚠️ PWA no se puede instalar correctamente
- ⚠️ Menos profesional en mobile

**Prioridad:** Media (no crítico para SEO, crítico para UX)

## 🔧 Alternativa Temporal (Placeholder)

Si no quieres generar iconos ahora, puedes comentar las referencias en `BaseLayout.astro`:

```astro
<!-- Icons - TODO: Generate with realfavicongenerator.net
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/x-icon" href="/favicon.ico">
-->
```

**No genera errores 404**, solo no tendrás icono personalizado.

## ✅ Checklist

- [ ] Generar favicon.ico (multi-size)
- [ ] Generar favicon-16x16.png
- [ ] Generar favicon-32x32.png
- [ ] Generar apple-touch-icon.png (180x180)
- [ ] Generar android-chrome-192x192.png
- [ ] Generar android-chrome-512x512.png
- [ ] Testear en mobile (iOS/Android)
- [ ] Testear PWA install prompt

---

**Herramienta recomendada:** https://realfavicongenerator.net/  
**Última actualización:** 2026-02-18
