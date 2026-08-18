---
title: "Stripe compra OpenRouter y el modelo más barato gana"
episode: 20
season: 1
thumbnail: "/thumbnails/ep20.webp"
date: "2026-08-17"
duration: "51:19"
durationSeconds: 3079
youtube: "https://www.youtube.com/watch?v=CFhcVjH6DTk"
youtubeId: "CFhcVjH6DTk"
spotify: "https://open.spotify.com/episode/5PXxTw4H1Cx4g7LV9VTIRc"
description: "Stripe compró OpenRouter en efectivo y SpaceX se llevó Cursor en acciones: la consolidación llegó a la capa que usamos todos los días. En paralelo, un modelo open source de 27 mil millones de parámetros ya supera a un frontera de febrero, y el modelo más barato del stack de Cristian resultó ser el mejor. El episodio 20 cierra con la pregunta incómoda: ¿cómo te enteras de que tu agente dejó de funcionar?"
seoTitle: "Stripe compra OpenRouter y el modelo más barato gana | EP20"
seoDescription: "Qué significa que Stripe comprara OpenRouter, por qué un open source de 27B ya rinde como un frontera, cómo bajar de US$400 a US$50 semanales sin perder calidad, y cómo detectar que tu agente se cayó."
ogImage: "https://eslahoradeaprender.com/thumbnails/ep20.webp"
hosts:
  - name: "Cristian Tala"
    linkedin: "https://www.linkedin.com/in/ctala/"
  - name: "Diego Arias"
    linkedin: "https://www.linkedin.com/in/godiegoarias/"
  - name: "Rodrigo Rojo"
    linkedin: "https://www.linkedin.com/in/rodrigorojop/"
topics:
  - "Stripe compra OpenRouter: US$7.000 millones en efectivo, no en acciones"
  - "SpaceX se lleva Cursor por US$60.000 millones, 100% en acciones"
  - "Integración vertical y pagos agénticos: por qué la jugada tiene sentido"
  - "Qwen 3.8 open source de 27B ya supera a un modelo de frontera de febrero"
  - "Un gigabyte de RAM por cada mil millones de parámetros"
  - "El mejor modelo del stack de Cristian resultó ser el más barato"
  - "De US$400 a US$50 semanales en noticias sin bajar la calidad"
  - "Defuddle y Firecrawl: limpiar el contexto antes de pagarlo"
  - "LiteLLM para saber quién consume cuánto dentro de la empresa"
  - "Cuándo el hardware local retorna la inversión frente a las APIs"
  - "Cómo te enteras de que un agente dejó de funcionar"
  - "Uptime: 99,35% de Anthropic frente al 100% de un modelo liviano"
relatedEpisodes: [19, 18, 17, 15]
keywords:
  - "stripe compra openrouter que significa"
  - "qwen 3.8 open source local"
  - "cuanta ram necesito para un modelo de ia"
  - "como bajar el costo de las apis de ia"
  - "hardware local vs api de ia conviene"
  - "litellm rutear modelos en la empresa"
  - "como saber si mi agente de ia fallo"
  - "uptime anthropic openai comparacion"
  - "modelos livianos agenticos tool use"
  - "ley proteccion de datos chile ia diciembre"
keyTakeaways:
  - "El modelo más caro no es el mejor para cada tarea: el agente principal de Cristian corre con Qwen 3.7 Flash, el más barato de su stack, y le funciona mejor que los de frontera"
  - "Limpiar el contexto antes de mandarlo al modelo baja el costo hasta seis veces: convertir la página a Markdown reducido en vez de tragarse header, footer y botones"
  - "Un modelo open source de 27 mil millones de parámetros ya supera a un frontera de hace seis meses, y la regla para saber si te cabe es simple: un gigabyte de RAM por cada mil millones de parámetros"
  - "Si gastas US$800 al mes en APIs, un equipo local de US$6.000 se paga en seis o siete meses y deja de depender de que el proveedor esté arriba"
  - "Ponle una alerta a cada proceso automatizado: la mayoría se entera de que su agente murió porque se lo dice un cliente"
