---
title: "Herramientas de IA, Build vs Buy y Por Qué los Procesos Importan Más"
episode: 2
season: 1
thumbnail: "/thumbnails/ep02.webp"
date: "2026-02-26"
duration: "1:06:08"
durationSeconds: 3968
youtube: "https://www.youtube.com/watch?v=43nvC-1fxKY"
youtubeId: "43nvC-1fxKY"
spotify: "https://open.spotify.com/episode/5muA5rtP0sWEwxZgt12dF9"
description: "¿Qué herramientas de IA usan realmente los que saben? ¿Cuándo construir vs comprar? Cristian, Diego y Rodrigo comparten sus stacks reales, debaten Build It vs Buy It en 2026, y explican por qué la IA no arregla tu empresa si no tienes procesos claros."
seoTitle: "Herramientas de IA 2026, Build vs Buy y Procesos | Es la Hora de Aprender EP02"
seoDescription: "Las herramientas de IA que realmente usan Cristian Tala, Diego Arias y Rodrigo Rojo. Build vs Buy en 2026, Shadow AI en empresas, y por qué los procesos importan más que la tecnología."
ogImage: "https://img.youtube.com/vi/43nvC-1fxKY/maxresdefault.jpg"
hosts:
  - name: "Cristian Tala"
    linkedin: "https://www.linkedin.com/in/ctala/"
  - name: "Diego Arias"
    linkedin: "https://www.linkedin.com/in/godiegoarias/"
  - name: "Rodrigo Rojo"
    linkedin: "https://www.linkedin.com/in/rodrigorojo/"
topics:
  - "Herramientas IA"
  - "Build vs Buy"
  - "Procesos"
  - "OpenClaw"
  - "Modelos IA 2026"
  - "Shadow AI"
  - "CRM"
  - "Adopción Empresarial"
keywords:
  - "herramientas ia 2026"
  - "build vs buy tecnología"
  - "mejores herramientas inteligencia artificial"
  - "shadow ai empresas"
  - "gemini 3.1 pro"
  - "sonnet 4.6"
  - "crm ia automatización"
---

Segundo episodio y ya tenemos lista de lanzamientos en cadena: **Claude Sonnet 4.6**, **Gemini 3.1 Pro**, Anthropic descubrió que MiniMax y Kimi estuvieron scrapeando sus respuestas para entrenarse. Pero la conversación real del día no fue esa: fue sobre cuándo conviene **construir** tus propias herramientas con IA y cuándo conviene **comprar** un SaaS, por qué casi ninguna empresa tiene los procesos necesarios para que la IA funcione, y por qué el Shadow AI está filtrando datos corporativos mientras TI sigue discutiendo el compliance.

## Lo que vas a aprender

- Cómo elegir el modelo correcto según la tarea real que tienes entre manos (no el hype de la semana)
- Por qué la IA no arregla tu empresa si tus procesos están hechos con cinta adhesiva
- Cuándo tiene sentido construir tu propio stack vs pagar un SaaS en 2026
- Qué es el Shadow AI y por qué está pasando en tu empresa aunque no lo sepas
- Cómo diseñar un programa de adopción de IA que no sea una charla motivacional sin follow-up

## ¿Qué modelo de IA conviene para cada tarea?

El error más frecuente es pensar que hay un modelo "mejor". La pregunta correcta es: **¿qué tan compleja es la tarea que tienes?** Rodrigo lo planteó así: los modelos de código abierto van entre seis meses y un año atrás de los tope de línea de pago (GPT, Claude Opus, Gemini Pro), pero cuando GPT-4 era el rey todos estaban felices. Hay muchas tareas que un modelo "viejo" resuelve bien.

Para conversación simple y soporte básico, Llama 3.3 corriendo gratis en Groq (el proveedor de inferencia rápida) es sorprendentemente competente. Para análisis, propuestas comerciales y trabajo que requiere criterio, necesitas modelos tope de línea. Para código serio, Codex o Claude Opus dominan; en palabras de Rodrigo, *"Codex es ese compañero autista que está en un rincón trabajando y hace una pega espectacular pero una sola; Claude Opus es el que pasa por la oficina, hace bien la pega y además queda bien."*

