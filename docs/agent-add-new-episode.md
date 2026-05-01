# Skill: Agregar un episodio nuevo al sitio

Instrucciones **standalone** para que cualquier agente (OpenClaw, Claude Code, o cualquier LLM con acceso al repo) cree y publique un episodio nuevo de "Es la Hora de Aprender" end-to-end.

Este documento es la **única fuente de verdad** del flujo de publicación. Seguirlo garantiza: SEO correcto, schema válido, navegación consistente, build limpio, voz editorial diferenciada de los 3 hosts.

> **Filosofía:** el agente que ejecuta este flujo es el LLM que está leyendo ahora mismo. El "trabajo creativo" (body editorial destilado, atribuir voces, extraer takeaways/FAQs) lo hace el LLM. El "trabajo mecánico" (descargar thumbnail, validar frontmatter, build, commit, push) lo hacen scripts deterministas. **Sin yt-dlp, sin libs raras** — solo `Pillow` para thumbnails y lo que ya tiene el repo (`npm`, `git`, `bash`).

---

## Qué estás agregando

Un archivo Markdown en `src/content/episodes/XX-slug.md` donde:

- `XX` = número del episodio con cero-padding (ej. `10`, `11`)
- `slug` = kebab-case en español, sin acentos, sin stopwords innecesarias, max ~50 chars descriptivos

**El nombre del archivo ES la URL final**. Ejemplo: `10-humanos-era-ia-power-skills.md` → `https://eslahoradeaprender.com/episodios/10-humanos-era-ia-power-skills/`.

Si el frontmatter incluye `slug`, Astro lo usa en el routing — mantener consistencia entre filename y `slug` para evitar confusión.

**Nunca renombrar episodios ya publicados** — rompe links externos. Si el nombre resultó subóptimo, agregar redirect 301 en `public/_headers` en lugar de renombrar.

---

## 🚨 REGLAS DURAS (R1–R8)

### R1 — Cero invención de datos
**Cada cifra, nombre propio, herramienta, cita y fecha en el body DEBE estar en el transcript.** Si una afirmación no se mapea al transcript, omitirla. NO completar con conocimiento general del modelo. Si el transcript dice "no me acuerdo del precio", reflejarlo o omitir el dato — no inventar.

### R2 — Voz editorial destilada, NO transcript crudo
- **Longitud objetivo editorial: 1.500–2.500 palabras.** Soft warning fuera del rango.
- **Hard floor: 1.000 palabras** (debajo = body esquemático/incompleto).
- **Hard ceiling: 3.500 palabras** (encima = probable transcript crudo, no destilado).
- 8 secciones canónicas (ver más abajo).
- Diferenciar las 3 voces de los hosts con blockquotes cuando hay cita textual.
- Eliminar muletillas, "cachais", "o sea" repetitivos, chistes internos sin contexto.

### R3 — Nombres técnicos verificados
Los LLMs y los auto-captions de YouTube **suelen errar** estos nombres. Whitelist abajo. Si el transcript automático dice "Cuen" o "Open Claw", asume error y usa la forma correcta.

### R4 — Frontmatter validado contra schema Zod del repo
El schema vive en `src/content.config.ts`. **Siempre revisar el schema actual** — puede haber cambiado. El archivo del schema gana sobre este doc. Build falla si el frontmatter no cumple el Zod.

### R5 — Build limpio antes de commit (0 errors)
`npm run build` debe terminar con 0 errors. Si falla, **NO commit**. Leer error de `astro check`, corregir, re-buildear hasta verde.

### R6 — Auto-push tras build verde
Si build pasa, commit y push automáticos. Esta es decisión dura — sin review intermedio en este flujo.

### R7 — Naming `XX-slug.md`, NUNCA renombrar
Filename = URL pública. Renombrar = romper links externos.

### R8 — Thumbnails = 3 WebP desde maxresdefault.jpg oficial de YouTube
Sin yt-dlp ni libs raras. Solo `https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg` + Pillow → 3 WebP.

