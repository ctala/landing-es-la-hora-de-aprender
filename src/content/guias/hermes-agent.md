---
title: 'Hermes Agent: qué es, cómo funciona y por qué la gente está migrando'
date: '2026-05-28'
updatedAt: '2026-07-28'
description: Hermes es el agente IA open source de Nous Research que superó a OpenClaw en instalaciones tras los cambios de Anthropic. Qué es, por qué la gente migra, cómo empezar y cuándo OpenClaw aún tiene sentido.
seoTitle: 'Hermes Agent: qué es y por qué supera a OpenClaw (2026)'
seoDescription: Hermes Agent es el framework open source de Nous Research que superó a OpenClaw en instalaciones. Dreaming, skill bundles, qué cerebro usar y cómo empezar. Guía 2026.
focusKeyword: hermes agent
keywords:
- hermes agent
- hermes nous research
- hermes vs openclaw
- hermes agent que es
- hermes agent instalar
- dreaming hermes
- skill bundles hermes
relatedEpisodes:
- 18
- 17
- 15
- 8
- 13
- 14
relatedGuides:
- openclaw
- claude-code
- agentes-de-ia
- n8n
- ia-local
funnel:
  type: premium
  label: Aprende a armar tu stack agéntico — AI Agents Starter Kit (CAR)
  cta: 'El curso AI Agents Starter Kit en Cágala, Aprende, Repite cubre la arquitectura de agentes — incluyendo cuándo elegir Hermes, OpenClaw o Claude Code según el caso de uso — junto con cómo elegir el cerebro, construir skills y conectar herramientas reales. Lo ves, lo copias, lo adaptas a tu contexto. CAR es educación: nadie te arma el flujo a medida.'
  ctaButton: Ver el curso de agentes →
  url: https://www.skool.com/cagala-aprende-repite/classroom/f970d84d?utm_source=eslahoradeaprender&utm_medium=organic&utm_campaign=hub_hermes_agent
faq:
- question: ¿Qué es Nous Research?
  answer: Nous Research es el laboratorio de IA que desarrolló Hermes Agent. Es conocido por sus modelos de fine-tuning de código abierto, especialmente la familia 'Hermes' que mejora el uso de herramientas en LLMs base como Llama y Qwen.
- question: ¿Qué es el dreaming en Hermes Agent?
  answer: 'Es una función que activa al final del día y revisa los logs de las conversaciones para detectar patrones: tareas resueltas de forma inconsistente, herramientas mal usadas, instrucciones repetidas. Luego propone mejoras a las skills. El agente aprende de su propio uso.'
- question: ¿Hermes reemplaza a OpenClaw?
  answer: No necesariamente. Para usuarios que usaban OpenClaw con Opus como cerebro, Hermes es más estable después del cambio de Anthropic en marzo 2026. Para quien tiene OpenClaw funcionando bien con otro cerebro, el cambio no es urgente.
- question: ¿Es Hermes gratis?
  answer: 'El framework es de código abierto. El costo viene del LLM que uses como cerebro: desde USD 0 con modelos locales vía Ollama, hasta las suscripciones de MiniMax, GPT-5.5 o los modelos que elijas.'
- question: ¿Por qué Hermes superó a OpenClaw en instalaciones en 2026?
  answer: Porque Anthropic bloqueó el uso de Opus con agentes externos en marzo 2026, lo que afectó el rendimiento de OpenClaw que fue diseñado con ese modelo en mente. Hermes mantuvo mejor comportamiento con los cerebros alternativos (GPT-5.5, MiniMax, modelos locales), y la función dreaming lo hizo más atractivo para founders que quieren que el agente mejore solo.
- question: ¿Puedo usar Hermes con modelos locales?
  answer: Sí. Rodrigo corre Hermes con Nemotron y Qwen 3.6 en su DGX Spark usando Ollama. Con hardware adecuado (mínimo 24 GB RAM para modelos 7B-13B), el costo de tokens es cero y los datos no salen de tu sistema.
---

