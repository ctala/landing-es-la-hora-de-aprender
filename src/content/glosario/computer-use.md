---
term: "Computer use"
aliases:
  - "Uso del computador"
  - "Uso de computador por IA"
date: "2026-11-17"
updatedAt: "2026-11-17"
description: "Computer use es la capacidad de un modelo de IA de manejar un computador o un navegador completo, como lo haría una persona, en vez de leer solo el texto de una página. Es lo que necesita un agente para entrar a sitios que cargan con JavaScript."
seoTitle: "Computer use en IA: qué es y cuándo lo necesita tu agente"
seoDescription: "Qué es computer use, por qué tu agente no ve la página del banco ni la de jurisprudencia y qué opciones hay: navegador real, máquina virtual o local."
keywords:
  - "computer use ia"
  - "que es computer use"
  - "agente ia navegador"
  - "agente ia no ve la pagina"
  - "computer use modelos locales"
relatedEpisodes: [29, 28, 19, 14, 13]
relatedGuides:
  - "agentes-de-ia"
  - "hermes-agent"
  - "ia-local"
relatedGlossary:
  - "tool-use"
  - "agente-de-ia"
  - "alucinacion"
---

**Computer use** es la capacidad de un modelo de IA de manejar un computador o un navegador completo, como lo haría una persona, en vez de leer solo el texto de una página. Junto con [tool use](/glosario/tool-use/), es lo que según Rodrigo permite que un agente actúe y no solo responda ([episodio 28](/episodios/28-escandalo-jensen-huang-ia-politica/)).

## Cuándo lo necesita tu agente

Cuando la página no muestra nada hasta que se ejecuta su código. En el [episodio 29](/episodios/29-alucinaciones-ia-como-evitarlas-nod-n8n/) aparecieron dos casos:

- **Jurisprudencia.** En Chile, esa información vive en una página que carga los datos después de que entras. Una IA normal busca ahí, no ve nada y, a menos que te lo diga, inventa.
- **La cuenta del banco.** El Hermes de Diego entraba a su banco y no veía nada.

Cristian explica la causa común: esas páginas cargan su contenido con JavaScript, y la mayoría de las IA navega sin JavaScript activado. Rodrigo cree que el agente está entrando con un navegador headless y que hay que pedirle de forma explícita que use el navegador real.

La regla se escribe en la skill. La que dan en el episodio: si la tarea es de jurisprudencia, usa Chrome completo con computer use, siempre. Sin eso, el agente rellena lo que no ve, y eso es una [alucinación](/glosario/alucinacion/).

## Dónde corre ese computador

| Opción | Cómo funciona | Episodio |
|---|---|---|
| En la nube del proveedor | Gemini Spark trae computer use sobre una máquina virtual en Google Cloud, en un espacio asignado a ti | [EP13](/episodios/13-karpathy-anthropic-fichaje-rompe-ia/) |
| En tu computador, con modelos locales | LM Studio sacó su propio agente con computer use. Cristian lo probó con Gemma 4 de 12 mil millones de parámetros: no vuela, pero funciona muy bien | [EP19](/episodios/19-primer-empleado-digital-20-dolares-mes/) |
| Dentro del agente | Nod trae su propio computador local y su navegador, así que puede abrir una página web para hacer conciliaciones bancarias | [EP29](/episodios/29-alucinaciones-ia-como-evitarlas-nod-n8n/) |
| Un navegador externo conectado por API | Cristian conecta browserless a su Hermes, en el mismo servidor pero en otro contenedor | [EP29](/episodios/29-alucinaciones-ia-como-evitarlas-nod-n8n/) |

## El problema de las pestañas abiertas

Cristian usa Hermes para sus conciliaciones bancarias personales, pero evita el navegador que trae por defecto. Por detrás es Chrome, las pestañas a veces no se cierran y pueden saturar al agente. Diego lo confirmó: un día encontró 100 pestañas abiertas. Por eso Cristian prefiere el navegador externo.

Otra regla del mismo episodio: a un agente no se le pasan las claves por chat. Diego usó el enlace de un vault.

## Por qué es una palanca y no un extra

En el episodio 13, Rodrigo notó que Gemini 3.5 Flash había mejorado justo en las dos palancas que le faltaban a Google para entrar al mundo de los agentes: uso de herramientas y computer use. En el [episodio 14](/episodios/14-agentes-ia-empresa-uno-por-persona-o-equipo/) repitió la idea: todos los modelos están mejorando ahí.

## Ver también

La guía de [agentes de IA](/guias/agentes-de-ia/) ayuda a elegir uno según tu caso, y la de [Hermes Agent](/guias/hermes-agent/) cubre el que usa Cristian. Si quieres todo en tu máquina: [IA local](/guias/ia-local/).
