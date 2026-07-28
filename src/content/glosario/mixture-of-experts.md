---
term: "MoE (Mixture of Experts)"
aliases:
  - "MoE"
  - "Mixture of Experts"
  - "Mezcla de expertos"
date: "2026-07-28"
updatedAt: "2026-07-28"
description: "Arquitectura que divide un modelo grande en sub-redes especializadas y activa solo la fracción que corresponde a cada consulta. Es la razón por la que hoy caben modelos enormes en hardware de escritorio."
seoTitle: "MoE (Mixture of Experts): qué es y por qué permite IA local"
seoDescription: "Qué es la arquitectura MoE (Mixture of Experts), cómo permite correr modelos de 200 mil millones de parámetros en 128 GB de RAM y qué implica para la IA local."
keywords:
  - "moe"
  - "mixture of experts"
  - "que es moe en ia"
  - "arquitectura moe"
  - "modelos grandes en poca ram"
relatedEpisodes: [18, 8]
relatedGuides:
  - "ia-local"
  - "gemini-vs-chatgpt"
relatedGlossary:
  - "bandwidth"
  - "pesos-abiertos"
---

**MoE (Mixture of Experts)** es una arquitectura que divide un modelo grande en múltiples sub-redes especializadas —los "expertos"— y activa solo la fracción que corresponde al tipo de consulta que recibe. En vez de que cada pregunta atraviese el modelo completo, un enrutador decide qué porción se ejecuta.

## Por qué importa para correr IA en casa

Porque desacopla el tamaño del modelo del costo de ejecutarlo. Un modelo puede tener cientos de miles de millones de parámetros en total, pero si en cada consulta solo se activa una fracción, el cómputo necesario para responder es mucho menor que el de un modelo denso equivalente.

El resultado práctico es el que cambió el panorama en 2026: hace poco era impensable ejecutar un modelo de 200 mil millones de parámetros en 128 GB de memoria, y hoy se puede — y funciona bien. Esa es una de las razones de fondo por las que la IA local dejó de ser un ejercicio de terquedad.

Ojo con una interpretación errada frecuente: **MoE reduce el cómputo por consulta, no necesariamente la memoria necesaria para cargar el modelo.** Los pesos siguen teniendo que caber. Lo que mejora es cuánto trabajo hace el procesador en cada respuesta, y por lo tanto la velocidad.

## Inteligencia en vez de fuerza bruta

MoE es el ejemplo más visible de una tendencia más amplia: los saltos recientes en IA vinieron menos de acumular datos y hardware que de mejorar cómo se construyen, entrenan y ejecutan los modelos. Se optimizó la arquitectura, se optimizó el entrenamiento y se optimizó la inferencia — y esas tres cosas juntas explican por qué un equipo de escritorio hoy hace lo que hace dos años requería un servidor.

Para quien decide dónde poner su dinero, esa tendencia importa más que cualquier lanzamiento puntual: significa que el hardware que compres hoy probablemente corra modelos mejores dentro de seis meses, sin que tengas que cambiar nada.

## Ver también

Para la otra variable que decide la velocidad en local: [Bandwidth](/glosario/bandwidth/). Para el tipo de modelos que suelen usar esta arquitectura y puedes instalar: [Pesos abiertos](/glosario/pesos-abiertos/). El detalle de costos y hardware está en la guía de [IA local](/guias/ia-local/), y el concepto base del modelo en [LLM](https://ecosistemastartup.com/glosario/llm/).