---

## 🎬 Pipeline (10 pasos)

### Paso 1 — Recopilar inputs

Confirmar antes de empezar:
- `youtube_url` + `youtubeId` (de `?v=` en la URL)
- `spotify_url`
- `episode_number` (entero, próximo al último publicado)
- `title` (definitivo, ≤70 chars)
- `duration` (`MM:SS` o `H:MM:SS`)
- `durationSeconds` (entero, segundos totales)
- `transcript` (path local con texto plano) — **recomendado**; si no, intentar WebFetch a YouTube captions
- `seoTitle` (≤65 chars con keyword principal al inicio + ` | EPXX`)
- `seoDescription` (120-155 chars con keyword principal e intent)
- `guests[]` (opcional, solo si hay invitados extra a los 3 canónicos)

Si falta un campo requerido, **detener y pedir** — no inventar.

### Paso 2 — Validar `episode_number` contra repo

```bash
ls src/content/episodes/ | sort -n | tail -5
```

`episode_number` debe ser el **siguiente** entero al último publicado. Si no, abortar.

### Paso 3 — Generar slug

Reglas: kebab-case, español sin acentos, sin stopwords (de, la, el, en, con, para, etc.), max ~50 chars, descriptivo y SEO-friendly.

### Paso 4 — Descargar thumbnail (3 WebP)

```bash
# Necesita Pillow: pip install Pillow
python3 - <<EOF
import urllib.request
from PIL import Image
import io

VIDEO_ID = "XXXX"  # reemplazar con youtubeId
EP = 10            # reemplazar con episode_number

# Try maxresdefault first, fallback to hqdefault
for variant in ['maxresdefault', 'hqdefault']:
    url = f'https://img.youtube.com/vi/{VIDEO_ID}/{variant}.jpg'
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=15) as r:
            data = r.read()
            if len(data) > 1000:
                break
    except: pass
else:
    raise SystemExit(f'no thumb for {VIDEO_ID}')

src = Image.open(io.BytesIO(data))
if src.mode != 'RGB': src = src.convert('RGB')

for suffix, (w,h), q in [('', (1280,720), 82), ('-sm', (648,365), 80), ('-xs', (400,225), 78)]:
    sw, sh = src.size
    target_ratio = w / h
    src_ratio = sw / sh
    if abs(src_ratio - target_ratio) < 0.01:
        out = src.resize((w,h), Image.LANCZOS)
    else:
        if src_ratio > target_ratio:
            new_w = int(sh * target_ratio); left = (sw - new_w) // 2
            cropped = src.crop((left, 0, left + new_w, sh))
        else:
            new_h = int(sw / target_ratio); top = (sh - new_h) // 2
            cropped = src.crop((0, top, sw, top + new_h))
        out = cropped.resize((w,h), Image.LANCZOS)
    out.save(f'public/thumbnails/ep{EP:02d}{suffix}.webp', 'WEBP', quality=q, method=6)
print('done')
EOF
```

Output esperado en `public/thumbnails/`:
- `epXX.webp` (1280×720, ~30-100 KB)
- `epXX-sm.webp` (648×365, ~15-40 KB)
- `epXX-xs.webp` (400×225, ~8-20 KB)

### Paso 5 — Procesar transcript (trabajo del LLM)

Leer transcript completo. Identificar:
1. 3-6 temas principales tratados
2. 8-15 timestamps con etiquetas descriptivas
3. 3-5 key takeaways accionables
4. 2-3 quotes textuales de hosts (citas memorables)
5. Recursos mencionados (herramientas, libros, papers, URLs)
6. 5-10 keywords SEO long-tail en español
7. 3-6 FAQs (preguntas que alguien googlea, intent real)
8. 5-10 topics descriptivos

Verificar nombres técnicos contra whitelist (ver al final).