| Presupuesto | Tarea | Modelo recomendado | Costo |
|---|---|---|---|
| Cero | Conversación, soporte simple | Llama 3.3 vía Groq | Gratis con límites |
| Bajo | Tareas generales, escritura | Gemini Flash | ~0,10 USD por millón de tokens |
| Medio | Análisis, código, agentes | Claude Sonnet 4.6 | 20 USD suscripción o API |
| Alto | Razonamiento complejo, investigación | Claude Opus, GPT-5 Thinking | 100–200 USD al mes |
| Agentes con herramientas | Automatización multi-paso | Claude Sonnet/Opus (mejor tool use) | API |

Un detalle importante que tocó Rodrigo: **cuando desarrollas con API vs cuando usas una suscripción son cosas distintas**. La suscripción (20 USD/mes) te da acceso para uso personal. La API cobra por token consumido y es lo que usas para construir productos — ahí el control de costos importa muchísimo.

## ¿Build it o buy it en 2026?

Cristian reabrió un debate que tenía guardado hace más de una década en su blog. Hace años la respuesta era casi siempre "comprar" porque construir era carísimo. Luego con el boom del SaaS también era "comprar" porque todo existía. Hoy la decisión se movió otra vez, y no de forma obvia.

> "Si no es core para tu negocio, buscas un open source que esté maduro y lo usas. Si no existe la solución buena o no se adapta a ti, lo creas. Yo jamás hubiera creado un CRM hace 5 años, pero hoy con Twenty open source lo tengo auto-hospedado y funciona mejor que el que pagaba 297 USD al mes." — Cristian Tala

La matemática cambió: Diego contó que en su empresa pagan 7.000 USD al mes por un CRM (High Level tipo, nivel enterprise) y lo usan al 10% de su capacidad. Ese cálculo — 84.000 USD al año — justifica sobradamente dedicar tiempo a construir algo propio si además lo puedes monetizar o licenciar.

**Regla práctica que salió del episodio:**

- ¿Es core de tu negocio? Construye o customiza.
- ¿Existe open source maduro con comunidad viva? Úsalo y desarrolla plugins.
- ¿Es SaaS nicho de 10–30 USD al mes? Págalo y no pierdas tiempo.
- ¿Usas menos del 30% de las features del SaaS que pagas? Es señal clara de que hay oversourcing.
- ¿Vas a venderlo como producto? Construir con IA hoy hace sentido que antes no tenía.

Cristian dio un ejemplo de nivel quirúrgico: para automatizar respuestas en Skool (que no tiene API pública), hizo ingeniería inversa, creó un plugin de Chrome que reversea endpoints, se construyó su propia "API de Skool", y se la pasó al agente para que responda dos veces al día por Telegram con los mensajes pendientes. Eso es lo que habilita la IA: no reemplazar SaaS por capricho, sino **construir la base sobre la cual los SaaS existentes te rinden más**.

## ¿Por qué los procesos importan más que la tecnología?

Diego abrió el tema con una confesión: su equipo comercial paga un CRM de 7.000 USD y trabaja igual con Excel. El dolor no es que falte tecnología, es que **la gente no sigue los procesos**. Y ahí la IA tiene poco que hacer.

Rodrigo lo puso en marco teórico: toda empresa tiene cuatro elementos — estructura, personas y sus capacidades, tecnología y procesos. Mover una palanca afecta a las otras tres. **Si tus procesos no están explícitos y documentados, meterle IA encima es como ponerle turbo a un auto sin frenos**.

> "Las empresas no tienen los procesos bien declarados. Lo saben, pero lo tienen acá, en la cabeza de la persona. Y mientras no lo documenten, va a ser muy difícil que la IA haga algo útil con eso." — Rodrigo Rojo

La buena noticia: la IA sí te puede ayudar a **levantar y documentar** los procesos. Grabas una sesión de Granola con alguien del equipo describiendo cómo hace su pega, le pasas la transcripción a Claude o Gemini con un prompt tipo *"armame el esquema de proceso con Mermaid"*, y tienes una primera versión documentada en minutos. Ese documento sí lo puede consumir un agente después.

## ¿Qué herramientas de IA usan realmente los tres hosts?

La pregunta que Rodrigo improvisó en el momento y que les terminó sacando el stack real. Acá está destilado:

**Cristian**: Claude (vía suscripción Max), Perplexity para búsquedas, OpenClaw con modelos chicos y rápidos (Haiku, Gemini Flash, Llama) para tareas conversacionales. Cuando necesita pensamiento profundo cambia el modelo específicamente. Todo parametrizado: el diseño instruccional lo hace Sonnet, el contenido final Opus, aunque él se lo pida a Mistral.

