---
title: "Agentes de IA: qué son, cómo funcionan y cómo crear el tuyo"
date: "2026-05-28"
updatedAt: "2026-05-28"
description: "Los agentes de IA no son chatbots: ejecutan tareas, mantienen memoria y trabajan solos. Qué son, qué tipos hay, cuándo usar n8n vs un agente y cómo construir el primero."
seoTitle: "Agentes de IA: qué son, cómo funcionan y cómo crear el tuyo"
seoDescription: "Los agentes de IA no son chatbots: ejecutan tareas, mantienen memoria y trabajan solos. Tipos, cuándo usar n8n vs un agente y cómo construir el primero. Guía 2026."
focusKeyword: "agentes de ia"
keywords:
  - "agentes de ia"
  - "agentes inteligencia artificial"
  - "agente de ia que es"
  - "como crear agentes de ia"
  - "agentes ia empresas"
  - "agentes autonomos ia"
  - "agente personal ia"
  - "agent ops"
relatedEpisodes: [1, 4, 5, 12, 14]
relatedGuides:
  - "openclaw"
  - "hermes-agent"
  - "claude-code"
  - "n8n"
funnel:
  type: "premium"
  label: "Construye tu primer agente — AI Agents Starter Kit (CAR)"
  cta: "El curso AI Agents Starter Kit en la comunidad Cágala, Aprende, Repite es el camino más directo para pasar de 'entiendo qué es un agente' a 'tengo un agente funcionando en producción'. Cubre la arquitectura, la elección del cerebro, cómo construir skills y cómo conectar herramientas reales. No es teoría: es lo que Cristian, Diego y Rodrigo construyeron, rompieron y reconstruyeron en el podcast, empaquetado para que lo puedas replicar."
  ctaButton: "Ver el curso de agentes →"
  url: "https://www.skool.com/cagala-aprende-repite/classroom/f970d84d?utm_source=eslahoradeaprender&utm_medium=organic&utm_campaign=hub_agentes_de_ia"
faq:
  - question: "¿Un agente de IA puede reemplazar a un empleado?"
    answer: "En tareas repetitivas y bien definidas, sí. En roles que requieren criterio contextual complejo, relaciones humanas o responsabilidad legal, no del todo. Lo que la mayoría de los founders encuentra es que el agente libera al humano de las tareas de bajo valor para concentrarse en las de alto valor."
  - question: "¿Qué es un harness y por qué importa en un agente de IA?"
    answer: "El harness es la capa de software que envuelve al LLM y le da capacidades de acción: acceso a archivos, conectores de herramientas, gestión de memoria, canales de comunicación. OpenClaw, Hermes y Claude Code son harnesses distintos. Un mismo cerebro rinde diferente dependiendo del harness."
  - question: "¿Cuándo usar un agente y cuándo usar n8n?"
    answer: "Si necesitás que el output sea idéntico cada vez, usá n8n (automatización determinista). Si la tarea requiere razonamiento sobre información no estructurada o decisiones de criterio, usá un agente. Para procesos con pasos fijos pero que necesitan IA en uno de esos pasos, combiná n8n con un nodo de LLM."
  - question: "¿Por qué mi agente de IA falla cuando le hablo en español?"
    answer: "Muchos modelos fueron entrenados principalmente en inglés y chino. El tool use (saber cuándo invocar una herramienta descrita en español) es menos confiable en otros idiomas. La solución práctica: escribir el system prompt y las descripciones de herramientas en inglés aunque el contenido producido sea en español."
  - question: "¿Conviene un agente por persona o un agente por función en la empresa?"
    answer: "Hoy, para empresas con varios empleados, los agentes temáticos compartidos (uno de marketing, uno de operaciones) son más prácticos. El agente personal requiere que su dueño lo mantenga; si no es técnico, cuando se rompe nadie lo arregla. El agente por función centraliza el mantenimiento y construye memoria colectiva del equipo."
  - question: "¿Cuánto cuesta tener un agente de IA funcionando?"
    answer: "El framework es gratuito (OpenClaw, Hermes, Claude Code son open source o gratis). El costo real es el LLM: desde USD 0 con modelos locales vía Ollama, hasta USD 20-40/mes con MiniMax o Claude Sonnet para uso diario. Con uso agéntico intensivo usando Opus la cuenta puede llegar a USD 200/mes."