### Paso 6 — Escribir el body editorial destilado

8 secciones canónicas:

```markdown
[Intro: 60–100 palabras. Hook + promesa. NO reusar `description` del frontmatter.]

## Lo que vas a aprender

- Takeaway accionable 1 (15-25 palabras)
- Takeaway accionable 2
- Takeaway accionable 3
- (3-5 bullets total)

## [Sección temática 1 — H2 idealmente en pregunta]

[2-4 párrafos destilados. Atribuir punto de vista a un host cuando aplique.]

> "Cita textual de uno de los hosts." — Cristian Tala

## [Sección temática 2-6]

...

## Tabla comparativa

[OPCIONAL — solo si compara herramientas/precios/opciones. Omitir si no aplica.]

| Opción | Cuándo conviene | Costo |
|---|---|---|
| ... | ... | ... |

## Capítulos del episodio

[OBLIGATORIA. Renderiza visualmente los timestamps[] del frontmatter — alimentan
JSON-LD pero también deben ser visibles en el body para que el lector pueda saltar
a una sección específica del video.]

- **00:02** — Etiqueta del capítulo
- **05:30** — Etiqueta
- (8-15 entradas, copiar 1:1 de timestamps[] del frontmatter)

## Preguntas frecuentes

### ¿Pregunta literal de búsqueda?

[Respuesta 40-80 palabras. Directa.]

### ¿Pregunta 2?

...

[3-6 FAQs.]

## Recursos mencionados

- **[Nombre](https://url)** — 1 línea de qué es y por qué relevante.
- ...

---

🌐 [eslahoradeaprender.com](https://eslahoradeaprender.com) · 🎧 [Spotify](https://open.spotify.com/show/7o7JR0Un1jc6wev0VjNm0C) · 📺 [YouTube](https://www.youtube.com/@EsLaHoraDeAprender_com)

_Accesibilidad: activa los subtítulos en el reproductor de YouTube para leer la conversación completa._
```

Aplicar voz canónica diferenciada de los 3 hosts (sección "Voz canónica" más abajo).

### Paso 7 — Construir frontmatter completo

Schema canónico vive en `src/content.config.ts`. Ejemplo de frontmatter completo (campos obligatorios + opcionales recomendados que alimentan JSON-LD):

```yaml
---
title: "Título corto y descriptivo"        # ≤70 chars
episode: 10                                # int
season: 1                                  # int
date: "2026-05-01"                         # YYYY-MM-DD
duration: "1:03:18"                        # MM:SS o H:MM:SS
durationSeconds: 3798                      # int
youtube: "https://www.youtube.com/watch?v=VIDEOID"
youtubeId: "VIDEOID"
spotify: "https://open.spotify.com/episode/..."
description: "2-3 oraciones, 150-250 chars, conversacional para card."
seoTitle: "Título SEO Optimizado | EP10"   # ≤65 chars
seoDescription: "Descripción 120-155 chars con keyword e intent."
ogImage: "https://eslahoradeaprender.com/thumbnails/ep10.webp"
thumbnail: "/thumbnails/ep10.webp"
hosts:
  - name: "Cristian Tala"
    linkedin: "https://www.linkedin.com/in/ctala/"
  - name: "Diego Arias"
    linkedin: "https://www.linkedin.com/in/godiegoarias/"
  - name: "Rodrigo Rojo"
    linkedin: "https://www.linkedin.com/in/rodrigorojop/"
topics:
  - "Tópico descriptivo 1"
  # 5-10 topics
keywords:
  - "keyword long-tail en minúsculas"
  # 5-10 keywords
relatedEpisodes: [4, 8, 9]                 # 2-4 enteros, todos existentes, NO incluye self
keyTakeaways:
  - "Aprendizaje accionable 1"
  # 3-5 takeaways
timestamps:
  - time: "00:01"
    seconds: 1
    label: "Bienvenida"
  # 8-15 entries — DEBEN coincidir con la sección "## Capítulos del episodio" del body
resources:
  - title: "Nombre"
    url: "https://..."
    type: "tool"        # tool | article | paper | book | video | repo | other
    description: "Breve descripción"
faq:
  - question: "¿Pregunta literal?"
    answer: "Respuesta 40-120 palabras."
  # 3-6 FAQs
guests: []                                 # vacío si no hay invitados extra
---
```