timestamps:
  - time: "00:01"
    seconds: 1
    label: "Episodio 20: Stripe compró OpenRouter y salió Qwen 3.8 open source"
  - time: "01:27"
    seconds: 87
    label: "Un open source de 27B que supera al frontera de febrero"
  - time: "02:41"
    seconds: 161
    label: "La regla: un giga de RAM por cada mil millones de parámetros"
  - time: "06:00"
    seconds: 360
    label: "Qué rompieron esta semana: skills, Hermes y computadores tomados"
  - time: "14:38"
    seconds: 878
    label: "El mejor modelo de su stack resultó ser el más barato"
  - time: "16:37"
    seconds: 997
    label: "Stripe, OpenRouter y Cursor: la ola de consolidación"
  - time: "20:37"
    seconds: 1237
    label: "Pagos agénticos: la wallet del agente y el cobro por consumo"
  - time: "22:15"
    seconds: 1335
    label: "De US$1.300 millones a US$7.000 millones en cinco meses, en efectivo"
  - time: "25:47"
    seconds: 1547
    label: "Las ideas no valen nada cuando construir es fácil"
  - time: "31:47"
    seconds: 1907
    label: "US$900 al mes en APIs contra un equipo local que se paga en siete meses"
  - time: "33:27"
    seconds: 2007
    label: "Modelos locales, compliance y la ley de datos que parte el 1 de diciembre"
  - time: "34:34"
    seconds: 2074
    label: "LiteLLM: saber quién consume cuánto dentro de la empresa"
  - time: "36:19"
    seconds: 2179
    label: "De US$400 a US$50 semanales sin bajar calidad"
  - time: "38:40"
    seconds: 2320
    label: "Cómo te enteras de que un agente dejó de funcionar"
  - time: "47:47"
    seconds: 2867
    label: "Uptime: 100% del modelo chico contra 99,35% del caro"
resources:
  - title: "OpenRouter"
    url: "https://openrouter.ai/"
    type: "tool"
    description: "El enrutador de modelos que compró Stripe: una sola cuenta para llamar a decenas de modelos sin veinte suscripciones."
  - title: "Stripe"
    url: "https://stripe.com"
    type: "other"
    description: "La plataforma de pagos que hizo la compra. No opera en Chile, pero sí en buena parte de los países hispanohablantes."
  - title: "Cursor"
    url: "https://cursor.com"
    type: "tool"
    description: "El editor con IA que SpaceX adquirió por US$60.000 millones, 100% en acciones."
  - title: "Qwen (Alibaba)"
    url: "https://huggingface.co/Qwen"
    type: "repo"
    description: "La familia de modelos abiertos de la que salió la versión de 27 mil millones de parámetros que comentan en el episodio."
  - title: "Defuddle"
    url: "https://github.com/kepano/defuddle"
    type: "repo"
    description: "Convierte una página web en Markdown limpio antes de mandarla al modelo. Rodrigo reporta hasta seis veces menos costo en ese paso."
  - title: "Firecrawl"
    url: "https://firecrawl.dev"
    type: "tool"
    description: "El crawler que Cristian corre en su propio VPS para devolver solo el contenido de la página, sin header ni footer."
  - title: "LiteLLM"
    url: "https://www.litellm.ai/"
    type: "tool"
    description: "Enruta modelos dentro de la empresa con un token por persona: sirve para saber quién consume cuánto antes de decidir."
  - title: "Granola"
    url: "https://www.granola.ai/"
    type: "tool"
    description: "Toma notas de reuniones sin entrar a la llamada: captura el audio del sistema. Rodrigo la usa para alimentar sus tareas y su CRM."
  - title: "Tactiq"
    url: "https://tactiq.io/"
    type: "tool"
    description: "La alternativa que usa el equipo de Diego por ser poco invasiva; también expone MCP."
  - title: "Dokploy"
    url: "https://dokploy.com/"
    type: "tool"
    description: "Gestor de contenedores Docker con plantillas editables. Cristian levanta varios Hermes concurrentes en un VPS chico."
  - title: "Coolify"
    url: "https://coolify.io/"
    type: "tool"
    description: "La alternativa que Cristian usaba antes de Dokploy para el mismo trabajo."
  - title: "Hermes (Nous Research)"
    url: "https://nousresearch.com"
    type: "tool"
    description: "El agente que los tres usan como mano derecha. Tiene aplicación de escritorio con tablero Kanban y plugins."
  - title: "NVIDIA Inception"
    url: "https://www.nvidia.com/en-us/startups/"
    type: "other"
    description: "El programa al que Cristian postuló por US$100.000 en créditos con el motor de verificación de Ecosistema Startup."
  - title: "Anthropic Status"
    url: "https://status.anthropic.com"
    type: "other"
    description: "El panel que revisaron en vivo: 99,35% de uptime reportado."
  - title: "OpenAI Status"
    url: "https://status.openai.com"
    type: "other"
    description: "El contraste del episodio: 99,94% en el API y 99,67% en el producto."