Hermes Agent es el framework de agente personalizado de Nous Research que en la semana del 21 de mayo de 2026 superó a OpenClaw en instalaciones globales. No es ruido de Twitter: tanto Cristian Tala como Rodrigo Rojo migraron sus agentes en producción a Hermes, y en el podcast explicaron por qué.

Esta guía cubre lo que diferencia a Hermes de OpenClaw, qué es la función dreaming y por qué importa, qué cerebros (LLMs) funcionan bien con él en 2026, y cuándo tiene sentido seguir con otra opción.

---

## ¿Qué es Hermes Agent?

Hermes Agent es un framework de código abierto de Nous Research para construir agentes de IA personalizados. Como OpenClaw, te permite instalar una instancia en tu servidor o máquina local, conectarle un LLM como cerebro, y desde ahí darle acceso a tus herramientas, archivos y flujos de trabajo.

La diferencia con OpenClaw no es la idea central — ambos son harnesses para agentes — sino las características específicas, el estado de mantenimiento del proyecto, y sobre todo el rendimiento con los cerebros disponibles en 2026 ahora que el plan Max de Anthropic no cubre agentes externos.

### Nous Research y el origen del proyecto

Nous Research es el laboratorio que desarrolla Hermes. Es conocido en la comunidad técnica por sus modelos de fine-tuning, especialmente la familia de modelos Hermes para razonamiento y uso de herramientas. El agente Hermes Agent construye sobre esa experiencia en modelos — el framework y los modelos comparten apellido por diseño.

A diferencia de OpenClaw, que nació de un proyecto personal de Peter Steinberger y luego pasó a una fundación, Hermes Agent tiene el respaldo de un laboratorio activo que sigue desarrollando modelos. Eso tiene consecuencias prácticas en la frecuencia de actualizaciones y en el soporte de nuevas capacidades.

### Hermes vs OpenClaw: la diferencia central

Lo que el podcast reportó en EP13 y EP14 como diferencia operativa:

| Dimensión | OpenClaw | Hermes Agent |
|---|---|---|
| Origen | Peter Steinberger → fundación open source | Nous Research (laboratorio activo) |
| Rendimiento con cerebros alternativos (post-Anthropic) | Degradado — fue diseñado con Opus como cerebro principal | Más estable con GPT-5.5, MiniMax y modelos alternativos |
| Función dreaming | No disponible | Sí — revisa logs del día y propone mejoras de skills |
| Skill Bundles | Skills manuales | Bundles de skills prelistas + skills propias |
| Estado del proyecto (mayo 2026) | Activo, pero momentum migró | Crecimiento activo en instalaciones |
| Conexiones con modelos externos | OpenClaw, MiniMax beta, Grok | Grok (xAI) lanzó conexión nativa en mayo 2026 |

La clave: desde que Anthropic bloqueó el uso de Opus con agentes externos en marzo 2026 (EP08), OpenClaw perdió su cerebro ideal. Hermes mantuvo mejor comportamiento con los cerebros alternativos.

---

## Las funciones de Hermes que importan

### Dreaming: el agente que aprende de sus propios logs

Esta es la función que más diferencia a Hermes de cualquier otro framework en la comparativa actual. Al final de cada día, Hermes revisa los logs de todas las conversaciones e interacciones de la jornada y propone mejoras a las skills según los patrones que detectó.

Rodrigo lo describió en EP14: si el agente resolvió el mismo tipo de solicitud cinco veces de formas ligeramente distintas, dreaming lo detecta y propone una versión unificada y más eficiente de la skill. Si el agente usó mal una herramienta en varios casos, lo marca como área de mejora.

> "Lo que más me gusta de Hermes es el dreaming: revisa los logs del día y propone cómo mejorar tus skills según lo que repetiste." — Rodrigo Rojo (EP14)

Esto convierte a Hermes en un agente que mejora activamente con el uso, en lugar de quedarse estático hasta que tú lo actualices manualmente.

### Skill Bundles: paquetes de habilidades listos para conectar