### Paso 8 — Validar pre-build

Mínima validación inline (sin scripts externos):

```bash
# Frontmatter ben formed
python3 -c "
import re, sys
p = 'src/content/episodes/10-slug.md'  # reemplazar
text = open(p).read()
assert text.startswith('---'), 'must start with ---'
end = text.find('\n---', 4)
assert end > 0, 'frontmatter not terminated'
fm_raw = text[4:end]
body = text[end+4:].strip()
words = len(re.findall(r'\b\w+\b', body))
print(f'body words: {words}')
assert words >= 1000, f'body too sparse ({words} < 1000)'
assert words <= 3500, f'body too long ({words} > 3500, probable transcript crudo)'
for sec in ['## Lo que vas a aprender', '## Capítulos del episodio', '## Preguntas frecuentes', '## Recursos mencionados']:
    assert sec in body, f'missing required section: {sec}'
print('validation OK')
"
```

### Paso 9 — Build check

```bash
npm run build
```

Debe terminar con 0 errors. Verificar HTML generado:

```bash
INDEX="dist/episodios/10-slug/index.html"
[ -f "$INDEX" ] || { echo "❌ no se generó"; exit 1; }
for schema in "PodcastEpisode" "VideoObject" "BreadcrumbList"; do
  grep -q "$schema" "$INDEX" || { echo "❌ falta $schema"; exit 1; }
done
echo "✅ schemas OK"
```

Si build falla, NO commit. Leer error y corregir.

### Paso 10 — Publish

```bash
EP=10
SLUG="10-mi-slug"
TITLE="Título corto"

git add "src/content/episodes/${SLUG}.md" \
        "public/thumbnails/ep${EP}.webp" \
        "public/thumbnails/ep${EP}-sm.webp" \
        "public/thumbnails/ep${EP}-xs.webp"

git commit -m "feat: add Episode ${EP} - ${TITLE}"
git push origin main

# IndexNow notification
[ -x "scripts/indexnow.sh" ] && bash scripts/indexnow.sh

# Cloudflare Pages deploy check (poll up to ~3 min)
LIVE_URL="https://eslahoradeaprender.com/episodios/${SLUG}/"
UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
for i in $(seq 1 18); do
  CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 8 -A "$UA" "$LIVE_URL")
  [ "$CODE" = "200" ] && echo "✓ live after $((i*10))s" && break
  sleep 10
done

echo "Live: $LIVE_URL"
echo "Validar schemas: https://validator.schema.org/"
echo "Rich Results:    https://search.google.com/test/rich-results"
```

---

## 🎙️ Voz canónica de los 3 hosts

El podcast tiene **3 anfitriones** con perfil editorial diferenciado. Las citas textuales con blockquote deben sonar **a esa persona específica**.

### Cristian Tala
**Rol:** founder + inversionista (Forja VC, Nakama Ventures, Ecosistema Startup, fundador de la comunidad CAR / Cágala Aprende Repite). Bootstrapped 2026 — opera solo con IA.

**Voz:** empírico, datos antes que aspiracional ("hice 91 tests sobre 53 modelos…"). Vulnerable con cifras concretas ("$899→$100/mes, calidad subió"). Tesis fuerte sin ego. Personal sin performativo (Enzo, Shali, sótano, 4h/día). Honestidad sobre límites — disclaimer explícito cuando recomienda.

**Léxico:** founder, bootstrapped, stack, "cierran los números", validar la etapa, soberanía técnica. Anti: modismos chilenos cerrados, personajes regionales no universales, emojis decorativos.