---

Un agente de IA no es un chatbot con mejor marketing. Es un sistema que puede ejecutar acciones reales en tu entorno: editar archivos, llamar APIs, recordar lo que le dijiste la semana pasada, encadenar tareas de varios pasos sin que tengas que supervisar cada uno, y mejorar su forma de trabajar a medida que lo usa más. La diferencia es operativa, no filosófica.

En *Es la Hora de Aprender* llevamos meses construyendo agentes en producción: Cristian tiene a Nyx, Rodrigo tiene a su Alfred, Diego probó cuatro frameworks distintos antes de quedarse con el que funciona. Esta guía destila lo que vimos funcionar, lo que vimos fallar, y las decisiones que más importan antes de ponerse a construir el primero.

---

## ¿Qué es un agente de IA?

Un agente de IA es un sistema que combina un modelo de lenguaje (el "cerebro") con la capacidad de actuar sobre el mundo: leer y escribir archivos, llamar a APIs, ejecutar código, navegar por servicios web, recordar instrucciones entre sesiones, y tomar decisiones sobre qué hacer en cada paso hacia un objetivo dado.

La diferencia con un chatbot es la acción. Un chatbot responde. Un agente ejecuta. Si le dices a ChatGPT "organiza mis notas de Obsidian", te explica cómo. Si le dices a un agente bien configurado lo mismo, lo hace.

### La diferencia entre un chatbot y un agente

| Chatbot | Agente |
|---|---|
| Responde texto | Ejecuta acciones |
| No persiste entre sesiones | Mantiene memoria a largo plazo |
| Trabaja en la ventana de conversación | Trabaja en tu sistema de archivos, APIs y servicios |
| Espera tu próxima instrucción | Puede iterar hacia un objetivo sin supervisión paso a paso |
| Sin herramientas propias | Conecta herramientas externas (CRM, calendario, email, APIs) |

La tabla de EP12 del podcast resume la distinción técnica que más importa en la práctica: un agente autónomo tolera variación en el resultado (necesitas exploración, no repetición exacta); una automatización agéntica determinística no (necesitas el mismo output siempre).

### Los cuatro componentes de un agente: cerebro, memoria, herramientas y canal

Todo agente tiene cuatro piezas:

1. **Cerebro (LLM):** el modelo que razona, planifica y decide. Claude Opus, GPT-5.5, Gemini, MiniMax, o modelos open source locales. La calidad del cerebro determina qué tan bien entiende instrucciones complejas, cuándo invocar herramientas y cómo manejar ambigüedad.

2. **Memoria:** lo que persiste entre sesiones. Sin memoria, el agente empieza de cero cada vez. Con memoria, recuerda tus reglas de negocio, tu tono editorial, tus preferencias y el contexto de tus proyectos. La memoria puede ser una carpeta de archivos Markdown, una base de datos vectorial, o los logs del propio agente.

3. **Herramientas:** las capacidades de acción. Leer/escribir archivos, llamar APIs, ejecutar código, navegar por webs, conectarse a tu CRM, enviar mensajes. El agente solo puede hacer lo que sus herramientas le permiten.

4. **Canal de comunicación:** cómo le hablas y cómo te responde. Terminal, Telegram, Discord, interfaz web, WhatsApp. El canal no cambia lo que el agente puede hacer; cambia cómo interactúas con él.

---

## Tipos de agentes de IA (y cuándo usar cada uno)

### Agente personal vs agente temático en la empresa

Esta fue la pregunta central de EP14 — y la respuesta cambió en el transcurso de unos meses.

Hace un par de episodios, los hosts apostaban a un agente personal para cada persona, como clonar el asistente de cada empleado. En EP14, el foco se reorientó: en empresas de más de una persona, los **agentes temáticos compartidos** son más prácticos hoy.

La razón es de mantenimiento. Un agente personal requiere que su dueño lo cuide: lo actualice cuando se rompe, lo reconfigure cuando cambia el LLM de base, lo mejore cuando los modelos cambian. Si la persona no es técnica, cuando el agente se cae — y se cae — nadie se entera. Rodrigo lo vivió en carne propia: instaló OpenClaw en una empresa, el agente se rompió, y se enteró tres semanas después porque nadie lo estaba mirando (EP14).

