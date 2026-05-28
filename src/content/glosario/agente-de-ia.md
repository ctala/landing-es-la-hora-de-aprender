---
term: "Agente de IA"
aliases:
  - "agente IA"
  - "AI agent"
  - "agente autónomo"
date: "2026-05-28"
updatedAt: "2026-05-28"
description: "Un agente de IA es un sistema basado en un modelo de lenguaje que percibe contexto, decide los pasos a seguir y ejecuta acciones para alcanzar un objetivo, sin requerir aprobación humana en cada paso."
seoTitle: "Agente de IA: qué es y en qué se diferencia de un chatbot"
seoDescription: "Un agente de IA percibe contexto, decide qué herramientas usar y ejecuta acciones para alcanzar un objetivo. Tipos, gotchas y cómo se diferencia de un chatbot o una automatización tipo n8n."
keywords:
  - "agente de ia"
  - "que es un agente de ia"
  - "agente ai"
  - "agente autonomo ia"
  - "tipos de agentes ia"
relatedEpisodes: [4, 5, 12, 14]
relatedGuides:
  - "claude-code"
  - "n8n"
relatedGlossary:
  - "mcp"
---

Un **agente de IA** es un sistema basado en un modelo de lenguaje que percibe contexto, decide los pasos a seguir y ejecuta acciones para alcanzar un objetivo. La diferencia con un asistente conversacional clásico es la autonomía: el agente no espera tu próxima instrucción en cada paso, sino que itera solo hasta cumplir el objetivo o toparse con un bloqueo.

## ¿Qué hace un agente que un chatbot no?

Tres cosas:

1. **Decide qué herramienta usar.** Si para responder algo necesita consultar tu calendario, leer un archivo o llamar a una API, lo hace solo (vía tool use + MCP).
2. **Encadena pasos.** Un objetivo grande lo descompone en pasos chicos y los ejecuta en orden.
3. **Persiste contexto.** Lo que aprende en un paso lo usa en el siguiente sin que tú se lo recuerdes.

Un chatbot responde a cada mensaje individual; un agente trabaja sobre un objetivo amplio y se queda en la tarea hasta resolverla.

## Tipos de agente que aparecen en el podcast

- **Agente personal** (clon del operador): vive en tu computador o servidor, conoce tu contexto, opera con tus permisos. Ejemplos: Claude Code en local, OpenClaw, Hermes (EP01, EP13, EP14).
- **Agente temático** (por función en la empresa): vive en la organización, lo usa todo el equipo, está especializado en marketing, operaciones, soporte u otra función. Es lo que Rodrigo recomienda para empresas hoy (EP14) por la facilidad de mantención y la memoria colectiva que construye.
- **Agente determinista** (n8n y similares): no es propiamente un agente de IA — es una automatización con pasos fijos. La nomenclatura confunde, pero el podcast los distingue claramente: el agente razona y decide, n8n ejecuta condiciones predefinidas. Ambos son útiles, en contextos distintos.

## El cuello de botella real de los agentes

El comentario que más repiten los hosts (EP12, EP14): el cuello de botella de un agente **no** es el modelo. Es:

1. **Tool use en otro idioma.** Si el modelo fue entrenado mayormente en inglés y chino y tú le hablas en español, se salta herramientas que están descritas en español. Pasa con MiniMax y, en menor grado, con Claude (EP14).
2. **Mantención.** Un agente personal lo cuida su dueño; si no es técnico, se rompe y nadie se entera. Caso real del podcast: tres semanas con OpenClaw caído en una empresa porque el operador "siguió con la pega" sin avisar.
3. **Gobernanza.** En empresas grandes, quién es dueño de qué dato y quién accede a qué. Por eso el agente temático escala mejor que el clon de cada persona.

## Cómo armar tu primer agente sin desangrar

El orden mental que funciona, sintetizado de varios episodios:

1. **Un objetivo claro y delimitado.** Si el agente no sabe adónde va, improvisa.
2. **Permisos explícitos** de qué carpetas, archivos o comandos puede tocar.
3. **Una forma de que te avise cuando termina o cuando se atasca** (Telegram, log de archivo, otro agente que lo supervise).

Sin esos tres, el agente trabaja al vacío. Con ellos, lo dejas corriendo y el costo de tu próximo empleado podría no ser humano (EP04).
