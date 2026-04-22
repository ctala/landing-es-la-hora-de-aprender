---
description: Agregar un episodio nuevo al sitio siguiendo el estándar editorial "modo B" y el workflow SEO
argument-hint: [número de episodio y título corto opcional]
---

Vas a agregar un episodio nuevo al sitio "Es la Hora de Aprender" siguiendo estrictamente el estándar editorial **modo B** definido en `docs/agent-add-new-episode.md`. Ese documento es la única fuente de verdad — léelo completo antes de hacer cualquier cambio.

**Decisión editorial del proyecto**: usamos editorial destilado (~1.500–2.500 palabras), NO transcript crudo, NO muro de texto. Cada episodio es una pieza editorial densa con 8 secciones obligatorias.

Pasos obligatorios:

1. **Lee primero** `docs/agent-add-new-episode.md` y `src/content.config.ts` (schema Zod actual).
2. **Pídeme los datos del episodio** que falten: título, número, fecha, duración, YouTube/Spotify URLs, hosts, descripción, topics, keywords. No inventes datos.
3. **Confirma conmigo el slug del filename** antes de crear el archivo — el filename es la URL y no se puede renombrar después.
4. **Si tengo un transcript disponible**, úsalo como fuente primaria (fuera del repo, probablemente en `transcripts/` local o un path que yo te indique). **Nunca incluyas el transcript crudo en el body** — destílalo en las 8 secciones del modo B.
5. **Crea el `.md`** en `src/content/episodes/XX-slug.md` con frontmatter completo y body editorial siguiendo las 8 secciones: intro → Lo que vas a aprender → 3–6 secciones temáticas (H2 en forma de pregunta) → tabla comparativa si aplica → Capítulos del episodio (8–15 timestamps) → Preguntas frecuentes (3–6 FAQs) → Recursos mencionados → footer de accesibilidad. Longitud objetivo: 1.500–2.500 palabras.
6. **Verifica nombres propios técnicos** contra la fuente: Qwen, Kimi, OpenClaw (creador: Peter Steinberger), MiniMax, Anthropic, Claude Opus/Sonnet, GenSpark, HeyGen, Ollama, Gemma, Jensen Huang, Andrej Karpathy, etc. Los transcripts automáticos suelen fallar con estos.
7. **Links internos a otros episodios**: verificar que el slug existe antes de escribir el link (`ls src/content/episodes/` o consultar frontmatter si hay `slug:` explícito). Hoy son hardcoded — ver `ROADMAP.md` para la mejora planeada.
8. **Valida con `npm run build`** — debe pasar con 0 errores y 0 warnings de `astro check`.
9. **Verifica el HTML generado**: `<Content />` renderiza el body, JSON-LD `PodcastEpisode` + `VideoObject` + `BreadcrumbList` presentes.
10. **Actualiza docs sincronizadas antes de commitear**: `CHANGELOG.md` (entrada nueva), `package.json` (bump de versión), `README.md` si aplica, `ROADMAP.md` si marca algún item done. Ver regla "Documentación sincronizada" en `CLAUDE.md`.
11. **No hagas commit automático** — muéstrame el diff y espera mi aprobación.

Restricciones:

- Repo público: no incluyas datos sensibles, emails personales sin consentimiento, ni tokens. Privacy scrub sobre comentarios off-record de terceros.
- Preserva performance: no agregues librerías ni JS cliente.
- No modifiques BaseLayout, componentes compartidos, ni otros archivos salvo estrictamente necesario para el episodio.
- No renombres archivos existentes.

Argumento recibido: $ARGUMENTS