Un agente temático (uno de marketing, uno de operaciones, uno de atención al cliente) tiene dueño institucional, se centraliza en un rol de *agent ops* y construye memoria colectiva del equipo.

Para el founder solo o el perfil técnico curioso, el agente personal tiene todo el sentido: Cristian tiene cuatro en paralelo con distintas especialidades.

### Agente autónomo vs automatización agéntica determinística

La distinción más importante y menos explicada en casi todos los tutoriales de agentes. De EP12:

| Variable | Agente autónomo | Automatización agéntica |
|---|---|---|
| Variación tolerable | Alta — exploras un objetivo abierto | Baja — necesitas el mismo output siempre |
| Riesgo de alucinación | Real, hay que validar el resultado | Acotado a los pasos con IA |
| Costo en tokens | Alto y variable | Predecible |
| Casos típicos | Research, refactorización, propuestas comerciales, procesamiento de notas | Cobranza, cuadratura, respuesta a tickets, generación de reportes estándar |

Cristian, con toda su experiencia con agentes, reconoció en EP11 y EP12: él tiene más automatizaciones que agentes, porque los agentes alucinan. Si necesitas comportamiento consistente siempre, hazlo determinístico con n8n y pon IA solo en los pasos que la necesitan.

### La tabla de decisión: agente o automatización (n8n)

La pregunta que te debes hacer antes de construir:

- ¿Necesito que el output sea idéntico cada vez? → automatización determinista (n8n, Make).
- ¿La tarea requiere razonamiento sobre información no estructurada? → agente.
- ¿El proceso implica decisiones de criterio (¿esto es urgente? ¿qué respondo aquí?) → agente.
- ¿El proceso implica pasos fijos con inputs variables pero outputs predecibles? → automatización agéntica (n8n con un paso de LLM en el medio).

Para procesos lineales y repetitivos, n8n sigue siendo la mejor opción. Un agente en su lugar añade complejidad sin valor. Ver también la guía de [n8n](/guias/n8n/) para flujos determinísticos.

---

## ¿Por qué los agentes de IA fallan cuando les hablas en español?

Esta pregunta la respondió Cristian en EP14 con una franqueza que vale repetir.

### El problema del tool use en idiomas no ingleses

> "El problema no es que el modelo sea nuevo. Hablas en español, y fue entrenado en inglés y chino: el tool use, saber cuándo usar una herramienta descrita en español, se lo salta. El problema que tienes es que eres latino." — Cristian Tala (EP14)

Muchos modelos grandes fueron entrenados principalmente en inglés y chino. El *tool use* — la capacidad de invocar herramientas en el momento correcto según las instrucciones — se comporta de forma menos confiable cuando el system prompt y las descripciones de herramientas están en español. Esto no es fallo de configuración tuyo: es una limitación de entrenamiento.

MiniMax es uno de los ejemplos señalados: Diego lo probó en beta montado sobre OpenClaw y reportó que cuando algo se caía en el tool use era difícil diagnosticar si era el agente o el idioma (EP14).

### Cómo compensar mientras los modelos mejoran

La solución práctica mientras los modelos mejoran en español:

1. Si el flow agéntico es crítico, escribe el system prompt y las descripciones de herramientas en inglés, aunque el contenido producido sea en español.
2. Usa modelos que ya mejoraron específicamente en tool use: Gemini 3.5 Flash subió en esa dimensión en su versión de mayo 2026 (EP14).
3. Cuando pruebes un cerebro nuevo, haz un test de tool use explícito antes de ponerlo en producción: dale una instrucción que requiera invocar una herramienta específica y verifica que la invoque.

---

## Cómo crear un agente de IA desde cero

### Elegir el cerebro (LLM) correcto para tu caso

El cerebro determina en gran medida qué tan bien funciona el agente. La tabla de Rodrigo de EP05, actualizada con lo que se usó en EP11-14:

| Etapa | Modelo recomendado | Por qué |
|---|---|---|
| Análisis profundo de información no estructurada | Claude Opus, GPT-5.5 Thinking | Razonamiento extendido, mejor criterio |
| Generación rutinaria (propuestas, emails, docs) | Claude Sonnet, GPT-5.5, MiniMax 2.7 | Rápido, suficiente para tareas bien definidas |
| Iteración y clasificación masiva | Gemma 4, Qwen 3.5, Gemini Flash | Barato, ideal para pipelines de alto volumen |
| Tareas con datos sensibles o privados | Gemma 26B local vía Ollama, Mistral local | La data no sale de tu sistema |
| Validación final antes de publicar | Opus, GPT-5.5 Thinking | Asegura que no se escape un error crítico |