**Diego**: **GenSpark** enamorado — tiene varias IAs dentro de la misma app (usa Opus 4.6 para construir aplicaciones), permite que el agente llame por teléfono a tus contactos desde tu número con un objetivo y te devuelve la transcripción. Para propuestas comerciales Gemini (ChatGPT alucina demasiado para licitaciones). Whisper para transcripciones, GPT-4.1 mini como modelo base en su OpenClaw. Y Grok para videos de sus hijos porque no tiene las restricciones excesivas que tiene Gemini para imágenes de niños como superhéroes.

**Rodrigo**: Claude (principalmente Claude Cowork, que es como Claude Code para no-técnicos — le dejas una carpeta llena de archivos y se encarga), OpenClaw con instalación limpia recién rehecha, **Granola** para absolutamente toda reunión/clase/conversación, Perplexity como buscador por defecto. Para escribir código que no sabe hacer, le pide al agente que le explique antes de ejecutar.

## ¿Cómo diseñar adopción de IA en una empresa sin que sea teatro?

Acá viene el tema doloroso: Diego preguntó qué recomendación darle a empresas grandes con compliance pesado que bloquean todo. Rodrigo llevó la respuesta al terreno práctico con tres frentes:

1. **Licencia y herramienta oficial**. Si usas Google Workspace, es Gemini. Si usas Microsoft, es Copilot (versión de pago, no Copilot Chat gratuita que es muy limitada). Si no tienes esa restricción, evalúa Claude y ChatGPT. En PyME: lo que sea más rápido y más funcional, aprovecha la velocidad que las grandes no tienen.
2. **Tiempo protegido para aprender**. Si no se saca a la gente del día a día, nadie va a aprender. Esto puede ser un día a la semana tipo Google (20% time), una hora diaria, o un programa de capacitación formal. Sin intencionalidad, las herramientas quedan en "cajón".
3. **Champions internos**. Identifica a los curiosos que ya están experimentando, dales autoridad formal para que hagan chorreo a sus equipos. Sin eso, el conocimiento no viaja.

> "Mi consejo número uno es paga tu licencia de IA y deja de ser ratón. Los 20 dólares se pagan solos en una sola tarea. Y si vas a usarla en el trabajo con datos privados, que la empresa pague una licencia empresarial — no la uses a la mala en una cuenta gratis filtrando datos a los laboratorios." — Rodrigo Rojo

## ¿Qué es el Shadow AI y por qué está pasando en tu empresa?

El fenómeno más subestimado del 2026 según Rodrigo: **Shadow AI** — IA en las sombras. El empleado descubrió que ChatGPT acelera su pega, la empresa no le dio herramienta, entonces abre ChatGPT en el celular, copia el correo de la empresa, le paga desde su bolsillo y trabaja mejor. El problema: datos corporativos sensibles están saliendo de la empresa sin control.

Peor todavía: muchos usan la cuenta **gratuita** de ChatGPT, que entrena sobre lo que les pasas. Toda esa info que tu gerente financiero pegó para que le haga un análisis está ahora en el corpus de entrenamiento.

El pattern es siempre el mismo: la empresa tiene Copilot oficial, pero la gente dice *"Copilot me contesta más lento"*. No es más tonto — es más restringido por diseño empresarial. Pero la percepción gana. Solución: política clara + licencias pagadas para todos + entrenamiento + tiempo para experimentar.

## Capítulos del episodio

- **00:00** — Bienvenida al segundo episodio con Cristian como host
- **01:00** — OpenClaw y la pelea con instalaciones de Diego
- **03:00** — El CRM de 7.000 USD y el problema de procesos
- **09:43** — Lanzamientos de la semana: Sonnet 4.6, Gemini 3.1 Pro, MiniMax/Kimi scrapeando
- **15:00** — "Es la hora de aprender" para que ustedes no pierdan semanas probando
- **20:00** — Protestas anti-IA en Time Magazine y el costo energético
- **26:30** — Stacks reales: las herramientas que usan los tres hosts hoy
- **37:10** — Build it vs Buy it: el debate que cambió desde 2015
- **44:20** — IA no determinística vs procesos deterministas: cuándo usar cada uno
- **48:58** — Adopción en empresas grandes: compliance, licencias y Shadow AI
- **56:03** — El mermelado de Copilot y por qué todos usan ChatGPT a escondidas
- **58:53** — Consejos finales: paga tu licencia, diseña desde IA

