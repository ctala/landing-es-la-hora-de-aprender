---
term: "Tool use"
aliases:
  - "Uso de herramientas"
  - "Llamadas a herramientas"
date: "2026-11-17"
updatedAt: "2026-11-17"
description: "Tool use es la capacidad de un modelo de IA de decidir cuándo usar una herramienta externa (buscar, leer un archivo, mandar un correo) y llamarla bien. Es lo que permite que un agente actúe y no solo responda."
seoTitle: "Tool use en IA: qué es y por qué decide qué modelo usar"
seoDescription: "Qué es el tool use o uso de herramientas en IA, por qué un modelo brillante para conversar falla como agente y por qué funciona peor en español."
keywords:
  - "tool use ia"
  - "que es tool use"
  - "uso de herramientas ia"
  - "tool use en español"
  - "mejor modelo para agentes"
relatedEpisodes: [28, 15, 14, 8, 3]
relatedGuides:
  - "agentes-de-ia"
  - "gemini-vs-chatgpt"
  - "openclaw"
relatedGlossary:
  - "agente-de-ia"
  - "mcp"
  - "harness"
  - "computer-use"
---

**Tool use**, o uso de herramientas, es la capacidad de un modelo de IA de decidir cuándo necesita una herramienta externa (buscar en la web, leer un archivo, mandar un correo) y llamarla bien. En el [episodio 28](/episodios/28-escandalo-jensen-huang-ia-politica/), Rodrigo lo describe como lo que permite que un agente actúe y no solo responda.

## Por qué decide qué modelo usar en un agente

Un modelo puede conversar muy bien y fallar como agente. Rodrigo lo vio al probar OpenClaw con varios modelos: MiniMax 2.5 era genial para contestar, pero se complicaba al usar herramientas. Según él, GPT y Claude son por lejos los mejores en esto.

Cristian usa modelos chinos en muchos proyectos, pero para su Hermes eligió GPT 6.1 Sol. Qwen 3.6 y 3.8 no le fallan en las llamadas a herramientas, aunque se marean con las skills. El costo de Sol es la velocidad: es lentísimo.

La idea viene de antes. En el [episodio 3](/episodios/03-latamgpt-pentagono-ia-empleo/) ya se decía que el salto reciente de los modelos está en el uso de herramientas, más que en inteligencia bruta. Si tu caso no necesita un agente que encadene acciones, un modelo de hace 12 a 18 meses hace el trabajo.

## Por qué falla más en español

Muchos modelos fueron entrenados sobre todo en inglés y chino. Cuando la descripción de la herramienta está en español, al modelo se le escapa cuándo invocarla.

> "El problema no es que el modelo sea nuevo. Hablas en español, y fue entrenado en inglés y chino: el tool use, saber cuándo usar una herramienta descrita en español, se lo salta." — Cristian Tala, [episodio 14](/episodios/14-agentes-ia-empresa-uno-por-persona-o-equipo/)

En ese mismo episodio Rodrigo puso la parte optimista: los modelos nuevos están mejorando justo ahí.

## Un error que parece del modelo y es de configuración

En el [episodio 8](/episodios/08-crisis-anthropic-modelos-alternativos-ia-local/), Cristian contó que Qwen 3.5 funcionaba excelente con OpenClaw, salvo por un bug: con el modo thinking activado, el modelo no recibía la lista de herramientas. Perdió horas ahí.

La lección sirve para cualquier agente. Si no usa una herramienta que tiene instalada, antes de cambiar de modelo revisa si la herramienta le está llegando. Esa capa que se la entrega se llama [harness](/glosario/harness/).

## Cómo se ve el avance

El test favorito de Rodrigo es el de Pokémon. Hace un año, la IA tenía que crearse sus propias herramientas, como un minimapa, para sobrevivir al juego. Los últimos modelos lo terminan sin eso y en mucho menos tiempo.

Su conclusión del [episodio 15](/episodios/15-fable-5-que-modelo-ia-usar-cada-tarea/) va en la misma dirección: los modelos ya exceden las tareas diarias de la mayoría, y lo que desbloquea productividad son las capacidades de la herramienta, como skills, conectores y tool use.

## Ver también

[MCP](/glosario/mcp/) es el estándar con que se le presentan las herramientas al modelo. [Computer use](/glosario/computer-use/) es el caso en que la herramienta es un computador completo. Y la guía de [agentes de IA](/guias/agentes-de-ia/) explica cómo elegir el modelo que hace de cerebro.