La regla que destila el trío: el modelo caro para las decisiones críticas, el modelo barato para la iteración. Una vez aceitado el proceso, la inversión inicial en probar modelos se recupera rápido.

### Darle herramientas: conectar APIs sin que "sepa" usarlas

Este es el error más frecuente de quien empieza. Rodrigo lo vivió con HubSpot y lo resumió con una analogía perfecta en EP14:

> "No porque te pasen una patineta vas a saber andar. Tienes que subirte, sacarte la cresta un par de veces y aprender el ollie. Con la IA es igual: hay que enseñarle a usar lo que le conectas." — Rodrigo Rojo

Conectar la API de HubSpot al agente (darle el token, activar el conector) no le enseña al agente *cómo trabajas tú* con HubSpot: qué campos registras, con qué lógica calificas un lead, qué campos nunca tocas. Rodrigo tuvo que crear una skill — un conjunto de instrucciones y contexto — que explicara exactamente cómo él usa la herramienta, antes de que el agente la usara bien.

El proceso correcto para cada herramienta nueva:
1. Conectar la API (dar acceso).
2. Escribir una skill que explique al agente cuándo y cómo usar esa herramienta según tu flujo específico.
3. Probar con un caso real y corregir la skill hasta que el resultado sea consistente.

### Construir skills reutilizables

Una skill es una habilidad encapsulada del agente: un conjunto de instrucciones, archivos de contexto y templates que le enseñan a hacer algo específico de forma consistente. La idea la tomó Rodrigo de Y Combinator (Garry Tan): cada vez que resuelves un problema, conviértelo en una skill repetible (EP13).

Ejemplos de skills que el podcast menciona usando en producción:
- **Propuestas comerciales:** instrucciones + catálogo de servicios + reglas de pricing → propuesta Word en dos clics.
- **Notas de reunión a tareas:** conectar Granola (transcripción) → skill que distingue reuniones de clase, prospección y planificación → outputs distintos para cada tipo.
- **Research de empresa para onboarding:** skill que recibe URL de LinkedIn de un prospecto y genera un resumen de contexto antes de la llamada.

### El primer agente que de verdad funciona

La recomendación de Diego y Rodrigo en EP05: **partir de menos a más**. Un agente con alcance muy limitado — pocas herramientas, pocas tareas, usándolo tú solo — durante dos o tres semanas. Ver qué funciona, qué falla, qué patterns se repiten. Recién ahí expandir.

La trampa es el sobre-diseño: armar toda la arquitectura de cinco agentes especializados en paralelo antes de haber completado una tarea real con el primero. Diego lo aprendió a las malas: sus agentes se rompían porque les metía demasiadas tareas, conectores y skills en una sola conversación hasta que se "mareaban" (EP14).

El primer agente útil suele ser el más aburrido: el que procesa una tarea repetitiva que tú ya hacías antes, pero ahora la hace él mientras haces otra cosa.

---

## Agentes de IA en la empresa: el debate que cambió de respuesta

El capítulo 14 del podcast fue una reversión pública. Rodrigo cambió de opinión respecto a episodios anteriores, y lo dijo con todas sus letras.

### Agente personal para cada empleado: por qué no escala

La visión inicial del podcast (EP01-05) era que el futuro era un agente personal para cada persona. La evidencia de campo en EP14 matizó esa visión.

Diego trabajando con organizaciones grandes identificó dos bloqueos: (1) producción — estos agentes todavía se caen y exigen migraciones, lo que es inaceptable en contexto empresarial; (2) gobernanza — a nivel de mil personas, gestionar qué datos puede ver cada agente de quién se vuelve un problema serio que el framework no resuelve por defecto.

### Agentes temáticos compartidos: la respuesta práctica de hoy

La propuesta que se sedimentó en el episodio 14: **un agente por función, disponible para todo el equipo de esa función**. Un agente de marketing que cualquiera del equipo de marketing puede usar; uno de operaciones; uno de atención al cliente.

