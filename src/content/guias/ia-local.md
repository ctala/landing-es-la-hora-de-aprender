---
title: 'IA local: cuánto cuesta de verdad correr tus propios modelos'
date: '2026-07-28'
updatedAt: '2026-08-18'
description: Los modelos abiertos alcanzaron a los de frontera y correr IA en tu propio computador dejó de ser un experimento. Qué hardware necesitas, cuánto cuesta en 2026 y cuándo conviene más pagar una suscripción de US$20.
seoTitle: 'IA local 2026: cuánto cuesta correr tus propios modelos'
seoDescription: 'Cuánto cuesta correr modelos de IA en local en 2026: RAM vs bandwidth, precios reales de Mac Studio y DGX Spark, y en qué casos conviene más una suscripción.'
focusKeyword: ia local
keywords:
- ia local
- correr modelos de ia en local
- cuanto cuesta una ia local
- cuanta ram necesito para un modelo local
- llm local
- modelos open weights
- mejor computador para ia local
- dgx spark vs mac studio
- modelos locales vs suscripcion
relatedEpisodes:
- 20
- 19
- 18
- 17
- 8
- 15
relatedGuides:
- hermes-agent
- agentes-de-ia
- gemini-vs-chatgpt
- openclaw
funnel:
  type: free
  label: 'Monta tu primer agente: AI Agents Starter Kit (CAR)'
  cta: 'Decidir el hardware es la parte fácil; lo difícil es que el modelo local termine haciendo trabajo de verdad y no quede como un juguete caro. En Cágala, Aprende, Repite hay más de mil emprendedores metiendo IA en negocios que ya existen —montando su primer agente, conectándolo a lo que ya usan, contando qué les funcionó y qué les explotó—. El AI Agents Starter Kit está de respaldo para que llegues con el mismo idioma y vayamos directo a lo tuyo. Entrar es gratis: llegas, te presentas y cuentas en qué estás atascado.'
  ctaButton: Entrar y presentarte →
  url: https://www.skool.com/cagala-aprende-repite/classroom/f970d84d?utm_source=eslahoradeaprender&utm_medium=organic&utm_campaign=hub_ia_local
faq:
- question: ¿Cuánta RAM necesito para correr un modelo de IA en local?
  answer: 'Depende de qué quieras hacer. Para dictado o transcripción basta con casi cualquier computador: esos modelos pesan menos de 1 GB. Para un asistente de uso diario necesitas al menos una tarjeta de video con 24 GB de VRAM, o un equipo con memoria unificada de 64 GB en adelante. Con 128 GB de memoria unificada ya entran modelos de 200 mil millones de parámetros. Pero la RAM sola no basta: el bandwidth define la velocidad, así que puedes tener mucha memoria y respuestas lentas.'
- question: ¿Cuánto cuesta un computador para correr modelos de IA locales?
  answer: 'Hay cuatro rangos. Un mini-PC o un equipo de escritorio con una tarjeta usada tipo 3090 es la entrada barata: modelos chicos, mucha velocidad. Un MacBook Pro M5 con 48 a 64 GB cuesta entre US$3.000 y US$4.000. Un Mac Studio con 128 GB de memoria unificada cuesta más, y es la recomendación si vas a dejar el equipo prendido sirviendo modelos. Un servidor corporativo interno que corra lo mejor que existe hoy ronda el medio millón de dólares — para una empresa que ya paga licencias a toda su gente, eso se paga rápido.'
- question: ¿Conviene una IA local o pagar una suscripción de US$20?
  answer: 'Para el 99,9% de las personas conviene la suscripción. Los modelos de frontera van un poco más adelante y, sobre todo, traen los conectores, las aplicaciones y las skills que les sacan provecho. La regla práctica: si lo vas a usar poco, gastar US$4.000 en un computador nunca se rentabiliza. El local se justifica por gobernanza (que nadie te corte el acceso), por datos que no pueden salir de tu red, por volumen alto y sostenido, o porque quieres aprender.'
- question: ¿Qué es mejor, un Mac o un DGX Spark para IA local?
  answer: 'Resuelven cosas distintas. El DGX Spark trae 128 GB de memoria unificada con un bandwidth de alrededor de 250, así que entran modelos grandes pero la velocidad es moderada. Una tarjeta de video dedicada tiene el problema inverso: bandwidth altísimo —cientos de tokens por segundo— pero poca memoria, así que solo entran modelos chicos. El Mac queda en el punto intermedio: memoria unificada amplia y rápida a la vez. Por eso es la opción más equilibrada hoy, no por el software de Apple.'