Hermes lanzó Skill Bundles en mayo 2026 (EP13): paquetes de skills prelistas que puedes conectar directamente al agente sin construir todo desde cero. Rodrigo los mencionó al hablar de cómo redujo el tiempo de configuración para tareas comunes de productividad.

Los Skill Bundles son útiles para empezar rápido con casos de uso frecuentes — gestión de correo, notas de reunión, propuestas comerciales — y luego ajustarlos a tu flujo específico. No reemplazan la necesidad de construir skills personalizadas para las tareas específicas de tu negocio, pero reducen el tiempo hasta tener algo funcionando.

### El cerebro: qué modelos funcionan con Hermes hoy

Hermes no tiene un LLM propio integrado por defecto — elige el que quieras. Los que el podcast reportó funcionando bien en mayo 2026:

- **GPT-5.5 (OpenAI):** Rodrigo reportó en EP14 que GPT-5.5 dio un buen salto respecto a versiones anteriores. Buen comportamiento agéntico, pero su calidad de agente "depende muchísimo del cerebro" (EP14).
- **MiniMax 2.7:** Buen tool use, bajo consumo de tokens. Diego lo usa como default en sus setups (EP14).
- **Modelos locales vía Ollama (Hermes, Nemotron, Qwen 3.6):** Rodrigo corre modelos locales en su DGX Spark. Hermes tiene sinergia natural con los modelos de fine-tuning de Nous Research.
- **Grok (xAI):** en EP14 salió la conexión nativa de Grok para Hermes y OpenClaw — "ya no hace falta entrar por API, es un cerebro más entre los que puedes elegir" (EP14).

Lo que ya no funciona bien: Claude Opus vía Anthropic cuesta ~15x más al mes en uso agéntico intensivo desde la API directa (EP08). El costo lo hace impráctica para la mayoría de los usos en LATAM.

---

## ¿Por qué Hermes superó a OpenClaw en instalaciones?

### El contexto: lo que pasó con Anthropic en marzo 2026

En marzo de 2026, Anthropic bloqueó el uso del plan Max (USD 200/mes) para agentes externos. Los usuarios que usaban OpenClaw con Opus como cerebro tenían dos opciones: pagar la API directa (~USD 100/día con uso intensivo) o buscar un cerebro alternativo.

El problema es que OpenClaw fue diseñado y optimizado con Opus en mente. Con los modelos alternativos, muchos usuarios reportaron que el harness rendía distinto — no necesariamente peor en todas las tareas, pero diferente de lo que esperaban. Cristian fue directo al respecto en EP13:

> "Me encantaría decirte que hay una forma fácil y económica de manejar OpenClaw productivamente. Pero no lo creo: sin el modelo correcto de motor, va a fallar." — Cristian Tala (EP13)

Hermes, construido sin la dependencia específica de Opus, mantuvo mejor comportamiento con los cerebros alternativos. El resultado: en la semana del episodio 13 (segunda semana de mayo 2026), Hermes superó a OpenClaw en instalaciones.

### La migración de Cristian y Rodrigo (EP13, EP14)

Cristian migró sus dos agentes en producción — uno en su DGX Spark local, otro en su VPS — a Hermes en EP13. Lo que lo motivó no fue solo el rendimiento: fue también la estabilidad con los modelos disponibles sin Anthropic, y la función dreaming que OpenClaw no ofrece.

Rodrigo ya venía evaluando la migración y en EP14 confirmó que Hermes es donde está operando su stack agéntico principal: el agente mayordomo (Alfred) y el agente de research local (Politoed).

Ambos lo dicen sin nostalgia de OpenClaw: fue la herramienta correcta en su momento. Hermes es la correcta ahora.

### Cuándo OpenClaw sigue teniendo sentido

La migración no fue total ni instantánea en la comunidad. Hay casos donde OpenClaw sigue siendo la elección razonable:

- Si tienes un setup productivo que no se rompió y el cambio tiene costo de configuración alto.
- Si usas MiniMax o Qwen como cerebro y funciona bien con OpenClaw en tu caso específico.
- Si las integraciones que tienes configuradas (Telegram, Discord, conectores específicos) son más maduras en OpenClaw que en Hermes para tu uso particular.