Las ventajas sobre el agente personal:
- Memoria colectiva: el agente aprende de todas las interacciones del equipo, no solo de las de una persona.
- Skills y conectores compartidos: no tienes que que configurar lo mismo para 50 personas.
- Mantenimiento centralizado en un rol de *agent ops* — la persona que mantiene los agentes corriendo, los optimiza y les conecta los mejores modelos.

El agente personal masivo se vuelve más viable cuando plataformas como Gemini Spark lleguen al estado donde ya tienen tu contexto (Gmail, Drive, calendario) y el administrador de la empresa solo tiene que conectar las skills corporativas encima.

### El rol emergente de agent ops

Rodrigo nombró en EP14 un rol que ya se está formando en empresas que llevan meses con agentes en producción: el *agent ops*. Similar a DevOps en desarrollo o marketing ops en marketing, pero para los agentes de IA: mantener las instancias corriendo, actualizar los cerebros cuando sale una versión mejor, optimizar las skills según los patrones que el agente detecta, y conectar los nuevos modelos sin cambiar la experiencia del usuario final.

Para startups o founders solos, ese rol lo cubre el mismo founder — por ahora. Para empresas de 10+ personas con agentes en producción, empieza a tener sentido separarlo.

---

## ¿Cuánto cuesta un agente de IA?

### Costo del cerebro: opciones desde $0 hasta $200/mes

| Opción | Costo mensual | Para quién |
|---|---|---|
| **Modelos locales** (Gemma, Qwen, Mistral vía Ollama) | $0 (hardware ya pagado) | Founders con hardware disponible, datos sensibles, uso intensivo |
| **MiniMax 2.7** (plan estándar) | ~$20-40/mes | Uso diario moderado con buen tool use |
| **Claude Sonnet** (plan Pro Anthropic) | ~$20/mes | Uso moderado desde Claude.ai o Claude Code |
| **GPT-5.5** (suscripción ChatGPT) | ~$20-30/mes | Uso general con buenas capacidades agénticas |
| **Claude Opus** (plan Max + uso agéntico vía API) | $200/mes + por token | Uso intensivo donde Opus es claramente mejor |

El stack que Cristian recomienda desde EP11: suscripción rápida de MiniMax como motor general (~$40/mes) y tokens de Opus solo para las tareas donde el razonamiento crítico importa. Para LATAM, $200/mes son más del 10% del sueldo de muchas personas — el costo es una decisión estratégica, no un detalle.

### Costo del harness: OpenClaw, Hermes, Claude Code — gratis o casi

Los frameworks más usados en el podcast son todos gratuitos:

- **OpenClaw** — código abierto, gratis. Costo: tu tiempo de setup y mantenimiento.
- **Hermes Agent (Nous Research)** — gratis para uso básico.
- **Claude Code** — gratis con cuenta Anthropic; uso intensivo requiere suscripción.
- **n8n** — open source, self-hosted gratis; cloud desde $20/mes.

El costo real de un agente de IA es el LLM que lo alimenta, no el framework que lo orquesta.

---

## Lo que vimos pasar usando agentes en producción

Esta es la brecha entre saber qué es un agente y saber qué puede hacer por tu negocio.

### El costo de adquisición a medio dólar con agentes de marketing

En EP14, Cristian describió el resultado de su experimento: armó diez especialistas de marketing digital en Claude Code (copy, UX/UI, imágenes, cada uno con su rol), lanzó la primera campaña sin tocar la ejecución y midió el resultado.

> "El costo de adquisición de un usuario nuevo me quedó en 400 pesos chilenos, medio dólar. Sé que asusta y que rompe esquemas. Tal vez no para un agente personal que lo sepa todo, pero sí para agentes especializados con tu data: encuentran patrones que tú no vas a encontrar y entienden el mercado mejor que tú." — Cristian Tala (EP14)

El costo anterior con una agencia de marketing: ~USD 50 por usuario adquirido. La reducción no vino de magia — vino de que los agentes trabajaban con los datos reales de la audiencia de Cristian, entendían el contexto de CAR, y podían iterar sin costo de agencia en cada variante.

### La empresa del trillón: por qué los agentes cambian el modelo de negocio

Sequoia publicó una tesis que Cristian trajo a EP04: la próxima empresa de un trillón de dólares no va a ser un SaaS ni una app. Va a ser una empresa de servicios que por detrás es una empresa de software disfrazada: una persona o equipo muy chico, apalancado en agentes, dando servicios a escala imposible antes.

