---
term: "Alucinación"
aliases:
  - "Alucinación de IA"
  - "Alucinaciones de la IA"
  - "Hallucination"
date: "2026-11-17"
updatedAt: "2026-11-17"
description: "Una alucinación es un dato que un modelo de IA inventa y entrega con la misma seguridad que uno verdadero: una cifra, una cita o una fuente que no existe. Pasa en todos los modelos y se reduce con revisión por capas, nunca a cero."
seoTitle: "Alucinación en IA: qué es, por qué pasa y cómo reducirla"
seoDescription: "Qué es una alucinación de IA, por qué todos los modelos inventan datos y las capas de revisión que usamos para que el error no llegue a un cliente."
keywords:
  - "alucinaciones ia"
  - "que es una alucinacion en ia"
  - "como evitar alucinaciones ia"
  - "por que alucina la ia"
  - "alucinaciones ia ejemplos"
relatedEpisodes: [29, 23, 20, 15, 12]
relatedGuides:
  - "agentes-de-ia"
  - "n8n"
relatedGlossary:
  - "temperatura"
  - "agente-de-ia"
  - "computer-use"
  - "tool-use"
---

Una **alucinación** es un dato que un modelo de IA inventa y entrega con la misma seguridad que uno verdadero: una cifra, una cita, una fuente o una frase que nadie dijo. Pasa en todos los modelos. Se puede reducir mucho, pero no llega a cero.

## Por qué alucinan todos los modelos

Por cómo están construidos. En el [episodio 29](/episodios/29-alucinaciones-ia-como-evitarlas-nod-n8n/), Cristian propone imaginarlos como una base de datos con muchos vectores donde el modelo predice lo que puede venir después. Si le pides que sea creativo, te va a decir que dos más dos es pizza, y te lo va a decir como si fuera obvio.

Rodrigo agrega la otra mitad: la IA está hecha para ayudarte. Si le llevas una idea de negocio, le busca el ángulo aunque sea mala. Lo que la hace generativa deja siempre un espacio para inventar.

Su ejemplo de esa semana: en un video que editó, la transcripción decía "suscríbete al video" en una toma donde nadie lo decía. Cristian explica la causa: la mayoría de las transcripciones con que se entrenó el modelo debe terminar así.

## Cuándo aumenta el riesgo

| Situación | Qué pasó en el podcast | Episodio |
|---|---|---|
| Al modelo le falta información y la temperatura es alta | Cristian cambió el modelo de su sitio de noticias y mantuvo la temperatura en 0.7. Resultado: unas 24 horas de noticias con datos inventados. La bajó a 0.4-0.5 y el problema desapareció | [EP15](/episodios/15-fable-5-que-modelo-ia-usar-cada-tarea/) |
| Le das más información de la que necesita | Mandar la página web completa en vez del contenido limpio sale más caro y el modelo termina alucinando | [EP20](/episodios/20-stripe-openrouter-modelo-mas-barato-gana/) |
| No puede ver la página que consulta | La página carga sus datos con JavaScript, el agente entra sin JavaScript, no ve nada y rellena. Así se inventa jurisprudencia | [EP29](/episodios/29-alucinaciones-ia-como-evitarlas-nod-n8n/) |
| El proceso es largo y no hay un estándar escrito | "La IA alucina, entonces en procesos largos va a olvidar cómo lo estás haciendo a menos que tengas el estándar", dice Cristian | [EP26](/episodios/26-un-agente-muchas-skills-o-muchos-agentes/) |

La [temperatura](/glosario/temperatura/) tiene su propia entrada. Para el tercer caso, la salida es un navegador real o [computer use](/glosario/computer-use/).

## Cómo se reduce: revisión por capas

En el episodio 29, Diego contó que un dato inventado se coló en una postulación de su equipo y les costó una oportunidad de cientos de millones de pesos. Ya le pedían a Claude que revisara, incluso en otra conversación, y el error pasó igual. De esa conversación salen cuatro capas:

1. **Un agente revisor aparte, con el contexto vacío.** Cristian lo configura como experto en revisión, sin saber cómo se escribió el documento. Pedirle la revisión al mismo chat que lo escribió no sirve, porque usa el mismo contexto.
2. **Una skill de verificación.** La de Rodrigo revisa las fuentes y levanta una alerta cuando no encuentra una. No dice si el dato es real, pero avisa dónde mirar. Él recomienda una por etapa.
3. **Etapas con estado.** Si el trabajo no pasa el control de calidad, vuelve a edición. Cristian lleva ese estado en una base de datos para que ninguna etapa se salte.
4. **Una persona que conoce la materia, al final.** Si no conoces el tema, la alucinación pasa de largo.

La regla de Rodrigo para todo lo que sale hacia afuera: la IA verifica primero y una persona verifica al final.

## Cuándo conviene sacar al agente del medio

Si necesitas que algo se comporte igual todas las veces, la respuesta que dio Cristian en el [episodio 12](/episodios/12-ley-ia-agentes-autonomos-modelo-default/) es una automatización con pasos fijos que usa IA en puntos específicos. Así el riesgo queda acotado a esos pasos. Por eso él tiene más automatizaciones que agentes. La guía de [n8n](/guias/n8n/) explica la diferencia.

Otra línea es usar modelos que deciden en vez de escribir. En el [episodio 23](/episodios/23-jev-typesafe-probamos-noticias-reales/), Cristian probó Jev con 39 afirmaciones ya revisadas a mano. Acertó 36. De las 35 en que dijo estar seguro, se equivocó en una. Se equivoca, pero avisa cuándo duda.

## Lo que no hay que esperar

Que desaparezca. Rodrigo lo resume así en el episodio 29: el trabajo de reducir la alucinación es nuestro, con mejores prompts, un modelo más capaz para la tarea, más contexto, skills y reglas de verificación. "Pero nunca va a ser cero."

## Ver también

La guía de [agentes de IA](/guias/agentes-de-ia/) cubre cómo delegar trabajo sin perder el control. Para entender por qué un agente a veces no llega al dato: [tool use](/glosario/tool-use/) y [computer use](/glosario/computer-use/).