## Preguntas frecuentes

### ¿Qué herramienta de IA conviene para empezar en una empresa en 2026?

Depende del stack que ya uses: si estás en Google Workspace, activa Gemini integrado. Si estás en Microsoft 365, activa Copilot de pago (el gratuito es muy limitado). Si no tienes esa dependencia, evalúa Claude por Anthropic o ChatGPT Team. Lo crítico no es elegir la mejor sino **elegir una oficial y rodar con todos**, porque sin licencia oficial la gente va a usar cuentas personales y filtrar datos (Shadow AI).

### ¿Build it o Buy it para empresas en 2026?

La regla actualizada: si es core de tu negocio y existe open source maduro, constrúyelo encima de open source. Si no es core y es un SaaS nicho de menos de 30 USD/mes, cómpralo y olvídate. Si pagas más de 500 USD/mes por un SaaS y usas menos del 30% de sus features, considera construir con IA porque hoy es factible con equipos pequeños.

### ¿Por qué los procesos importan más que la IA?

Porque la IA amplifica lo que ya tienes. Si tus procesos son ambiguos, no documentados y dependen del conocimiento en la cabeza de la gente, meter IA encima no los arregla — los hace fallar más rápido. La buena noticia es que la IA sí te puede ayudar a levantar y documentar procesos existentes usando transcripciones de conversaciones con tu equipo.

### ¿Qué es el Shadow AI y por qué debería preocuparme?

Shadow AI es el uso no autorizado de herramientas de IA por parte de empleados usando cuentas personales para tareas laborales. El riesgo principal es que la data corporativa sensible (emails, finanzas, estrategia) termina en los servidores de los laboratorios de IA, y en el caso de cuentas gratuitas puede entrar al corpus de entrenamiento. Se previene dando licencias oficiales a todos y creando políticas claras de uso.

### ¿Qué diferencia hay entre usar ChatGPT y usar un agente como OpenClaw?

ChatGPT es una conversación: tú preguntas, él responde. Un agente como OpenClaw **ejecuta acciones en tu ambiente** — lee tus archivos, corre código, se conecta a APIs, mantiene memoria persistente, y trabaja sin supervisión en tareas de varios pasos. ChatGPT lo usas para consultar; OpenClaw lo usas para que opere en tu nombre.

### ¿Cuándo usar OpenClaw (IA) y cuándo usar n8n (automatización tradicional)?

Si el proceso es lineal, repetitivo y determinista (input A siempre genera output B), usa n8n, Make o Zapier. Consume menos recursos, es predecible y fácil de debuggear. Si el proceso requiere criterio, manejo de ambigüedad, o encadenar múltiples pasos con decisiones intermedias (resumir reuniones, investigar temas, generar contenido contextual), ahí sí conviene un agente de IA.

## Recursos mencionados

- **[Claude Sonnet 4.6 y Opus 4.6](https://www.anthropic.com/claude)** — Los modelos de Anthropic mencionados como tope de línea
- **[Gemini 3.1 Pro](https://gemini.google.com)** — El modelo de Google con salto importante en diseño y razonamiento
- **[Groq](https://groq.com)** — Proveedor de inferencia rápida para Llama 3.3 gratis
- **[GenSpark](https://genspark.com)** — La plataforma favorita de Diego con múltiples IAs dentro
- **[Twenty CRM](https://twenty.com)** — CRM open source que reemplazó el SaaS pago
- **[Granola](https://granola.ai)** — Transcripción de reuniones, mencionado como herramienta central
- **[Perplexity](https://perplexity.ai)** — Buscador con IA, default de Rodrigo
- **[Claude Cowork](https://www.anthropic.com/claude)** — El modo agéntico de Claude para no-técnicos
- **[Storybook de Gemini](https://gemini.google.com)** — Para crear historias personalizadas con niños
- Episodio 1: [OpenClaw y el Futuro del Trabajo](/episodios/01-openclaw-futuro-trabajo) — La base conceptual de agentes

---

🌐 [eslahoradeaprender.com](https://eslahoradeaprender.com) · 🎧 [Spotify](https://open.spotify.com/show/7o7JR0Un1jc6wev0VjNm0C) · 📺 [YouTube](https://www.youtube.com/@EsLaHoraDeAprender_com)

_Accesibilidad: activa los subtítulos en el reproductor de YouTube para leer la conversación completa._
