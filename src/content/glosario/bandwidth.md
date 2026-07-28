---
term: "Bandwidth"
aliases:
  - "Ancho de banda de memoria"
  - "Memory bandwidth"
date: "2026-07-28"
updatedAt: "2026-07-28"
description: "La velocidad a la que la información se mueve entre la memoria y el procesador. En IA local es lo que determina cuántos tokens por segundo genera un modelo — mientras la RAM determina si el modelo entra o no."
seoTitle: "Bandwidth en IA local: qué es y por qué define la velocidad"
seoDescription: "Qué es el bandwidth (ancho de banda de memoria) al correr modelos de IA en local, en qué se diferencia de la RAM y por qué decide los tokens por segundo."
keywords:
  - "bandwidth ia local"
  - "ancho de banda de memoria"
  - "que es bandwidth"
  - "tokens por segundo modelo local"
  - "ram vs bandwidth"
relatedEpisodes: [18, 17]
relatedGuides:
  - "ia-local"
relatedGlossary:
  - "pesos-abiertos"
  - "mixture-of-experts"
---

El **bandwidth** —ancho de banda de memoria— es la velocidad a la que la información viaja entre la memoria y el procesador. Al correr un modelo de IA en local, es la variable que determina **cuántos tokens por segundo** obtienes: es decir, cuánto esperas frente a la pantalla.

## RAM y bandwidth resuelven cosas distintas

Es la confusión que hace que la gente compre mal su equipo. Son dos variables independientes:

- **La RAM (o VRAM) define si el modelo entra.** Si no cabe en memoria, no corre. Punto.
- **El bandwidth define a qué velocidad responde** una vez que entró.

Puedes tener mucha memoria y respuestas lentas, o respuestas velocísimas en un modelo diminuto. El equipo correcto es el que equilibra ambas para el modelo que realmente vas a usar.

## Los tres perfiles de hardware

| Equipo | Memoria | Bandwidth | Qué obtienes |
|---|---|---|---|
| Tarjeta de video dedicada | Poca y fija | Muy alto | Modelos chicos hasta ~300 tokens/seg |
| DGX Spark | 128 GB unificada | ~250 | Modelos grandes, velocidad moderada |
| Mac con memoria unificada | Amplia | Alto | El punto intermedio |

Una tarjeta de video tiene bandwidth enorme porque fue diseñada para mover las texturas y gráficas de un videojuego: la cantidad de información que procesa por segundo es gigante. Pero su memoria es limitada y fija, así que el tamaño del modelo que puedes cargar es chico.

Un equipo como el DGX Spark invierte la ecuación: 128 GB de memoria unificada permiten cargar modelos muy grandes, pero con un bandwidth de alrededor de 250 la generación es más lenta.

Los Mac se volvieron la opción por defecto en IA local justamente porque quedan en el medio — memoria unificada amplia **y** rápida. No es mérito del software de Apple: es la arquitectura de memoria.

## La letra chica que casi nadie revisa

Puedes comprar 128 GB de memoria unificada y aun así obtener respuestas lentas, si esa memoria es lenta. **La cantidad de RAM se publicita; su velocidad, no siempre.** Antes de comprar un equipo para correr modelos, busca el dato de bandwidth y no solo el de capacidad.

Un ejemplo de cuánto pesa el software además del hardware: cuando Cristian Tala recibió su DGX Spark no existía la tecnología de inferencia para sacarle 50 tokens por segundo a un modelo decente. Hoy corre Qwen 3.6 a 80 tokens por segundo en el mismo equipo. El bandwidth no cambió — cambió lo que se puede exprimir de él.

## Ver también

La guía de [IA local](/guias/ia-local/) tiene la tabla completa de costos por tipo de equipo. Para entender por qué hoy entran modelos que antes no cabían, ver [MoE (Mixture of Experts)](/glosario/mixture-of-experts/). Para la unidad que se mide por segundo: [Token](https://ecosistemastartup.com/glosario/token/) en el glosario de Ecosistema Startup.