faq:
  - question: "¿Qué significa que Stripe haya comprado OpenRouter?"
    answer: "Que la capa de pagos se está metiendo en la infraestructura con la que trabajan los desarrolladores de IA. Para Rodrigo es la jugada de volverse infraestructura de lo que hacen los demás: si el botón de pago ya está integrado en medio mundo, agregar el enrutador de modelos cierra el círculo. Cristian lo lee como integración vertical clásica: OpenRouter probablemente era uno de los clientes que más dinero procesaba por Stripe, y al comprarlo ese margen pasa a ser propio. Se suma una tercera pata: los pagos agénticos, donde el agente compra y paga dentro de la misma red."
  - question: "¿Cuánta RAM necesito para correr un modelo open source en mi computador?"
    answer: "La regla rápida de Rodrigo es un gigabyte de RAM por cada mil millones de parámetros, aproximadamente. Un modelo de 27 mil millones de parámetros pide del orden de 27 GB, así que un equipo de 32 GB lo mueve y uno de 16 GB queda corto. Hay más variables —cuantización, ancho de banda de memoria, si hablas de una tarjeta de video o de memoria unificada— pero para decidir qué comprar, esa cuenta al ojo sirve."
  - question: "¿Conviene comprar hardware local en vez de pagar APIs?"
    answer: "Depende de cuánto gastas hoy. Cristian llega a US$800 o US$900 al mes en APIs entre Ecosistema Startup y la comunidad; contra ese gasto, un equipo de US$6.000 en el peor de los casos se paga en seis o siete meses. Para una persona ese plazo puede ser largo, para una empresa no lo es. El segundo argumento no es el costo: es dejar de depender de que el proveedor esté arriba, y el compliance de los datos que no quieres mandar a servidores de terceros."
  - question: "¿Cómo bajo el costo de mis agentes sin perder calidad?"
    answer: "Eligiendo el modelo por tarea en vez de usar el más caro para todo, y limpiando lo que le mandas. Cristian cambió el modelo que genera las noticias de Ecosistema Startup usando la data de su propio benchmark y pasó de unos US$400 semanales a unos US$50, sin bajar la calidad. Rodrigo suma la otra mitad: si mandas una página web completa, el modelo paga por el header, el footer y los botones. Convertirla antes a Markdown reducido puede bajar hasta seis veces ese consumo, y de paso alucina menos."
  - question: "¿Cómo me entero de que un agente dejó de funcionar?"
    answer: "Poniéndole una señal de vida. Rodrigo le pide a cada proceso automatizado que mande una confirmación periódica a un hilo de Telegram: no le avisa en el segundo exacto de la caída, pero le da tiempo de reacción. Sin eso, te enteras cuando revisas y las tareas de tres días no están, o peor, cuando te lo dice un cliente. Cristian lo vivió el mismo día de la grabación: un chatbot en la página de una firma de abogados dejó de responder porque el modelo que usaba fue deprecado, y ninguna de sus alertas estaba validando eso."
  - question: "¿Qué modelo conviene para tareas agénticas?"
    answer: "No necesariamente el más inteligente. Rodrigo destaca los modelos livianos entrenados desde el principio para ser agénticos, como Muse Glimmer de Meta o Gemini Flash 3.7: no compiten en razonamiento con Opus, GPT, Grok 4.6 o Kimi 3, pero eligen bien la herramienta, escriben en memoria e interactúan con otros sistemas. Y son más estables: en el panel de OpenRouter, Glimmer mostraba 100% de disponibilidad en tres días, porque detrás hay varios proveedores sirviéndolo."
---

El episodio 20 empieza con dos noticias que parecen de mundos distintos y terminan siendo la misma: Stripe compró OpenRouter en efectivo, y un modelo open source de 27 mil millones de parámetros ya supera a un frontera de hace seis meses. Entre medio, Cristian confiesa el hallazgo que le movió el piso: el mejor modelo de todo su stack resultó ser el más barato. Y al final llega la tarea incómoda para quien ya tiene procesos andando: ¿cómo te enteras de que se cayeron?

## Lo que vas a aprender