- question: ¿Los modelos abiertos ya sirven igual que ChatGPT o Claude?
  answer: 'En ranking, la brecha llegó a cero. El año pasado había 17 puntos de diferencia entre los modelos de pesos abiertos y los de frontera; hoy modelos como Kimi K3 o MiniMax juegan al nivel de los cerrados de la generación anterior inmediata. La diferencia que queda no está tanto en el modelo como en el harness: la herramienta que lo envuelve, los conectores y el flujo de trabajo. Un modelo excelente con un mal harness rinde peor que uno bueno bien integrado.'
- question: ¿Cómo pruebo modelos locales o chinos sin comprar hardware?
  answer: 'Con OpenRouter. Te da acceso por API a modelos de casi todas las compañías pagando por uso, así que probar cuesta centavos en vez de una suscripción mensual completa. Es la forma correcta de decidir: prueba primero por API el modelo que crees que quieres correr en casa, mide si te sirve para tu caso real, y recién ahí evalúa el hardware. También puedes conectarlo a un agente de escritorio como Hermes.'
resources:
- title: OpenRouter
  url: https://openrouter.ai
  description: Acceso por API a modelos de casi todas las compañías, pagando por uso. La forma barata de probar antes de comprar hardware.
- title: OpenCode
  url: https://opencode.ai
  description: Agente de código de terminal, abierto, que funciona con modelos locales.
- title: Handy
  url: https://handy.computer
  description: Dictado local con modelos de transcripción de menos de 1 GB. El caso de entrada a la IA local sin comprar nada.
- title: NVIDIA DGX Spark
  url: https://www.nvidia.com/en-us/products/workstations/dgx-spark/
  description: Equipo dedicado con 128 GB de memoria unificada; mucha capacidad, bandwidth limitado.
- title: Qwen
  url: https://chat.qwen.ai
  description: La familia de modelos abiertos de Alibaba, la más usada hoy para correr en local.
- title: Mistral AI
  url: https://mistral.ai
  description: El laboratorio europeo. Buen español y el mejor OCR del mercado según los hosts.
---

Durante años, "correr IA en tu propio computador" fue un ejercicio de terquedad: modelos que respondían mal, lentos, y que servían para presumir pero no para trabajar. Eso cambió en 2026. La brecha entre los modelos de pesos abiertos y los de frontera pasó de 17 puntos el año pasado a **cero**, y en paralelo la eficiencia mejoró tanto que hoy entra un modelo de 200 mil millones de parámetros en 128 GB de memoria.

Esta guía responde la pregunta práctica, no la ideológica: **cuánto cuesta de verdad tener tu propia IA, y en qué casos conviene más seguir pagando US$20 al mes.** Todo lo que sigue sale de lo que los hosts de *Es la Hora de Aprender* corren realmente en sus máquinas —hardware comprado con su plata, medido en sus casas— y no de las especificaciones de marketing de ningún fabricante.

---

## ¿Qué significa "correr IA local"?

Significa que el modelo vive en tu máquina: los pesos están en tu disco, la inferencia ocurre en tu memoria y tu procesador, y ninguna consulta sale a internet. No es lo mismo que "código abierto". La mayoría de lo que corre hoy en local son modelos de **pesos abiertos** (open weights): el laboratorio publica el resultado del entrenamiento para que cualquiera lo descargue e instale, pero con una licencia que puede tener restricciones. Kimi K3, por ejemplo, liberó sus pesos con una licencia que permite el uso propio y cobra un fee solo si empaquetas el modelo para revenderlo como servicio.

La distinción importa porque define qué puedes hacer legalmente con el modelo, no qué tan bueno es. Y hoy, en calidad, dejaron de ser el plan B.

## ¿Ya vale la pena? Lo que cambió en 2026

Tres cosas se movieron al mismo tiempo.

**La calidad se emparejó.** Modelos como Kimi K3 y MiniMax juegan al nivel de los cerrados de la generación inmediatamente anterior. Lo que antes era un atraso estructural de seis a ocho meses para el código abierto, hoy es empate técnico en los rankings.

