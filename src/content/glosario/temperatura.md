---
term: "Temperatura"
aliases:
  - "Temperature"
  - "Temperatura de un modelo"
date: "2026-06-12"
updatedAt: "2026-06-12"
description: "Parámetro que regula cuán predecible o creativa es la salida de un modelo de lenguaje. Cerca de 0 responde casi siempre lo mismo; cerca de 1 (o 2) se vuelve más creativo y más propenso a alucinar."
seoTitle: "Temperatura de un modelo de IA: qué es y cómo configurarla"
seoDescription: "La temperatura controla cuán predecible o creativa es la respuesta de un LLM. Qué es, qué valor usar para redacción vs. datos, y el caso real donde DeepSeek alucinó noticias por una temperatura mal calibrada."
keywords:
  - "temperatura modelo ia"
  - "que es la temperatura en ia"
  - "temperature llm"
  - "temperatura chatgpt claude"
  - "temperatura para redaccion ia"
relatedEpisodes: [15]
relatedGuides:
  - "gemini-vs-chatgpt"
relatedGlossary:
  - "agente-de-ia"
---

**La temperatura** es el parámetro que regula cuán predecible o creativa es la salida de un modelo de lenguaje. Es un índice —típicamente de 0 a 1, o de 0 a 2 según la plataforma— que ajusta la probabilidad con la que el modelo elige cada palabra siguiente. En 0, ante el mismo prompt el modelo responde casi siempre lo mismo: preciso pero plano. A medida que sube, baja la probabilidad de las palabras más obvias y el modelo se vuelve más creativo —y más propenso a inventar.

## ¿Para qué sirve la temperatura?

Sirve para calibrar el equilibrio entre **certeza y creatividad** según la tarea:

- **Cerca de 0** para tareas donde quieres exactitud y repetibilidad: extracción de datos, clasificación, código, respuestas factuales. La salida es consistente pero aburrida.
- **Entre 0.5 y 0.7** para el punto medio que usan por defecto la mayoría de las herramientas: lo suficientemente creativo para que el texto no suene robótico, con baja tasa de alucinación.
- **Cerca de 1 (o más)** para lluvia de ideas, variaciones de copy o exploración creativa. Aquí el modelo puede sorprenderte —o decirte que 2+2 es "pez".

Rodrigo lo explicó en el episodio 15 con una imagen útil: en temperatura 0 le pides algo tres veces y obtienes casi el mismo texto tres veces; subiéndola, cada respuesta varía más, hasta volverse impredecible en los extremos.

## ¿La controlas tú?

Depende de cómo uses el modelo:

- **En herramientas de chat** (ChatGPT, Claude, Gemini) **no la controlas**: viene fijada por el proveedor, habitualmente entre 0.5 y 0.7. El usuario no la ve.
- **Vía API o en automatizaciones** (n8n, OpenClaw, tu propio código) **sí la configuras** —y ahí es donde importa afinarla, porque es tu responsabilidad.

## El caso real: cuando la temperatura rompe producción

El episodio 15 dejó una lección que vale para cualquiera que tenga un LLM en producción. El sitio de noticias de Cristian generaba contenido con **Qwen 3.5** a temperatura 0.7 —un valor que llevaba meses funcionando bien. Al cambiar el modelo a **DeepSeek V4 Flash** (que en sus pruebas daba mejor redacción y SEO), mantuvo la misma temperatura. El problema: cuando a DeepSeek le faltaba información, **inventaba**. Resultado, unas 24 horas de noticias con datos alucinados y un fin de semana escribiendo un script para corregirlas. Bajó la temperatura a 0.4-0.5 y el problema desapareció.

La moraleja: **la temperatura no se comporta igual entre modelos**. El mismo 0.7 que era seguro en un modelo hace alucinar a otro. Cambiar de cerebro obliga a re-probar los casos borde —en especial qué hace el modelo cuando le falta información.

## Ver también

El término "temperatura" no aparece en el [glosario de Ecosistema Startup](https://ecosistemastartup.com/glosario/) porque es del nicho técnico de cómo operar modelos —esa es la división entre los dos glosarios. Para los conceptos más amplios que sí están en eco: [LLM](https://ecosistemastartup.com/glosario/llm/) (el modelo cuya salida regula la temperatura) y [Fine-tuning](https://ecosistemastartup.com/glosario/fine-tuning/) (otra palanca para controlar cómo responde el cerebro).