- Vas a entender qué compra realmente una plataforma de pagos cuando compra un enrutador de modelos, y por qué esto recién empieza
- Sabrás calcular al ojo si un modelo open source te cabe en el computador que ya tienes
- Vas a poder decidir si te conviene comprar hardware local o seguir pagando APIs, con la cuenta hecha
- Verás dos formas concretas de bajar la cuenta mensual sin bajar la calidad del resultado
- Y vas a salir con una tarea: ponerle una señal de vida a cada proceso que hoy corre solo

## ¿Qué significa que Stripe compre OpenRouter?

Stripe es la plataforma de pagos independiente más grande del mundo —no opera en Chile, pero sí en buena parte de los países hispanohablantes— y OpenRouter es la herramienta que muchos usan para enrutar modelos de IA sin mantener veinte suscripciones distintas. El fin de semana, la primera compró a la segunda. Y no es un caso aislado: el sábado se concretó la adquisición de Cursor por parte de SpaceX, US$60.000 millones íntegramente en acciones.

Para Rodrigo, la consolidación es el patrón, no la excepción: Spotify liberó la plataforma con la que codean con agentes internamente, Block —la empresa de Jack Dorsey— lanzó su propio espacio de trabajo con agentes, y Cloudflare lleva un año agregando cosas que uno no imaginaba dentro de Cloudflare.

> "No era esperado que Stripe fuera el que comprara OpenRouter, pero es una jugada que tiene sentido. Al final lo que están haciendo es ser infraestructura de lo que hacen los demás." — Rodrigo Rojo

Cristian lo lee desde el manual de finanzas corporativas: cuando eres tan grande que ya no puedes quitarle más clientes a la competencia, lo que queda es integrarse verticalmente. OpenRouter probablemente era una de las empresas que más dinero procesaba a través de Stripe; al comprarla, todo ese margen pasa a ser propio. Incluso pueden bajarle los márgenes para hacerla más competitiva y seguir ganando.

La tercera pata es la que más los entusiasma: los **pagos agénticos**. Rodrigo lo plantea como la segunda derivada —el agente que ya tiene la tarjeta conectada y compra el servicio sin salir de la red— y Cristian le da vuelta el foco hacia el lado del que vende: poner una API pública y que los agentes te paguen automáticamente por consumo, sin cotización, sin contrato, sin humano en el medio.

Un dato que Diego rescata y que ordena la escala: OpenRouter se había valorizado en US$1.300 millones hace unos meses. La negociación con Stripe partió en US$10.000 millones y cerró en US$7.000. Y a diferencia de la compra de Cursor, esta fue en efectivo.

> "Es plata para el bolsillo que se llevaron los emprendedores." — Cristian Tala

Su pronóstico para la región: de aquí a cinco años vamos a ver menos exits de startups y muchas más fusiones y adquisiciones. Y eso, dice, tiene que pasar para que circule dinero y se siga invirtiendo en emprendimiento.

## ¿Un open source de 27B ya reemplaza a un modelo de frontera?

Para tareas del día a día, cada vez más. La versión open source de Qwen 3.8 salió con 27 mil millones de parámetros y, según lo que discuten en el episodio, rinde mejor que un modelo de frontera de febrero de este año. La brecha entre abierto y cerrado ya no se mide en generaciones: se mide en meses.

La regla práctica para saber si te cabe la pone Rodrigo: **un gigabyte de RAM por cada mil millones de parámetros**, aproximadamente. Con eso, 27 mil millones de parámetros piden del orden de 27 GB, y ahí se entiende por qué Cristian se lamenta en vivo de haber comprado su MacBook con menos memoria de la que podría haber pagado. Rodrigo pagó el extra en su M4 Max, le dolió, y hoy corre modelos locales a una velocidad que solo su equipo con una 5090 le supera —y esa tarjeta, a cambio, tiene mucho menos memoria disponible.

> "Si tuvieras muy buen hardware local, hardware de consumidor, podrías correr modelos que eran tope de línea el año pasado." — Rodrigo Rojo

## ¿Conviene comprar hardware o seguir pagando APIs?

La cuenta que hace Cristian es directa: entre Ecosistema Startup y la comunidad puede llegar a gastar US$800 o US$900 al mes en APIs. Contra eso, un equipo local de US$6.000 en el peor de los casos se paga en seis o siete meses. Para una persona puede ser mucho; para una pyme que recupera su inversión en siete meses, no lo es.

