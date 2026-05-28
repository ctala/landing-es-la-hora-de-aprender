# Estrategia SEO de crecimiento — eslahoradeaprender.com

> **Objetivo del sitio:** dejar de ser un archivo de episodios invisible y convertirse en (1) motor de **discoverability** orgánica y (2) **funnel** hacia las comunidades (CAR de Cristian + comunidad de Rodrigo Rojo).
>
> **Fecha:** 27-may-2026 · **Autor:** Claude Code (skills `seo-audit` + `programmatic-seo`) · **Datos:** GSC real + DataForSEO (España + México).
>
> Este doc es el "plan completo primero". La construcción se hace por fases (ver §10). Es distinto de los audits técnicos previos (`SEO-TECHNICAL-AUDIT.md`, `ASTRO-SEO-AUDIT.md`) — esto es estrategia de contenido + funnel, no Lighthouse.

---

## 1. TL;DR (la tesis en 5 líneas)

1. El sitio recibe **23 clics orgánicos en 90 días** (CTR 1,57%, posición media 7,7). Está invisible.
2. Solo rankea por queries-noticia transitorias (`cayó claude`) que caducan y tienen CTR ~0.
3. Pero el podcast habla todo el tiempo de temas con **demanda evergreen masiva y competencia baja**: `claude code` (~72K/mes ES+MX), `n8n` (33K/mes MX), `openclaw` (~30K/mes ES+MX), `agentes de ia`, `hermes agent`, `gemini vs chatgpt`.
4. Falta la capa evergreen: **páginas-pilar por tema**, cada una cruzada con los episodios donde se habló del tema, y con CTA dura a las comunidades.
5. El modelo "episodio = noticia" se mantiene para frescura, pero los **hubs de tema** son lo que rankea, retiene y convierte.

---

## 2. Diagnóstico (Search Console, datos reales)

| Métrica | Últimos 28 días | Últimos 90 días |
|---|---:|---:|
| Clics | 16 | 23 |
| Impresiones | 1.160 | 1.468 |
| CTR | 1,38 % | 1,57 % |
| Posición media | 7,8 | 7,7 |

**Top páginas (90d):** EP08 "crisis Anthropic" = 616 imp / 10 clics (¡el 42% de TODAS las impresiones del sitio!). Homepage = 115 imp / 11 clics. El resto de episodios, casi 0 clics.

**Top queries (90d):** `cayó claude`, `claude cae`, `claude crisis`, `claude se cae` — todas posición ~10, **0 clics**. Queries reactivas de noticia, baja intención, caducan.

**Geografía:** España 419 imp / 10 clics · Chile 151/10 · México 114/1 · Argentina 59/2. (España y Chile aportan los clics.)

### Problemas de fondo

| # | Problema | Impacto | Evidencia |
|---|---|---|---|
| P1 | **Trampa de queries-noticia.** Solo rankea contenido reactivo que muere a los días y compite con medios. | Alto | Top queries = `cayó claude`; EP08 = 42% de impresiones |
| P2 | **CTR catastrófico (1,57% en pos 7,7).** A esa posición lo normal es 3-5%. | Alto | Desajuste intención (buscan noticia, ven podcast) + titles/metas no optimizados |
| P3 | **Sitio anémico.** ~16 páginas indexables (home + índice + 14 episodios). Cero evergreen. | Alto | `find src/pages` |
| P4 | **Funnel ausente.** La homepage NO enlaza a CAR ni a la comunidad de Rodrigo. | Alto (objetivo central) | grep vacío en `index.astro` |
| P5 | **URLs duplicadas con/sin slash final** dividen señales. | Medio | GSC muestra `/episodios/01-...` y `/episodios/01-.../` por separado |

---

## 3. La oportunidad (DataForSEO — volúmenes reales)

Volúmenes mensuales de búsqueda. **ES+MX es un piso conservador** (faltan Chile, Argentina, Colombia, USA-hispano, resto). Lo crítico: **competencia baja en los head terms**.