**Tópicos típicos:** stack de IA, costos de modelos, hardware local, comunidad CAR, agentes en N8N/OpenClaw, founders solos LATAM, estrategia bootstrapped vs VC.

### Diego Arias
**Rol:** experto en educación + talento digital. Mira el ángulo de adopción organizacional, especialmente en empresas grandes.

**Voz:** habla de personas, equipos y dinámicas humanas con la IA. Trae casos concretos B2B grandes. Práctico ("lo que funciona en 10 personas no escala a 200"). Curiosidad técnica real (clona avatar con HeyGen, prueba agentes en Slack).

**Léxico:** equipos, organización, capacitación, gestión del cambio, adopción, talento, productividad.

**Tópicos típicos:** estrategias IA en corporaciones, formación de equipos, talento digital, casos B2B grandes, dinámicas humanas con IA.

### Rodrigo Rojo
**Rol:** estratega en IA + curador de tendencias. Fronteras del meta — qué se viene, qué dejar de mirar.

**Voz:** **curador de fronteras** — siempre prueba lo último (Qwen 3.6, Kimi 2.6, Opus 4.7 nada más sale). Sintetiza tendencias rápido. Crítico calibrado — no compra el hype, pero tampoco descarta cínicamente. Comparte stack táctico ("yo uso X para Y, Z para W").

**Léxico:** modelos nombrados con precisión, "frontier", "context window", "tool calling", "MCP", "MoE", "RAG vs context stuffing", proveedores específicos (Anthropic, OpenAI, Google DeepMind, MiniMax, DeepSeek, Moonshot AI, Alibaba, Meta).

**Tópicos típicos:** comparación de modelos, herramientas nuevas que probó, benchmarks, librerías de agentes, papers que vale la pena, debates de la industria.

### Reglas de citas textuales
1. **Solo citar lo que efectivamente dijeron** (R1).
2. **Limpiar muletillas pero NO reescribir**: "eh, o sea, claro" se quita; el sentido NO cambia.
3. **Atribuir correctamente**: si Diego dijo X, no atribuirlo a Cristian aunque encaje mejor.
4. **2-3 quotes por episodio** ideal — más satura.
5. **Citas con punch**: una afirmación memorable, no relleno.

---

## 📚 Whitelist de nombres técnicos (R3)

Los LLMs y auto-captions de YouTube **suelen errar** estos nombres. Si el transcript automático escribe la versión errónea, el agente debe **corregir en el body**.

### Modelos de IA
| ✅ Correcto | ❌ Errores comunes |
|---|---|
| **Qwen** (Alibaba) | Cuen, Quen |
| **Qwen 3.5/3.6** | Cuen 3.5 |
| **Kimi** (Moonshot AI) | Quimi, Kimmy |
| **Kimi K2.6/K2** | KK2.6 |
| **DeepSeek** | Deep Seek |
| **DeepSeek V4** | DeepSeek 4 |
| **MiniMax** (mayúsculas internas) | Mini Max |
| **Anthropic** | Antropic |
| **Claude Opus 4.6/4.7** | Anthropic Opus |
| **Claude Sonnet 4.5/4.6** | Sonet, Sonnett |
| **Claude Haiku 4.5** | Aiku |
| **GPT-5.5**, **GPT-4.1** | GPT 5.5 |
| **Gemma** (Google open) | Gema |
| **Gemini 2.5 Pro/Flash** | Géminis |
| **Llama** (Meta) | Lama, LLama |
| **MiMo** (Xiaomi) | Mimo, MIMO |
| **Phi-4** (Microsoft) | Fi-4 |
| **Nemotron** (NVIDIA) | Nemotrón |

### Empresas
| ✅ Correcto | ❌ Errores |
|---|---|
| **Anthropic** | Antropic |
| **OpenAI** | Open AI |
| **Google DeepMind** | Google deep mind |
| **Moonshot AI** | MoonShot |
| **MiniMax** | (notar capitalización) |
| **NVIDIA** | Nvidia |

