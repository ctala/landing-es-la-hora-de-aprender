# Es la hora de aprender - Podcast Tech

> 🎙️ Tecnologías, IA y el futuro del ecosistema digital analizado semanalmente por quienes están en la cancha.

[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@EsLaHoraDeAprender_com?sub_confirmation=1)
[![Spotify](https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white)](https://open.spotify.com/show/YOUR_SHOW_ID)

---

## 🎯 El Proyecto

**"Es la hora de aprender"** es un conversatorio semanal dedicado a la tecnología, la inteligencia artificial y el ecosistema de startups en Latinoamérica.

### 🎤 Anfitriones

- **[Cristian Tala](https://www.linkedin.com/in/ctala/)** - Inversionista y emprendedor (Startup & VC)
- **[Diego Arias](https://www.linkedin.com/in/godiegoarias/)** - Experto en educación y talento digital  
- **[Rodrigo Rojo](https://www.linkedin.com/in/rodrigorojo/)** - Estratega en IA y curador de tendencias

---

## 🚀 Stack Tecnológico

- **[Astro](https://astro.build)** - Framework web moderno y rápido
- **TypeScript** - Tipado estático para mayor confiabilidad
- **Tailwind CSS** - Diseño responsivo mediante clases de utilidad
- **Neo-Brutalismo** - Estética visual con alto contraste y sombras duras

---

## 🎨 Diseño: Neo-Brutalismo Moderno

El sitio utiliza una estética Neo-brutalista caracterizada por:

- **Alto contraste**: Acid Green (`#ccff00`) + Electric Blue (`#2d5bff`)
- **Sombras duras**: Bordes negros gruesos sin difuminado
- **Tipografía masiva**: Archivo Black + Space Grotesk
- **Mobile-First**: Optimización total para dispositivos móviles

---

## 📂 Estructura del Proyecto

```
/
├── public/              # Assets estáticos
│   └── images/          # Imágenes del podcast
├── src/
│   ├── layouts/         # Plantillas base
│   │   └── BaseLayout.astro
│   ├── pages/           # Rutas del sitio
│   │   └── index.astro
│   └── content/         # Contenido estructurado
│       └── episodes/    # Metadata de episodios
├── astro.config.mjs     # Configuración de Astro
└── package.json
```

---

## 🛠️ Comandos

| Comando              | Acción                                      |
| :------------------- | :------------------------------------------ |
| `npm install`        | Instalar dependencias                       |
| `npm run dev`        | Servidor de desarrollo en `localhost:4321` |
| `npm run build`      | Compilar sitio para producción en `./dist/` |
| `npm run preview`    | Vista previa local del build                |
| `npm run validate`   | ✅ Validar build antes de deploy (recomendado) |

### ✅ Validación Pre-Deploy

**Antes de hacer push**, ejecuta:

```bash
npm run validate
```

Esto verifica:
- ✓ Build exitoso
- ✓ CSS generado correctamente  
- ✓ Episodio 1 integrado
- ✓ Embeddings YouTube + Spotify presentes

**Para previsualizar localmente:**

```bash
npm run build
npm run preview
# Abre http://localhost:4321
# Verifica que se vea correctamente
# Ctrl+C para salir
```

---

## 🚀 Deployment (Cloudflare Pages)

### Quick Start

1. **Ve a:** https://dash.cloudflare.com/
2. **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. **Selecciona repo:** `ctala/landing-es-la-hora-de-aprender`
4. **Configuración:**
   ```
   Framework preset: Astro (o None)
   Build command: npm run build
   Build output directory: dist
   Root directory: / (vacío)
   ```
5. **Save and Deploy** → Espera 2-3 min
6. **URL:** `https://landing-es-la-hora-de-aprender.pages.dev`

### Deployment Automático

Cada `git push origin main` dispara deploy automático.

**Documentación completa:** Ver [docs/CLOUDFLARE-PAGES.md](docs/CLOUDFLARE-PAGES.md)

---

## 📺 Episodios

### Episodio 1: "OpenClaw y el Futuro del Trabajo" (2026-02-18)

En nuestro episodio inaugural exploramos:

- ✅ **OpenClaw** y agentes de IA personalizados
- ✅ **Automatización** con herramientas como N8N
- ✅ **Impacto laboral** de la IA generativa
- ✅ **VPS vs Hardware físico** (Mac Mini)
- ✅ **Costos reales** de implementación ($6-100/mes)
- ✅ **One-person billion dollar companies**

**🎬 Ver:** [YouTube](https://www.youtube.com/watch?v=4hm_iLJu7RQ) | [Spotify](https://open.spotify.com/episode/5PbJqqJMZCzYFewlnqFs53)

---

## 🌐 SEO & Posicionamiento

**Keywords principales:**
- OpenClaw tutorial español
- Agentes de IA personales
- Automatización con inteligencia artificial
- Futuro del trabajo con IA
- Herramientas de automatización 2026
- Asistente virtual IA Chile

**Estrategia de contenido:**
- 📝 Transcripciones completas (SEO long-tail)
- 🎯 Timestamped chapters (retención YouTube)
- 🔗 Backlinks desde blogs personales (cristiantala.com + ecosistemastartup.com)
- 📊 Análisis de keywords con tendencias LATAM

### 🗺️ Sitemaps

El sitio incluye tres sitemaps para optimizar el rastreo por buscadores:

**Sitemap Index (Principal):**
```
https://eslahoradeaprender.com/sitemap-index.xml
```

**Sitemaps Individuales:**
```
https://eslahoradeaprender.com/sitemap.xml         # Páginas del sitio
https://eslahoradeaprender.com/video-sitemap.xml   # Videos de YouTube
```

**Robots.txt:**
```
https://eslahoradeaprender.com/robots.txt
```

**Cómo enviar a Google Search Console:**
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Añade la propiedad: `eslahoradeaprender.com`
3. **Sitemaps** → **Añadir un nuevo sitemap**
4. Envía: `sitemap-index.xml` (indexa automáticamente ambos)

**Actualización:**
- Los sitemaps se deben actualizar manualmente al agregar nuevos episodios
- Ubicación: `public/sitemap.xml` y `public/video-sitemap.xml`
- Después de actualizar, reenviar a GSC

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

**Open Source** - El código fuente está disponible públicamente para que otros puedan aprender de nuestra implementación.

---

## 🤝 Contribuir

¿Tienes sugerencias para mejorar el sitio o ideas para futuros episodios?

1. 🍴 Fork el repositorio
2. 🌿 Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push a la rama (`git push origin feature/AmazingFeature`)
5. 🔀 Abre un Pull Request

---

## 📬 Contacto

¿Quieres proponer un tema para el podcast?

- 📧 Escríbenos directamente en [LinkedIn](https://www.linkedin.com/in/ctala/)
- 💬 Deja un comentario en nuestros videos de [YouTube](https://www.youtube.com/@EsLaHoraDeAprender_com)

---

<p align="center">
  <strong>Desarrollado con ⚡️ desde Santiago de Chile</strong>
</p>