| Keyword (tema) | España | México | Competencia | Nota |
|---|---:|---:|---|---|
| **claude code** | 49.500 | 22.200 | LOW / LOW | 🔥 gigante, baja comp |
| **n8n** | (pendiente) | 33.100 | MEDIUM | 🔥 CAR tiene curso de n8n |
| **openclaw** | 22.200 | 8.100 | LOW / MEDIUM | 🔥 ya rankeamos pos 5,5 con un episodio |
| **gemini vs chatgpt** | 1.600 | 880 | LOW | comparativa evergreen |
| **agentes de ia** | 1.000 | 720 | MEDIUM | head del tema central del show |
| **hermes agent** | 1.300 | 390 | LOW | CPC alto ($9,39) = intención comercial |
| **podcast inteligencia artificial** | 110 | — | LOW | branded-genérico, fácil ganar |

**Lectura:** estamos sentados arriba de >100K búsquedas/mes (solo ES+MX) en temas que ya dominamos conversacionalmente, con competencia baja, y capturamos ~0 porque no hay ni una página rankeable para ellos. Esto NO es keyword-stuffing: es nuestro expertise real (lo hablamos en cada episodio).

---

## 4. Estrategia: hubs de tema ↔ episodios ↔ comunidades

Arquitectura **hub-and-spoke** en tres capas:

```
        ┌─────────────────────────────────────────────┐
        │   PILAR/GUÍA (evergreen, rankeable)          │
        │   /guias/claude-code/  · /guias/openclaw/    │
        │   Guía actualizada · target = head term      │
        └───────────────┬───────────────┬──────────────┘
            enlaza a     │               │   CTA dura
        ┌────────────────▼───┐     ┌─────▼─────────────────┐
        │ EPISODIOS del tema │     │  COMUNIDADES (funnel) │
        │ EP07,08,13,14...   │     │  CAR + curso · Rodrigo│
        └────────────────────┘     └───────────────────────┘
```

- **Hub de tema (pilar):** página evergreen que rankea por el head term. Explica el tema bien, se actualiza, y es el destino orgánico.
- **Episodios (spokes):** cada episodio que tocó ese tema enlaza "hacia arriba" al hub; el hub lista los episodios relevantes como "profundiza escuchando".
- **Comunidades:** cada hub cierra con CTA al recurso de pago/comunidad que corresponde (ej. hub de n8n → curso "Automatiza con n8n" en CAR; hub Claude Code → Cofre del Pirata; hub agentes → curso AAS).

Esto resuelve los 4 problemas: rankea evergreen (P1), mejora CTR con intención correcta (P2), engorda el sitio con páginas valiosas (P3), y mete el funnel donde llega el tráfico (P4).

---

## 5. Mapa de hubs de tema (pilares) ↔ episodios ↔ funnel

Cada hub = un tema recurrente del podcast. Construir por prioridad (volumen × bajo esfuerzo × fuerza de funnel).

| Hub `/guias/{slug}/` | Target keyword | Vol (ES+MX) | Episodios que enlazan | Funnel principal |
|---|---|---:|---|---|
| **claude-code** | claude code (qué es, cómo empezar, precio) | ~71.700 | EP07, EP08, EP13, EP14 | Cofre del Pirata (Claude Code prompts/workflows) |
| **n8n** | n8n (qué es, para qué sirve, tutorial) | 33.100+ | EP02, EP12, EP14 | Curso "Automatiza con n8n" (MC-04) en CAR |
| **openclaw** | openclaw (qué es, vs Hermes, instalar) | ~30.300 | EP01, EP04, EP05, EP13, EP14 | CAR (agentes) |
| **agentes-de-ia** | agentes de ia (qué son, cómo crear, para empresas) | ~1.720 | EP04, EP05, EP12, EP14 | Curso AAS (AI Agents Starter Kit) en CAR |
| **hermes-agent** | hermes agent / nous research | ~1.690 | EP13, EP14 | CAR (agentes) |
| **gemini-vs-chatgpt-claude** | gemini vs chatgpt (vs claude) | ~2.480 | EP08, EP13 | Benchmark IA + CAR |
| **validar-idea-con-ia** | cómo validar una idea de negocio con ia | long-tail | EP11, EP14 | Curso "Validación de Ideas" en CAR |
| **emprender-con-ia** | emprender con inteligencia artificial | long-tail creciente | EP11, EP14 | CAR (home funnel) |

> **El punto que pediste:** cada tema se relaciona explícitamente con los episodios donde se habló — el hub lista "Lo hablamos en estos episodios" y cada episodio gana un bloque "Tema relacionado → guía completa". Esto crea el internal-linking que hoy no existe.

---

## 6. Capa programática (playbooks a escala)