### Plataformas / servicios
| ✅ Correcto | ❌ Errores |
|---|---|
| **OpenClaw** | Open Claw, OpenClau |
| **Groq** (no Grok!) | (Groq es inferencia rápida; Grok es modelo de xAI) |
| **NVIDIA NIM** | Nvidia Nim |
| **OpenRouter** | Open Router |
| **HeyGen** | Hey Gen |
| **GenSpark** | Gen Spark |
| **Ollama** | Olama |

### Conceptos técnicos
- **MCP** (Model Context Protocol)
- **MoE** (Mixture of Experts)
- **RAG** (Retrieval-Augmented Generation)
- **LLM-as-Judge** (con guiones)
- **tool calling** (Anthropic prefiere "tool use")
- **prompt caching**

### Personas frecuentes
- **Cristian Tala**, **Diego Arias**, **Rodrigo Rojo** (los hosts)
- **Jensen Huang** (CEO NVIDIA)
- **Sam Altman** (CEO OpenAI)
- **Dario Amodei** (CEO Anthropic)
- **Demis Hassabis** (CEO Google DeepMind)
- **Yann LeCun** (Chief Scientist Meta AI)

### Si encuentras un nombre nuevo no listado
1. Buscar referencia oficial.
2. Si confirma forma canónica, usar esa.
3. **Si no se puede confirmar**, NO incluir el nombre — describir genéricamente.

---

## ✅ Checklist final

**Archivo y frontmatter**
- [ ] Archivo `.md` con naming `XX-slug.md`
- [ ] Frontmatter completo y válido contra `src/content.config.ts`
- [ ] `seoTitle` ≤65 chars, `seoDescription` 120-155 chars
- [ ] 3 thumbnails `epXX.webp`/`epXX-sm.webp`/`epXX-xs.webp` en `public/thumbnails/`
- [ ] URLs YouTube/Spotify correctas
- [ ] `topics` y `keywords` específicos
- [ ] `relatedEpisodes` 2-4 números, todos existentes, NO incluye self
- [ ] `timestamps[]` 8-15 entries, alineadas con sección "Capítulos del episodio" del body

**Body editorial**
- [ ] Intro 60-100 palabras (hook + promesa)
- [ ] `## Lo que vas a aprender` con 3-5 takeaways
- [ ] 3-6 secciones temáticas (H2 idealmente en pregunta)
- [ ] `## Capítulos del episodio` (renderizando timestamps[] del frontmatter)
- [ ] `## Preguntas frecuentes` con 3-6 FAQs
- [ ] `## Recursos mencionados` con links
- [ ] 2-3 blockquotes citando hosts (atribuidos correctamente)
- [ ] Longitud body 1.500-2.500 palabras (target editorial; hard floor 1.000, hard ceiling 3.500)
- [ ] Nombres técnicos verificados contra whitelist
- [ ] Sin transcript crudo, sin muletillas, sin datos privados

**Build**
- [ ] `npm run build` con 0 errors
- [ ] HTML incluye `PodcastEpisode` + `VideoObject` + `BreadcrumbList`

**Publish**
- [ ] Commit: `feat: add Episode XX - <título>`
- [ ] Push a `main` → Cloudflare Pages auto-deploy
- [ ] IndexNow notification
- [ ] Validar live URL responde HTTP 200 (poll hasta ~3 min)

---

## Versionado del documento

- **2026-05-01:** v2 reescrita standalone con reglas R1-R8, voz canónica diferenciada, whitelist de nombres técnicos, hard limits sensatos (1.000-3.500), Capítulos del episodio obligatoria, post-deploy poll. Aprendizajes del EP10 (primer episodio publicado por skill end-to-end).
- **2026-04-XX:** v1 inicial.