Pero el argumento fuerte no es el ahorro, es la dependencia: dejar de estar sujeto a que el proveedor esté arriba. Y hay un tercero que Diego conoce de cerca desde el mundo corporativo: el compliance. En su equipo usan Claude para la mayoría del desarrollo, pero la revisión masiva de documentos de identidad corre en modelos locales, porque esa data no debería salir del computador. En Chile la ley de protección de datos entra en vigencia el 1 de diciembre, y eso vuelve la pregunta menos filosófica.

El consejo concreto de Cristian para las empresas que aún no saben si les conviene: monta **LiteLLM**, dale un token a cada persona y enruta todo por ahí. Antes de decidir si compras hardware o cambias de modelo, necesitas saber quién consume cuánto. Diego reconoce que su equipo gasta más de mil dólares mensuales, pero repartidos entre harta gente: sin esa data desagregada, la decisión se toma a ciegas.

## El mejor modelo de tu stack puede ser el más barato

Acá está el hallazgo que Cristian describe como un momento eureka. Él mantiene un benchmark propio precisamente porque no quiere pagar el modelo más caro del mundo para todo, y al revisar los resultados se encontró con que el modelo que mejor le funciona en su agente principal —el Hermes que corre en su VPS— es el más barato de todos los que probó: Qwen 3.7 Flash.

> "El mejor modelo que estoy ocupando en mi Hermes resultó ser el más barato." — Cristian Tala

El matiz importa: eso no significa que haga todas las tareas. Cuando toca redactar, entra el modelo de redacción. Pero para el agente que funciona como mano derecha todos los días, el barato gana. En el DGX Spark, además, usa Qwen 3.6 de 35 mil millones de parámetros para simular perfiles de cliente conversando en un chat y probar modelos de negocio.

El mismo criterio aplicado a producción dio el número más contundente del episodio: cambió el modelo que genera las noticias de Ecosistema Startup usando la data del benchmark y pasó de gastar hasta US$400 semanales a unos US$50. Sin bajar la calidad. El modelo que ganó no fue el que uno asumiría.

## ¿Cómo se baja el costo sin bajar la calidad?

Limpiando lo que le mandas al modelo. Rodrigo lo explica con el caso más común: cuando le pides a tu agente que lea una página web, se traga el header, el footer, los botones y todos los links. Pasar esa página por **Defuddle** —la librería de Kepano, el creador de Obsidian— para convertirla en un Markdown reducido con solo el contenido que importa puede bajar hasta seis veces el costo de ese paso.

Cristian hace lo propio con **Firecrawl** corriendo en su VPS, que le devuelve el Markdown del contenido en vez de la página entera. Y agrega el efecto secundario que nadie asocia al costo: si le das más información de la que necesita, el modelo termina alucinando. Hacerle la tarea más sencilla no solo sale más barato, sale mejor.

| Optimización | Qué hace | Efecto reportado |
|---|---|---|
| Elegir el modelo por tarea | Usar el barato donde alcanza y el caro donde importa | De US$400 a US$50 semanales en el pipeline de noticias |
| Limpiar el HTML antes de enviarlo | Convertir la página a Markdown reducido | Hasta 6× menos costo en ese paso |
| Crawler propio con Markdown | Devolver solo el contenido, no la página completa | Menos tokens y menos alucinación |
| Enrutar con LiteLLM | Token por persona y consumo medido | Data para decidir en vez de estimar al ojo |

## ¿Cómo te enteras de que tu agente dejó de funcionar?

Esta es la parte que casi nadie tiene resuelta. Rodrigo le pide a cada proceso automatizado que mande una señal de vida a un hilo de Telegram cada cierto tiempo. No le avisa en el instante exacto de la caída, pero le da tiempo de reacción. La semana pasada le sirvió: su flujo que transcribe reuniones con Granola, las clasifica y le crea tareas y oportunidades en su CRM se rompió porque OpenClaw se actualizó y, al reparar el proceso, lo enrutó dando una vuelta por Claude Code. Sin la alerta, se habría enterado días después, cuando notara que las tareas del miércoles no existían.

Cristian cierra con su propio golpe, del mismo día de la grabación: un chatbot en la página de una firma de abogados dejó de funcionar porque el modelo que usaba fue deprecado el día anterior. Ninguna de sus validaciones cubría ese caso, porque nunca pensó que pasaría.