Sobre los hubs, escalar con playbooks del skill `programmatic-seo`. Empezar por los 3 de mayor ROI y baja canibalización:

### 6.1 Comparativas — `/comparativas/{a}-vs-{b}/` (playbook Comparisons)
Patrón `[modelo/herramienta] vs [modelo/herramienta]`. Demanda evergreen confirmada (`gemini vs chatgpt` 2.480). Candidatas: gemini vs chatgpt, claude vs chatgpt, claude code vs cursor, openclaw vs hermes, qwen vs llama. **Dato propietario que nos diferencia:** el benchmark IA de Cristian (53 modelos × 91 tests) — tabla real, no opinión. Eso es defensibilidad (datos propios > públicos).

### 6.2 Glosario — `/glosario/{termino}/` (playbook Glossary)
Patrón `qué es [término]`. MoE, RAG, tool use, computer use, MCP, agente, vibecoding, fine-tuning, context window. Bajo volumen individual pero captura long-tail informacional + alimenta E-E-A-T + internal linking hacia los hubs. Cada definición enlaza al hub y al episodio donde se explicó.

### 6.3 Curación / "mejores" — `/guias/mejores-{categoria}/` (playbook Curation)
`mejores herramientas de ia para [founders/marketing/automatizar]`, `mejores agentes de ia`. Intención comercial, funnel natural a CAR. Dato propietario: "las que de verdad usamos en el podcast" (no listas genéricas).

**Descartar por ahora:** Locations, Profiles, Integrations, Translations (no aplican o canibalizan). **Regla dura del skill:** mejor 30 páginas excelentes que 300 thin. Cada página debe aportar valor único (no variables intercambiadas).

### URL structure (regla del skill: subcarpetas, no subdominios) — alineado con `ROADMAP.md`

```
/guias/{slug}/              ← hubs pilar evergreen (deep, rankea head terms)
/temas/{slug}/              ← cluster pages (ligeras, listan episodios por tema)
/comparativas/{a}-vs-{b}/   ← programático Comparisons
/glosario/{termino}/        ← programático Glossary
/episodios/{slug}/          ← existente (URLs publicadas no se tocan)
```
Implementación Astro: nuevas content collections (`guias`, `temas`, `comparativas`, `glosario`) con su `[...slug].astro` + inclusión en sitemap. El stack ya hace esto con `episodes`. **Nota:** `/guias/` ya estaba previsto en `ROADMAP.md` (sección "Este mes") con 3 pillars iniciales; este plan reprioriza la lista y le suma `claude-code`, `n8n`, `hermes-agent` con datos reales detrás.

---

## 7. Funnel a las comunidades (el objetivo central)

Hoy: **0 enlaces** a CAR/Rodrigo en la home. Plan:

1. **Homepage:** bloque "Comunidades" sobre la fila de episodios → CAR (skool.com/cagala-aprende-repite/about) + comunidad de Rodrigo (skool.com/rojo/about). Es el cohost, va con identidad propia.
2. **Cada hub de tema:** CTA contextual al final → al recurso de CAR que corresponde al tema (no genérico: hub n8n → curso n8n; hub Claude Code → Cofre; hub agentes → AAS). Esto convierte intención de aprendizaje en membresía.
3. **Cada episodio:** ya tiene footer; reforzar con el bloque "Tema relacionado" (→ hub) + CTA comunidad.
4. **Regla de marca:** español neutro, sin inventar perks. CAR es funnel free→paid (los cursos son gratis aportando tiempo). No prometer "te armamos el flujo" (CAR es educación, no agencia).

**Atribución:** UTM en los enlaces salientes a Skool (`?utm_source=eslahoradeaprender&utm_medium=organic&utm_campaign=hub_{tema}`) para medir qué hub convierte. (Skool no dispara purchase confiable por pixel → la señal es signup + email, ver memoria attribution CAR.)

---

## 8. Internal linking (lo que hoy no existe)

- **Hub → episodios:** cada hub lista los episodios del tema ("profundiza escuchando").
- **Episodio → hub:** bloque "Tema relacionado: [guía completa de X]" con anchor descriptivo.
- **Hub ↔ hub:** Claude Code ↔ agentes ↔ OpenClaw ↔ Hermes (temas adyacentes).
- **Glosario → hub/episodio:** cada término enlaza donde se explicó.
- **Comparativas → hubs** de cada lado.
- **Todo → comunidad** con anchor contextual.
- **Breadcrumbs** con schema `BreadcrumbList` en las nuevas colecciones (ya se hace en episodios).