La regla: si funciona, no lo toques. Si está roto o suboptimo desde el cambio de Anthropic, la migración a Hermes vale la pena evaluarla.

---

## Cómo empezar con Hermes Agent

### Requisitos previos

Los mismos que cualquier agente de este tipo:

- Un servidor o computador con terminal: VPS de Linux, Mac, mini-PC, Raspberry Pi.
- Acceso a un LLM: cuenta en OpenAI, MiniMax, Google, o modelos locales vía Ollama.
- Conocimientos básicos de terminal y configuración de archivos .env.

Para el caso de research local con modelos open source (el setup de Rodrigo en DGX Spark), además necesitas el hardware con suficiente RAM: mínimo 24 GB para modelos de 7B-13B, 64 GB para modelos de 26B-70B.

### Instalación básica

La documentación oficial de Hermes Agent vive en [nousresearch.com](https://nousresearch.com/). El proceso general es similar a otros frameworks de agentes open source:

```bash
# Clonar el repositorio
git clone https://github.com/NousResearch/hermes-agent.git
cd hermes-agent

# Instalar dependencias
npm install

# Configurar el cerebro en .env
cp .env.example .env
# Agregar API key del LLM elegido
```

Después de la configuración inicial, el agente se conecta por Telegram, Discord o interfaz web según lo que configures en los canales.

### Primeras configuraciones: cerebro, canal y skills

El orden que recomienda el podcast:

1. **Elige el cerebro:** si es tu primer agente, empieza con MiniMax (buen tool use, costo razonable) o Qwen vía OpenRouter (más barato aún). Reserva GPT-5.5 o Opus para cuando el agente ya funciona y quieres evaluar si el cerebro premium cambia los resultados.

2. **Configura un solo canal:** Telegram es el más fácil de configurar y el más útil para iterar rápido desde el celular. Evita conectar todos los canales al mismo tiempo — cuando algo falla, no sabrás cuál es el problema.

3. **Empieza con una skill de lo que ya haces:** en lugar de explorar los Skill Bundles desde cero, describe tu tarea repetitiva más simple y construye la primera skill para eso. Tarda una hora y tienes algo que valida que el setup funciona.

---

## Hermes en producción: casos de uso reales del podcast

### El agente mayordomo de Rodrigo: de Granola a Todoist

Rodrigo tiene dos agentes corriendo. El primero, que llama "Alfred" (su mayordomo), tiene conectado Granola — su herramienta de transcripción de reuniones — y sabe distinguir el tipo de sesión: clase, prospección comercial, planificación interna. Según el tipo, ejecuta acciones distintas: las clases generan notas estructuradas, las de prospección generan tareas de seguimiento en Todoist, las de planificación actualizan su tablero.

El segundo, "Politoed", vive en su DGX Spark con Hermes y modelos locales (Nemotron, Qwen), y hace research: clasifica papers y transcripciones y los organiza en una wiki dentro de Obsidian. Es el agente que procesa lo que llega sin estar en el canal de comunicación activo (EP14).

Lo que Rodrigo destaca: antes de tener el dreaming de Hermes, tenía que revisar manualmente si el agente estaba mejorando. Ahora lo hace solo — y a veces le propone mejoras que él no había pensado.

### Research local con Hermes en DGX Spark

Rodrigo corre Hermes con modelos open source locales en su DGX Spark (NVIDIA). El stack:

- **Hermes** como framework del agente
- **Nemotron 3 Super** o **Qwen 3.6** como cerebro local
- **Obsidian** como base de conocimiento donde el agente escribe
- Todo corriendo en el mismo hardware — sin latencia de API, sin costo por token

El caso de uso que describió en EP13 y EP14: clasificar papers de investigación, transcripciones de podcasts y notas de reuniones en categorías útiles para su sistema personal de conocimiento. El agente corre mientras él trabaja en otra cosa, y al final del día tiene el Obsidian actualizado.

Cristian también tiene scrapers generando research en el Spark casi todo el tiempo, que después transforma en material para cursos (EP14). La DGX Spark cuesta ~USD 3.000-5.000 pero elimina el costo de APIs para tareas de volumen alto.

### Cuándo Hermes no es la respuesta correcta

- **Si necesitas outputs determinísticos:** Hermes es un agente — tolera variación. Para tareas donde el resultado tiene que ser idéntico cada vez (reportes estándar, cobranza, cuadratura), usa n8n con un nodo de LLM en el paso que lo necesita.
- **Si no tienes técnica para el mantenimiento:** Rodrigo lo dijo en EP14 con claridad: instaló OpenClaw en una empresa, se rompió, y se enteró tres semanas después. Hermes tiene el mismo patrón. Si nadie va a mantenerlo activamente, el agente personal no escala en una empresa.
- **Si el costo de cambio de OpenClaw es mayor que el beneficio:** para alguien con un setup estable y productivo, la migración no es gratis. Si OpenClaw funciona con el cerebro que tienes, no cambies por seguir la moda.

---

## Preguntas frecuentes sobre Hermes Agent

**¿Qué es Nous Research?**
Nous Research es el laboratorio de IA que desarrolló Hermes Agent. Es conocido en la comunidad técnica por sus modelos de fine-tuning de código abierto, especialmente la familia de modelos llamada "Hermes" que mejora el seguimiento de instrucciones y el uso de herramientas en LLMs base como Llama y Qwen. El agente Hermes Agent comparte nombre con esos modelos.

**¿Es Hermes gratis?**
El framework es de código abierto. El costo viene del LLM que uses como cerebro. Con modelos locales vía Ollama, el costo de tokens es cero (pagas solo el hardware). Con MiniMax, GPT-5.5 o modelos de API, pagas las suscripciones correspondientes.

**¿Qué es el dreaming en Hermes Agent?**
Es una función que activa al final del día y revisa los logs de las conversaciones del agente para detectar patrones: tareas resueltas de forma inconsistente, herramientas mal usadas, instrucciones que se repiten. Luego propone mejoras a las skills del agente. El agente aprende de su propio uso, no solo de las instrucciones que tú le das explícitamente.

**¿Hermes reemplaza a OpenClaw?**
No necesariamente reemplaza — compite. Para muchos usuarios que usaban OpenClaw con Opus como cerebro, Hermes es una alternativa más estable después del cambio de marzo 2026 en Anthropic. Para quien tiene OpenClaw funcionando bien con otro cerebro, el cambio no es urgente.

**¿Puedo usar Hermes con Claude Code en paralelo?**
Sí. El patrón que describe el podcast es complementario: Hermes como agente generalista para el día a día (responder mensajes, procesar reuniones, investigar) y Claude Code para las tareas de código o cuando el harness directo de Claude saca más rendimiento. No son mutuamente excluyentes.

**¿Hermes funciona bien en español?**
La limitación de tool use en idiomas no ingleses aplica a cualquier agente — incluyendo Hermes. Los modelos subyacentes (GPT-5.5, MiniMax, Gemini) están mejorando en español, pero si tienes un flow agéntico crítico, sigue conveniéndote escribir el system prompt y las descripciones de herramientas en inglés.

---

## Recursos mencionados en el podcast

- [EP13 — Karpathy a Anthropic: el fichaje que rompe la IA](/episodios/13-karpathy-anthropic-fichaje-rompe-ia/) — Cristian anuncia la migración de OpenClaw a Hermes y los Skill Bundles de Hermes.
- [EP14 — Agentes de IA: ¿uno por persona o por equipo?](/episodios/14-agentes-ia-empresa-uno-por-persona-o-equipo/) — Rodrigo describe su stack con Hermes (Alfred + Politoed), el dreaming, y la razón de migrar.
- [EP08 — Crisis Anthropic: alternativas a Claude](/episodios/08-crisis-anthropic-modelos-alternativos-ia-local/) — El contexto que precedió la migración masiva a Hermes.