El otro lado de la moneda es la disponibilidad del proveedor. Revisaron los paneles en vivo: Anthropic reportaba 99,35% de uptime, con 35 minutos caído el día anterior y 30 minutos de degradación parcial en el API. OpenAI marcaba 99,94% en el API y 99,67% en el producto. Y Muse Glimmer, el modelo liviano de Meta de 30 mil millones de parámetros, mostraba 100% en los últimos tres días en OpenRouter —redondo, no 99,99— porque detrás hay varios proveedores sirviéndolo.

Ahí está el argumento de Rodrigo sobre los modelos livianos entrenados desde el principio para ser agénticos, como Glimmer o Gemini Flash 3.7: no le ganan en inteligencia a Opus, GPT, Grok 4.6 o Kimi 3, pero eligen bien la herramienta e interactúan con otros sistemas. Para tareas chicas y medianas rinden, y no se caen.

> "Deja de depender de que el modelo caro esté funcionando." — Cristian Tala

## Lo que no vale nada hoy es la idea

Rodrigo plantea que va a haber más adquisiciones porque construir con IA bajó las barreras de entrada y hay más gente creando. Cristian lleva el argumento hasta el final: si cualquiera puede construir, la idea sola no vale nada; lo que vale es la persona capaz de llevarla a cabo. Diego lo aterriza con un caso real: una amiga le pidió ayuda con un proyecto convencida de que necesitaba financiamiento y un equipo de desarrolladores, y hoy la respuesta honesta era otra.

Si el proyecto necesita hardware, Cristian sugiere partir con una tarjeta de video de mil dólares antes de soñar con un equipo de cien mil, y Rodrigo recuerda que también puedes arrendar cómputo por horas y dar el salto al fierro propio cuando el negocio lo justifique. En esa línea, Cristian postuló el fin de semana a NVIDIA Inception buscando US$100.000 en créditos: no para publicar noticias, sino para el motor que hay detrás —extraer afirmaciones de los medios, verificarlas y poblar un directorio automáticamente con un corpus validado, 100% latino.

## Capítulos del episodio

- **00:01** — Episodio 20: Stripe compró OpenRouter y salió Qwen 3.8 open source
- **01:27** — Un open source de 27B que supera al frontera de febrero
- **02:41** — La regla: un giga de RAM por cada mil millones de parámetros
- **06:00** — Qué rompieron esta semana: skills, Hermes y computadores tomados
- **14:38** — El mejor modelo de su stack resultó ser el más barato
- **16:37** — Stripe, OpenRouter y Cursor: la ola de consolidación
- **20:37** — Pagos agénticos: la wallet del agente y el cobro por consumo
- **22:15** — De US$1.300 millones a US$7.000 millones en cinco meses, en efectivo
- **25:47** — Las ideas no valen nada cuando construir es fácil
- **31:47** — US$900 al mes en APIs contra un equipo local que se paga en siete meses
- **33:27** — Modelos locales, compliance y la ley de datos que parte el 1 de diciembre
- **34:34** — LiteLLM: saber quién consume cuánto dentro de la empresa
- **36:19** — De US$400 a US$50 semanales sin bajar calidad
- **38:40** — Cómo te enteras de que un agente dejó de funcionar
- **47:47** — Uptime: 100% del modelo chico contra 99,35% del caro

## Preguntas frecuentes

### ¿Qué significa que Stripe haya comprado OpenRouter?

Que la capa de pagos se está metiendo en la infraestructura con la que trabajan los desarrolladores de IA. Para Rodrigo es la jugada de volverse infraestructura de lo que hacen los demás. Cristian lo lee como integración vertical: OpenRouter probablemente era uno de los clientes que más dinero procesaba por Stripe, y al comprarlo ese margen pasa a ser propio. Y queda una tercera pata, los pagos agénticos, donde el agente compra y paga dentro de la misma red.

### ¿Cuánta RAM necesito para correr un modelo open source?

La regla rápida es un gigabyte de RAM por cada mil millones de parámetros, aproximadamente. Un modelo de 27 mil millones de parámetros pide del orden de 27 GB, así que un equipo de 32 GB lo mueve y uno de 16 GB queda corto. Hay más variables en juego —cuantización, ancho de banda de memoria, tarjeta de video contra memoria unificada— pero para decidir qué comprar, esa cuenta al ojo sirve.

### ¿Conviene comprar hardware local en vez de pagar APIs?

