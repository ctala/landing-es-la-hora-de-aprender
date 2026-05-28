---
term: "MCP"
aliases:
  - "Model Context Protocol"
  - "Protocolo de Contexto de Modelos"
date: "2026-05-28"
updatedAt: "2026-05-28"
description: "Estándar abierto creado por Anthropic para que un modelo de lenguaje invoque herramientas externas (APIs, bases de datos, otros agentes) de forma uniforme, sin reescribir la conexión para cada modelo."
seoTitle: "MCP (Model Context Protocol): qué es y cómo se usa"
seoDescription: "MCP — Model Context Protocol — es el estándar abierto de Anthropic para conectar agentes de IA con herramientas externas. Qué es, para qué sirve, gotchas y diferencias con una API tradicional."
keywords:
  - "mcp"
  - "model context protocol"
  - "mcp anthropic"
  - "que es mcp"
  - "mcp server"
relatedEpisodes: [13, 14]
relatedGuides:
  - "claude-code"
  - "n8n"
relatedGlossary:
  - "agente-de-ia"
---

**MCP (Model Context Protocol)** es un estándar abierto creado por Anthropic en 2024 para que un modelo de lenguaje —Claude, GPT, Gemini— pueda invocar herramientas externas (bases de datos, APIs, servicios web, otros agentes) de forma uniforme. Define cómo el modelo "ve" y llama a esas herramientas, sin que el desarrollador tenga que reinventar la conexión para cada modelo.

## ¿Para qué sirve MCP?

MCP resuelve un problema concreto: dar capacidades nuevas a un agente sin reescribir el agente. En vez de programar a Claude para que "use" HubSpot, Slack o Google Sheets, expones esas herramientas vía un MCP server y Claude las consume como si fueran parte de su repertorio nativo.

Antes de MCP, conectar un modelo a una herramienta nueva implicaba documentar la API en el system prompt, definir manualmente las funciones que el modelo podía llamar y mantener ese contrato cada vez que la API cambiaba. Con MCP el server expone su capacidad una sola vez; cualquier agente compatible con el estándar la consume sin tocar el agente.

## Cómo se usa MCP en la práctica

En el podcast (EP13 y EP14) los hosts conectan agentes —Claude Code, Hermes, OpenClaw— a herramientas externas vía MCP servers. La promesa de fondo es portabilidad: el mismo MCP server funciona con Claude Code en el computador de Cristian y con OpenClaw en el VPS de Rodrigo.

Hay un gotcha repetido: **conectar el MCP no es enseñarle al agente a usar la herramienta**. Rodrigo lo aprendió con HubSpot (EP14) — tuvo que crear una skill que explicara cómo trabaja él con HubSpot, no bastó con darle el token. El MCP da acceso, no contexto. La metáfora del episodio: pasarte una patineta no te enseña a hacer un ollie.

## MCP vs. API tradicional

Una API tradicional la consume tu código. Un MCP server expone funciones que **el modelo de lenguaje** decide cuándo llamar, en base al contexto de la conversación. Es la diferencia entre escribir _"si la intención es revisar calendario, llama a la API del calendario"_ y dejar que el agente decida solo cuándo el calendario es relevante.

Esa autonomía es lo que hace a los agentes potentes — y también lo que los hace impredecibles si el tool use del modelo no está afinado, especialmente al operar en español.
