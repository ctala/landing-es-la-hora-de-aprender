---
description: Agregar un episodio nuevo al sitio siguiendo el workflow editorial + SEO
argument-hint: [número de episodio y título corto opcional]
---

Vas a agregar un episodio nuevo al sitio "Es la Hora de Aprender" siguiendo estrictamente el workflow definido en `docs/agent-add-new-episode.md`. Ese documento es la única fuente de verdad — léelo completo antes de hacer cualquier cambio.

Pasos obligatorios:

1. **Lee primero** `docs/agent-add-new-episode.md` y `src/content.config.ts` (schema Zod actual).
2. **Pídeme los datos del episodio** que falten: título, número, fecha, duración, YouTube/Spotify URLs, hosts, descripción, topics, keywords. No inventes datos.
3. **Confirma conmigo el slug del filename** antes de crear el archivo — el filename es la URL y no se puede renombrar después.
4. **Crea el `.md`** en `src/content/episodes/XX-slug.md` con frontmatter completo y body ≥1.200 palabras.
5. **Valida con `npm run build`** — debe pasar con 0 errores y 0 warnings de `astro check`.
6. **Verifica el HTML generado** (shownotes renderizados, JSON-LD `PodcastEpisode`/`VideoObject`/`BreadcrumbList` presentes).
7. **No hagas commit automático** — muéstrame el diff y espera mi aprobación.

Restricciones:

- Repo público: no incluyas datos sensibles, emails personales sin consentimiento, ni tokens.
- Preserva performance: no agregues librerías ni JS cliente.
- No modifiques BaseLayout, componentes compartidos, ni otros archivos salvo estrictamente necesario para el episodio.
- No renombres archivos existentes.

Argumento recibido: $ARGUMENTS
