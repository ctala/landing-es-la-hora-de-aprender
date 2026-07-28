---
term: "Pesos abiertos"
aliases:
  - "Open weights"
  - "Modelos de pesos abiertos"
  - "Open-weight models"
date: "2026-07-28"
updatedAt: "2026-07-28"
description: "Modelo de IA cuyo resultado del entrenamiento —los pesos— se publica para que cualquiera lo descargue y lo ejecute en su propio hardware. No es lo mismo que código abierto: la licencia puede restringir usos comerciales."
seoTitle: "Pesos abiertos (open weights): qué son y en qué se diferencian"
seoDescription: "Qué son los pesos abiertos (open weights) en IA, por qué no es lo mismo que código abierto, y por qué en 2026 alcanzaron a los modelos de frontera."
keywords:
  - "pesos abiertos"
  - "open weights"
  - "que son los open weights"
  - "modelos de pesos abiertos"
  - "open weights vs open source"
relatedEpisodes: [18, 16, 8]
relatedGuides:
  - "ia-local"
  - "gemini-vs-chatgpt"
relatedGlossary:
  - "mixture-of-experts"
  - "bandwidth"
---

Un modelo de **pesos abiertos** (*open weights*) es aquel cuyo resultado del entrenamiento se publica para que cualquiera lo descargue, lo instale y lo ejecute en su propio hardware. Los "pesos" son los valores numéricos que quedaron fijados durante el entrenamiento: el modelo, literalmente. Publicarlos significa que ya no necesitas la API de nadie para usarlo.

## Pesos abiertos no es lo mismo que código abierto

Esta es la confusión más común y tiene consecuencias prácticas. Que los pesos estén disponibles no dice nada sobre la licencia que los acompaña, y esa licencia es la que define qué puedes hacer legalmente.

Kimi K3 es un buen ejemplo: liberó sus pesos con una licencia que permite el uso propio sin restricciones, pero cobra un fee si empaquetas el modelo para revenderlo como servicio a terceros. Es una condición razonable —evita que un tercero monetice el trabajo de entrenamiento— pero significa que llamarlo "código abierto" sin más sería inexacto.

La regla práctica: **los pesos abiertos te dan capacidad técnica; la licencia te dice qué puedes hacer con ella.** Revisa la segunda antes de construir un negocio encima.

## Por qué importan en 2026

Porque dejaron de ser el plan B. El año pasado había 17 puntos de diferencia entre los modelos de pesos abiertos y los de frontera. Hoy esa diferencia es cero: modelos como Kimi K3 o MiniMax juegan al nivel de los cerrados de la generación inmediatamente anterior, y lo que antes era un atraso estructural de seis a ocho meses se volvió empate técnico.

Eso cambia dos cosas para quien decide. La primera es la **soberanía técnica**: si un gobierno bloquea el acceso a un modelo, si un proveedor cambia sus condiciones o si tu tarjeta de crédito falla, un modelo instalado en tu red sigue funcionando. La segunda es el **control de credenciales y datos**: nada sale de tu máquina, ningún log queda del lado de un tercero.

## La discusión política que abrieron

En 2026 los pesos abiertos dejaron de ser un tema técnico. Jensen Huang (NVIDIA) y Satya Nadella (Microsoft) encabezaron una carta defendiendo su importancia, a la que se sumaron Cloudflare, OpenAI, xAI, OpenClaw y Nous Research, entre otros. Anthropic —que viene advirtiendo sobre los riesgos de liberar modelos potentes— no firmó. De ahí surgió la Open Security Alliance.

El trasfondo es geopolítico: mientras en Estados Unidos se frenaban lanzamientos a la espera de validación gubernamental, los laboratorios chinos liberaban sus modelos completos. La tesis que se repite en el podcast es que bloquear tiene efecto bumerán — el mundo migra a los modelos que sí puede usar, y esos modelos mejoran con ese uso.

## Ver también

Para el concepto general del modelo detrás de los pesos: [LLM](https://ecosistemastartup.com/glosario/llm/) en el glosario de Ecosistema Startup. Para la diferencia de licenciamiento: [Open source](https://ecosistemastartup.com/glosario/open-source/). Y si tu interés es ejecutarlos en tu propia máquina, la guía de [IA local](/guias/ia-local/) tiene el hardware y los costos reales.