---

## 9. Quick-wins técnicos (baratos, independientes del contenido)

Se pueden hacer ya, sin esperar los hubs:

1. **CTR (P2):** reescribir `seoTitle`/`seoDescription` de los episodios que tienen impresiones pero 0 clics (EP05, EP06, EP04, EP03) para que el title matchee intención y dé ganas de clickear. Quick test: EP08 ya trae clics, replicar su patrón.
2. **Canonical trailing-slash (P5):** confirmar que las versiones sin slash 301-redirigen a la versión con slash (config `trailingSlash: 'always'` ya está; falta verificar que Cloudflare/Astro emita el 301 y que el canonical apunte a la versión con slash). Esto consolida señales divididas.
3. **Funnel home (P4):** bloque de comunidades en la homepage (ver §7.1). Es el cambio de mayor impacto/esfuerzo del doc.
4. **Sitemap:** al crear las colecciones nuevas, segmentar sitemaps por tipo (temas, comparativas, glosario) para indexación y monitoreo limpios.

---

## 10. Roadmap por fases (priorizado)

**Fase 0 — Quick-wins (1-2 días):** §9 (CTR de 4-5 episodios + canonical + funnel home). Señal rápida, riesgo nulo.

**Fase 1 — Pilotos de hub (1 semana):** construir **2 hubs**: `claude-code` (72K/mes) y `n8n` (33K/mes MX, + funnel directo al curso CAR). Son los de mayor volumen × mejor funnel. Medir 4-6 semanas en GSC.

**Fase 2 — Resto de hubs (2-3 semanas):** openclaw, agentes-de-ia, hermes-agent, gemini-vs-chatgpt, validar-idea, emprender-con-ia. Cada uno cableado a sus episodios + funnel.

**Fase 3 — Capa programática (continua):** comparativas (con el benchmark como dato propietario) → glosario → guías "mejores". Una tanda por mes, midiendo indexación y thin-content.

**Fase 4 — Loop con cada episodio nuevo:** el skill `elhda-new-episode` se extiende para que, al publicar un episodio, actualice el/los hub(s) del tema (agregar el episodio a "lo hablamos en…"). Cierra el círculo: el podcast alimenta los hubs evergreen automáticamente.

---

## 11. Medición (baseline y KPIs)

**Baseline hoy (90d):** 23 clics · 1.468 imp · CTR 1,57% · pos 7,7.

KPIs a vigilar en GSC (query `gsc_perf.py`):
- Clics orgánicos totales (meta Fase 1: x3-x5 en 90 días post-hubs).
- Impresiones + posición de los head terms (`claude code`, `n8n`, `openclaw`).
- CTR del sitio (meta: >3%).
- **Funnel:** signups a Skool con UTM `eslahoradeaprender` (la métrica que de verdad importa — discoverability que convierte, no vanity de tráfico).
- Indexación de las páginas nuevas (Coverage report).

---

## 12. Riesgos y guardrails

- **Canibalización con episodios:** hubs targetean head terms evergreen; episodios targetean lo episódico/noticia. Intención distinta → OK, pero internal linking deliberado y un solo target por página.
- **Canibalización cross-dominio:** los episodios se sindican a cristiantala.com + eco con canonical al landing. Los hubs son nuevos y solo viven en el landing → no compiten con la sindicación. Vigilar que cristiantala.com no levante hubs iguales.
- **Thin content (penalización):** regla del skill — cada página aporta valor único (dato propietario: benchmark, "lo que usamos de verdad"). No generar páginas sin demanda. Noindex a variaciones muy delgadas.
- **Marca:** español neutro, sin inventar perks ni credenciales. CAR = educación, no agencia.
- **Esfuerzo de Cristian:** los hubs los puede draftear un agente (Course Writer / SEO Content Distribution Strategist) desde los transcripts de los episodios — Cristian solo aprueba. Encaja con "tiempo de Cristian = solo alto valor".

---

## Próximo paso sugerido
Aprobado el plan, arrancar por **Fase 0 (quick-wins)** + **Fase 1 (hubs claude-code y n8n)** como piloto medible. La construcción de hubs la puede ejecutar el agente **SEO Content Distribution Strategist** (custodio del motor orgánico CAR) o **programmatic-seo**, con DataForSEO para afinar el cluster de cada hub.