**La eficiencia mejoró más rápido que el hardware.** Buena parte del mérito es del *mixture of experts*: modelos grandes de los que solo se ejecuta la fracción que corresponde al tipo de pregunta. Eso permite correr modelos enormes con memoria que hace dos años no habría alcanzado.

**El software de inferencia maduró.** El dato más ilustrativo: cuando a Cristian Tala le llegó su DGX Spark, no existía la tecnología para sacarle 50 tokens por segundo a un modelo decente. Hoy corre Qwen 3.6 a **80 tokens por segundo** en el mismo equipo. Eso es respuesta inmediata — terminas de escribir y el modelo ya está contestando. Mismo hardware, otro mundo.

## Las dos variables que deciden tu compra: RAM y bandwidth

Casi todo el mundo mira una sola y compra mal. Son dos, y limitan cosas distintas:

- **La RAM (o VRAM) define qué tamaño de modelo entra.** Si el modelo no cabe en memoria, simplemente no corre.
- **El bandwidth —el ancho de banda por el que pasa la información— define a qué velocidad responde.** Es lo que se traduce en tokens por segundo.

Con eso en la mano, los tres tipos de equipo se explican solos:

| Tipo de equipo | RAM disponible | Bandwidth | Resultado |
|---|---|---|---|
| Tarjeta de video dedicada | Baja y fija | Muy alto | Modelos chicos, hasta ~300 tokens/seg |
| Equipo tipo DGX Spark | 128 GB unificada | Limitado (~250) | Modelos grandes, velocidad moderada |
| Mac con memoria unificada | Amplia | Alto | El punto intermedio: modelos grandes con buena velocidad |

Por eso los Mac se volvieron la opción por defecto para IA local, y no por el software de Apple —que en IA no destaca— sino por la arquitectura de memoria unificada rápida. Pero hay letra chica: puedes comprar 128 GB unificados y quedarte con modelos grandes y lentos si esa memoria es lenta. **La velocidad de la memoria importa tanto como la cantidad.**

## ¿Cuánto cuesta? Los cuatro caminos con precios reales

| Camino | Qué corre | Costo aproximado | Para quién |
|---|---|---|---|
| Modelos chicos especializados | Transcripción, dictado, clasificación | US$0 sobre tu equipo actual | Todos: es la entrada real a la IA local |
| Escritorio con tarjeta usada (3090 o similar) | Modelos chicos, muy rápidos | El más barato de los locales | Quien quiere aprender y ya tiene torre |
| Mini-PC dedicado | Un modelo mediano para tareas acotadas | ~US$1.000 | Automatizaciones que corren todo el día |
| MacBook Pro M5, 48-64 GB | Asistente local mientras trabajas | US$3.000 – US$4.000 | Quien quiere el modelo en su equipo de trabajo |
| Mac Studio 128 GB | Modelos grandes sirviendo a la red | Más que el MacBook | Quien deja un equipo prendido de servidor |
| Servidor corporativo | Lo mejor que existe, puertas adentro | ~US$500.000 | Empresa que no puede sacar su data |

Dos advertencias sobre estos precios. La primera: **hay escasez mundial**. La demanda de los data centers de IA disparó el precio de la RAM, los discos y los procesadores — un equipo que costaba US$2.000 hoy puede estar en US$3.000 o US$4.000, y un Mac Studio puede tardar cuatro meses en llegar. La segunda: ese medio millón de dólares del servidor corporativo suena a broma hasta que lo miras como empresa. Para una organización que hoy paga licencias de IA para toda su gente, ese hardware se paga en el primer mes y deja de depender de un proveedor externo.

## ¿Cuándo conviene local y cuándo no?

Esta es la parte que se salta la mayoría de las guías. **Para el 99,9% de las personas la respuesta correcta sigue siendo una suscripción de US$20 al mes.** Los modelos de frontera van un poco más adelante y, sobre todo, traen los conectores, las aplicaciones y las skills que les sacan provecho. Si lo vas a usar poco, ningún cálculo hace rentable un computador de US$4.000.

Dicho eso, hay cinco escenarios donde el local gana con claridad:

1. **Datos que no pueden salir de tu red.** Salud, banca, información personal de clientes. En Chile, la Ley de Protección de Datos entra en vigencia en diciembre de 2026, y eso convierte una decisión técnica en una decisión legal.
2. **Gobernanza y continuidad.** Si te bloquean el acceso, si se cae el proveedor o si tu tarjeta de crédito falla, el modelo local sigue ahí. No es paranoia: los hosts lo vivieron.
3. **Control de credenciales.** Los modelos en la nube se pusieron restrictivos: no guardan un token, no devuelven una clave, y los logs quedan del lado del proveedor. En tu red, tus credenciales son tuyas.
4. **Latencia crítica o volumen alto y sostenido.** IoT, visión computacional, clasificación masiva. Cuando el costo por llamada se multiplica por millones, la ecuación cambia.
5. **Prevalidación.** Un modelo local barato filtra y clasifica, y solo lo que amerita llega al modelo caro. Rodrigo Rojo corre Gemma 26B en un mini-PC de unos US$1.000 a 15 tokens por segundo para clasificación editorial, antes de gastar tokens de un modelo de frontera.

Fíjate en el patrón: ninguno de esos cinco motivos es "porque el modelo local es mejor". Son motivos de control, costo a escala y riesgo. Si tu razón para comprar hardware es que crees que vas a obtener mejores respuestas que con ChatGPT o Claude, vas a gastar mucho para quedar peor.

## Los modelos chicos que casi nadie considera

Acá está el consejo que más rendimiento da por dólar invertido: **no necesitas un modelo grande para la mayoría de las tareas locales.**

Hay modelos especializados que pesan menos de 1 GB y corren en cualquier computador moderno. El caso más útil es la transcripción: herramientas como Handy, SuperWhisper o Wispr Flow instalan un modelo local —Nemotron Streaming 3.5 pesa unos 600 MB— que transcribe en vivo mientras dictas, entiende bien el español e incluso maneja acentos regionales. Cero costo por uso, cero latencia de red, cero datos enviados a un tercero.

Si tu objetivo es dejar de tipear, clasificar documentos o etiquetar contenido, empieza acá. Es IA local de verdad y no requiere comprar nada.

## Cómo empezar sin gastar un peso

La secuencia correcta invierte lo que hace todo el mundo. En vez de comprar el equipo y después ver qué le instalas:

1. **Instala un modelo chico especializado** (dictado o transcripción) en el computador que ya tienes. Vas a descubrir si la IA local te sirve para algo cotidiano.
2. **Prueba por API el modelo que crees que quieres correr en casa.** Con [OpenRouter](https://openrouter.ai) accedes a casi todos —incluidos los chinos— pagando centavos por prueba. Mide si ese modelo resuelve tu caso real.
3. **Calcula el punto de equilibrio.** Multiplica lo que pagas hoy en suscripciones por 24 meses y compáralo con el precio del equipo. Si el número no cierra y tu motivo no es gobernanza ni privacidad, ya tienes tu respuesta.
4. **Recién ahí, compra.** Y compra mirando las dos variables: cuánta memoria necesita el modelo que ya probaste, y qué velocidad te deja trabajar sin desesperarte.

Si llegas al paso 4, el stack habitual es un equipo con 128 GB de memoria unificada, [OpenCode](https://opencode.ai) o un agente de escritorio como [Hermes](/guias/hermes-agent/) encima, y el modelo local como cerebro. Y algo que conviene saber: puedes exponer ese equipo como recurso de red, para que un agente que corre en otra máquina use su capacidad cuando esté disponible.

## El error más común: culpar al modelo

Un cierre que ahorra dinero. Buena parte de lo que atribuimos al modelo es en realidad del **harness** — la herramienta que lo envuelve, con sus conectores, su manejo de contexto y su flujo de trabajo. Cuando alguien dice que Kimi K3 es extraordinario, probablemente lo esté probando con Kimi Code; el mismo modelo con otra herramienta puede rendir bastante peor.

Antes de concluir que necesitas otro modelo —o hardware nuevo para correrlo— revisa si el problema no está en la herramienta con la que lo estás usando. Es gratis comprobarlo, y es la razón más frecuente por la que una IA local decepciona.

---

**Lo hablamos en profundidad en el [episodio 18: Cuánto cuesta de verdad tener tu propia IA](/episodios/18-cuanto-cuesta-tener-tu-propia-ia/)**, con los precios, el hardware y la discusión completa entre los tres hosts.