Depende de cuánto gastas hoy. Contra los US$800 o US$900 mensuales que llega a gastar Cristian en APIs, un equipo de US$6.000 se paga en seis o siete meses. Para una persona ese plazo puede ser largo; para una empresa no lo es. Y hay dos argumentos que no son de costo: dejar de depender de que el proveedor esté arriba, y el compliance de los datos que no quieres mandar a servidores de terceros.

### ¿Cómo bajo el costo de mis agentes sin perder calidad?

Eligiendo el modelo por tarea y limpiando lo que le mandas. Cristian cambió el modelo del pipeline de noticias con la data de su benchmark y pasó de US$400 semanales a unos US$50 sin bajar la calidad. Rodrigo aporta la otra mitad: si mandas la página web completa, pagas por el header, el footer y los botones. Convertirla antes a Markdown reducido puede bajar hasta seis veces ese consumo, y de paso el modelo alucina menos.

### ¿Cómo sé si mi agente dejó de funcionar?

Pídele una señal de vida periódica a un canal que revises, como un hilo de Telegram. No te avisa en el segundo exacto de la caída, pero te da tiempo de reacción. Sin eso, te enteras cuando notas que las tareas de tres días no existen o cuando te lo dice un cliente. Y agrega una validación por deprecación de modelo: a Cristian se le cayó un chatbot en producción justamente por eso.

### ¿Qué modelo conviene para tareas agénticas?

No necesariamente el más inteligente. Los modelos livianos entrenados desde el principio para ser agénticos —Muse Glimmer de Meta, Gemini Flash 3.7— eligen bien la herramienta, escriben en memoria e interactúan con otros sistemas, aunque no compitan en razonamiento con Opus, GPT, Grok 4.6 o Kimi 3. Y suelen ser más estables: Glimmer mostraba 100% de disponibilidad en tres días porque hay varios proveedores sirviéndolo.

## Recursos mencionados

**Plataformas y modelos**

- **[OpenRouter](https://openrouter.ai/)** — el enrutador que compró Stripe: una cuenta para llamar a decenas de modelos.
- **[Cursor](https://cursor.com)** — el editor con IA adquirido por SpaceX, 100% en acciones.
- **[Qwen](https://huggingface.co/Qwen)** — la familia abierta de Alibaba de donde sale el modelo de 27 mil millones de parámetros.

**Optimización de costos**

- **[Defuddle](https://github.com/kepano/defuddle)** — convierte la página web en Markdown limpio antes de pagarla en tokens.
- **[Firecrawl](https://firecrawl.dev)** — el crawler que Cristian corre en su VPS para devolver solo contenido.
- **[LiteLLM](https://www.litellm.ai/)** — enruta modelos con un token por persona y te dice quién consume cuánto.

**Operación y agentes**

- **[Hermes](https://nousresearch.com)** — el agente que los tres usan como mano derecha, con app de escritorio y tablero Kanban.
- **[Granola](https://www.granola.ai/)** — captura reuniones sin entrar a la llamada.
- **[Tactiq](https://tactiq.io/)** — la alternativa poco invasiva que usa el equipo de Diego.
- **[Dokploy](https://dokploy.com/)** y **[Coolify](https://coolify.io/)** — para levantar contenedores en un VPS sin pelear con el terminal.
- **[Anthropic Status](https://status.anthropic.com)** y **[OpenAI Status](https://status.openai.com)** — los paneles de uptime que revisaron en vivo.

**Episodios relacionados**

- [EP18 — Cuánto cuesta tener tu propia IA](/episodios/18-cuanto-cuesta-tener-tu-propia-ia) — la cuenta completa del hardware local.
- [EP15 — Qué modelo de IA usar para cada tarea](/episodios/15-fable-5-que-modelo-ia-usar-cada-tarea) — el criterio detrás del benchmark.
- [EP19 — Tu primer empleado digital cuesta US$20 al mes](/episodios/19-primer-empleado-digital-20-dolares-mes) — cuándo un agente y cuándo una automatización.

---

🌐 [eslahoradeaprender.com](https://eslahoradeaprender.com) · 🎧 [Spotify](https://open.spotify.com/show/7o7JR0Un1jc6wev0VjNm0C) · 📺 [YouTube](https://www.youtube.com/@EsLaHoraDeAprender_com)

_Accesibilidad: activa los subtítulos en el reproductor de YouTube para leer la conversación completa._