El resultado que Claude Opus logró en el experimento de Firefox: 22 bugs encontrados (14 críticos) en dos semanas, por ~USD 4.000 en créditos. El equivalente humano: 3-4 desarrolladores senior durante 8-16 semanas, ~USD 500.000. Menos del 1% del costo, en la cuarta parte del tiempo (EP04).

No es ciencia ficción — es el tipo de resultado que aparece cuando los agentes tienen el contexto correcto y la tarea está bien definida.

---

## Preguntas frecuentes sobre agentes de IA

**¿Un agente de IA puede reemplazar a un empleado?**
En tareas repetitivas y bien definidas, sí. En roles que requieren criterio contextual complejo, relaciones humanas o responsabilidad legal, no del todo — y en muchos casos no es eso lo que conviene buscar. Lo que la mayoría de los founders encuentra en la práctica es que el agente libera al humano de las tareas de bajo valor para concentrarse en las de alto valor: las que requieren presencia, criterio o relación.

**¿Cuánto tiempo tarda en estar productivo un agente de IA?**
Depende del scope. Un agente básico que procesa un tipo específico de tarea puede estar funcionando en un fin de semana de setup. Un agente con múltiples skills, memoria persistente y varios conectores puede tomar semanas de iteración. La recomendación del podcast: empieza chico, mide, y expande cuando funciona — no diseñes la arquitectura completa antes de tener un resultado real.

**¿Qué es un 'harness' y por qué importa?**
El harness es la capa de software que envuelve al LLM y le da capacidades de acción: acceso a archivos, conectores de herramientas, gestión de memoria, canales de comunicación. OpenClaw, Hermes, Claude Code son todos harnesses distintos. Un mismo cerebro (Claude Opus) rinde diferente dependiendo del harness: en pruebas del podcast, Claude Code con Opus superó a OpenClaw con Opus en algunas tareas por ser más minimalista y directo.

**¿Es lo mismo un agente de IA que un bot?**
En el lenguaje cotidiano se mezclan, pero hay diferencia técnica. Un bot sigue un script predefinido (el bot de WhatsApp que responde "Presiona 1 para X"). Un agente de IA razona sobre la situación, decide qué hacer, invoca herramientas según el contexto y puede manejar situaciones no previstas en el script original. En el podcast, cuando dicen "bot" suelen hablar informalmente de agente.

**¿Funciona en español o solo en inglés?**
Funciona en español, pero hay una limitación de entrenamiento conocida: el tool use (saber cuándo invocar una herramienta descrita en español) es menos confiable que en inglés. Los modelos nuevos están mejorando en esa dimensión. La solución práctica: escribir el system prompt y las descripciones de herramientas en inglés aunque el contenido producido sea en español.

**¿Necesito saber programar para usar agentes de IA?**
Para usar frameworks como OpenClaw o Hermes, no es imprescindible — pero sí ayuda entender conceptos básicos (qué es una API, qué es un servidor, cómo editar un archivo de configuración). Para construir automatizaciones agénticas en n8n, la curva es más visual y no requiere código. Para construir agentes con Claude Code, se recomienda tener contexto técnico básico.

---

## Recursos mencionados en el podcast

Los episodios donde más se habló de agentes de IA:

- [EP01 — OpenClaw y el futuro del trabajo](/episodios/01-openclaw-futuro-trabajo/) — Qué es un agente, la diferencia con n8n, y cómo empezar.
- [EP04 — Tu empresa va a tener más agentes que empleados](/episodios/04-agentes-vs-empleados/) — El experimento de Firefox, API Design First y la empresa del trillón.
- [EP05 — OpenClaw, agentes IA y estrategia empresarial](/episodios/05-openclaw-agentes-estrategia/) — El contexto como diferencial competitivo y qué preguntas responder antes de desplegar agentes.
- [EP12 — Ley de IA, agentes autónomos y el modelo por defecto](/episodios/12-ley-ia-agentes-autonomos-modelo-default/) — Agente autónomo vs automatización agéntica: la tabla de decisión.
- [EP14 — Agentes de IA: ¿uno por persona o por equipo?](/episodios/14-agentes-ia-empresa-uno-por-persona-o-equipo/) — El debate resuelto, agent ops, tool use en español y el costo de adquisición a medio dólar.
