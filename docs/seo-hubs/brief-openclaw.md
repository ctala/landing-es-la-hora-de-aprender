# Brief SEO — Hub `/guias/openclaw/`

> Producido por: agente SEO Content Distribution Strategist (2026-05-28)
> Funnel: B — signups a CAR Skool (AAS · LATAM `f970d84d`)
> Keyword target principal: `openclaw`
> Métrica norte: signups Skool con UTM `utm_campaign=hub_openclaw` > 0 en 90 días post-indexación
> Guardrails: no canibalizar EP01, EP04 ni EP05; 2 internal links a Skool máx; R1 — cero invención

---

## 1. Cluster de keywords expandido (DataForSEO)

### Datos de volumen (2026-05 — valores promedio mensual)

| Keyword | ES (vol.) | MX (vol.) | ES comp. | Pico reciente | Nota |
|---|---:|---:|---|---|---|
| **openclaw** | 22.200 | 8.100 | LOW (33) | Abr-2026: 60K ES / 22K MX | Head term. Curva explosiva desde nov-2025. |
| **openclaw que es** | 210 | n.d. | LOW (30) | Abr-2026: 720 ES | Informacional puro. H2 dedicado. |
| **openclaw vs claude code** | 40 | n.d. | LOW (6) | Abr-2026: 210 ES | Comparativa. H3 dentro del pillar. |
| **openclaw instalar** | 20 | n.d. | LOW (20) | — | Tutorial. Sección de instalación. |
| **openclaw agente ia** | 10 | n.d. | MEDIUM (49) | — | Long-tail, cubrir en intro. |

**Volumen total cluster ES+MX (head term):** ~30.300/mes promedio móvil (abr-2026: >82K entre ES+MX — en pleno pico de adopción).

**Tendencia:** openclaw tenía 0 búsquedas en oct-2025 y llegó a 60.500 en abr-2026 en ES. Curva de herramienta en adopción masiva. Es el segundo pico de adopción: el primero fue feb-mar 2026, el término sigue con volumen alto post-pico. Entrar con un pillar ahora captura el volumen de búsqueda de quienes llegan tarde a la primera ola.

---

## 2. SEO meta optimizado para CTR

```yaml
focusKeyword: "openclaw"
seoTitle: "OpenClaw: qué es, cómo instalarlo y cuándo usarlo (2026)"
# 55 chars — head keyword adelante, tres intenciones en una línea, gancho del año
seoDescription: "OpenClaw es el agente personalizado de IA que instala en tu máquina y trabaja contigo 24/7. Qué es, cómo funciona, VPS vs local, y cuándo elegirlo sobre Claude Code o Hermes."
# 176 chars — supera el límite; reducir a:
# "OpenClaw: el agente de IA que instala en tu máquina y trabaja contigo 24/7. Qué es, cómo funciona, VPS vs local, comparativa con Claude Code y Hermes."
# 152 chars — perfecto
```

---

## 3. Outline H1 + jerarquía H2/H3

```
H1: OpenClaw: qué es, cómo instalarlo y cuándo usarlo

  H2: ¿Qué es OpenClaw?
    H3: Por qué no es lo mismo que ChatGPT o Claude.ai
    H3: El mayordomo, no el chatbot: la analogía correcta

  H2: ¿Cómo funciona OpenClaw?
    H3: El cerebro (LLM) y el harness: cómo se separan las capas
    H3: Skills, memoria y herramientas: lo que lo vuelve útil
    H3: VPS vs computador físico: cuándo usar cada uno

  H2: ¿Cuánto cuesta usar OpenClaw?
    H3: El problema con la membresía Max de Anthropic
    H3: Qué alternativas de cerebro funcionan hoy (MiniMax, Qwen, Hermes)

  H2: OpenClaw vs Claude Code: cuándo elegir cada uno
    H3: Lo que Claude Code hace mejor (el harness directo)
    H3: Lo que OpenClaw hace mejor (la capa generalista)
    H3: La mezcla híbrida que recomienda Rodrigo

  H2: OpenClaw vs Hermes: por qué la gente está migrando
    H3: Por qué Hermes superó a OpenClaw en instalaciones (EP13, EP14)
    H3: La función dreaming de Hermes
    H3: Cuándo tiene sentido seguir con OpenClaw

  H2: ¿Qué pasa cuando OpenClaw se cae?
    H3: La lección de depender de un solo agente
    H3: Documentar tu way of work: la única estrategia que escala

  H2: Cómo instalar OpenClaw paso a paso
    H3: Requisitos previos
    H3: Instalación en VPS o servidor local
    H3: Primera configuración y conexión al LLM

  H2: OpenClaw en la práctica: lo que aprendimos usando en producción
    H3: Los tres bots de los hosts: Nyx, Rosita y Sheldon
    H3: ¿Cuándo no usar OpenClaw?

  H2: Preguntas frecuentes sobre OpenClaw

  CTA final
```

---

## 4. Body draft completo

---

### OpenClaw: qué es, cómo instalarlo y cuándo usarlo

OpenClaw es el agente de IA personalizado que instala directamente en tu máquina o servidor — no en la nube de otra empresa, sino en la tuya — y desde ahí accede a tus herramientas, archivos, APIs y flujos de trabajo. No es un chatbot con ventana de contexto. Es un agente que tiene las llaves de tu casa.

En el podcast *Es la Hora de Aprender* llegamos a OpenClaw en el primer episodio y desde entonces es el hilo conductor de la mayoría de las conversaciones técnicas: Cristian tiene a Nyx, Rodrigo tenía a Sheldon, Diego mató y revivió tres bots distintos. Esta guía recoge lo que aprendimos usando OpenClaw en producción durante meses, incluyendo cuándo dejó de ser la elección correcta.

---

## ¿Qué es OpenClaw?

OpenClaw es un framework de agente personalizado de código abierto. Instalas una instancia en un servidor o computador, le conectas un LLM (Claude, Gemini, GPT, modelos locales vía Ollama), y desde ahí el agente puede ejecutar acciones reales: editar tu WordPress, manejar tu CRM, responder mensajes, procesar archivos, hacer llamadas a APIs externas, recordar instrucciones entre sesiones y aprender de cómo trabajas.

El proyecto lo creó el desarrollador austríaco Peter Steinberger en noviembre de 2025. Empezó como Clawdbot, se renombró a Moltbot por reclamo de trademark de Anthropic, y tres días después quedó como OpenClaw. En febrero de 2026, Steinberger se sumó a OpenAI y dejó el proyecto bajo la tutela de una fundación sin fines de lucro. En GTC 2026, Jensen Huang lo mencionó en su keynote y presentó NemoClaw, la versión NVIDIA para empresas. Andrej Karpathy lo bautizó públicamente: los agentes con "garras" que acceden a archivos locales y ejecutan tareas son *"los Claws"* (EP05).

### Por qué no es lo mismo que ChatGPT o Claude.ai

ChatGPT y Claude.ai son aplicaciones web sobre modelos cerrados. Escribes, el modelo responde, copias la respuesta. No tocan tu sistema de archivos, no ejecutan acciones reales en tu ambiente, no persisten memoria entre sesiones a menos que actives funciones específicas.

OpenClaw es otra capa. No es el modelo — es el harness que envuelve al modelo y lo convierte en un operador de tu entorno: tiene acceso a tus carpetas, a tus credenciales seleccionadas, a tus APIs, y puede ejecutar código en tu sistema. La diferencia es la misma que entre hablar con alguien de lo que harías y contratar a alguien que lo hace.

### El mayordomo, no el chatbot: la analogía correcta

Rodrigo Rojo lo comparó con Alfred, el mayordomo de Batman: alguien proactivo que tiene las llaves de la casa, conoce el contexto y se anticipa a lo que vas a necesitar. La analogía que funciona no es la del chatbot mejorado — es la del asistente que ya sabe cómo funciona tu operación y actúa sin que tengas que explicarle todo cada vez (EP01).

---

## ¿Cómo funciona OpenClaw?

### El cerebro (LLM) y el harness: cómo se separan las capas

OpenClaw tiene dos partes que conviene entender por separado:

- **El cerebro** es el LLM que usas como motor: Claude Opus/Sonnet, GPT-5.5, Gemini, MiniMax, Qwen, o modelos locales corriendo con Ollama. El cerebro determina la calidad de razonamiento, el uso de herramientas, y cómo maneja las instrucciones. Es la parte que pagas (o no, si corres modelos locales).

- **El harness** es la capa de OpenClaw: el framework que conecta el cerebro con tus herramientas, le da acceso a archivos, mantiene la memoria entre sesiones, gestiona los canales de comunicación (Telegram, Discord, chat web) y ejecuta las acciones. El harness define lo que el cerebro puede hacer.

El insight clave del podcast: cambiar de cerebro sin cambiar el harness te da resultados distintos. Cuando Anthropic dejó de permitir el uso del plan Max con agentes externos, OpenClaw perdió a Opus como cerebro — y nunca volvió a rendir igual para muchos usuarios (EP13).

### Skills, memoria y herramientas: lo que lo vuelve útil

Las **skills** son habilidades reutilizables que le enseñas al agente: instrucciones específicas de cómo quieres que maneje ciertos tipos de tareas, con archivos de contexto y templates. Rodrigo pasó un fin de semana entero *skillificando* todo — conectar Granola (su herramienta de notas de reuniones) y enseñarle al agente a accionar diferente según el tipo de sesión (clase, prospección, brainstorming). Una vez armado, son dos clics (EP13).

La **memoria persistente** es lo que diferencia a OpenClaw de una sesión de chat normal: recuerda las instrucciones que le diste en sesiones anteriores, los patrones que aprendió de tu forma de trabajar, y las reglas de negocio que le definiste.

Las **herramientas** son los conectores a servicios externos: tu CRM, tu WordPress, tus APIs, Google Calendar, Notion, Todoist. OpenClaw accede a lo que le das acceso — nada más, nada menos. Cristian lo usó para reemplazar High Level CRM (USD 297/mes), Mailerlite (USD 185/mes) y varios SaaS más, ahorrando ~USD 1.500 mensuales en la primera semana (EP01).

### VPS vs computador físico: cuándo usar cada uno

La decisión que más pregunta genera en la comunidad y que Cristian explicó con precisión en EP01:

| Escenario | Elección | Costo aproximado |
|---|---|---|
| Quieres modelos locales por privacidad total | Mac Mini 24 GB RAM mínimo (nunca 8 GB) | USD 700–1.200 una vez |
| Quieres escalar a producción barato | VPS + suscripción LLM | USD 6–40/mes |
| Separar desarrollo de producción | Múltiples VPS | USD 18+/mes |
| Presupuesto cero de hardware | PC o servidor viejo con Linux | USD 0 si ya lo tienes |

La regla que Cristian usa: VPS para producción y flexibilidad, máquina física solo cuando la data no puede salir del dispositivo. Si compras hardware, **mínimo 24 GB de RAM** — un Mac Mini de 8 GB es caro y no sirve para correr nada útil (EP01).

---

## ¿Cuánto cuesta usar OpenClaw?

OpenClaw como framework es gratis y de código abierto. El costo viene del LLM que uses como cerebro.

### El problema con la membresía Max de Anthropic

En marzo de 2026, Anthropic mandó un correo avisando que la suscripción Max de USD 200/mes dejaba de cubrir el uso de Opus y Sonnet desde agentes externos como OpenClaw. La explicación oficial: sus sistemas están optimizados para Claude Code y Claude.ai, no para agentes externos que mantienen sesiones largas con múltiples tool calls.

El impacto en números: antes era USD 200/mes para uso ilimitado con OpenClaw. Después, pagando por token directamente con el mismo volumen de uso, el costo saltó a ~USD 100/día — aproximadamente 15 veces más caro al mes (EP08). Eso hizo que muchos usuarios buscaran alternativas de cerebro.

### Qué alternativas de cerebro funcionan hoy (MiniMax, Qwen, Hermes)

Cuatro opciones probadas en el podcast para usar como cerebro de OpenClaw sin Anthropic:

| Modelo | Plataforma | Costo aproximado | Para qué conviene |
|---|---|---|---|
| **MiniMax 2.7** | Suscripción propia | USD 40/mes (plan rápido) | Buen uso de herramientas, bajo consumo de tokens. Default de Diego. |
| **Qwen 3.5** | OpenRouter | ~100x más barato que Sonnet | Excelente tool use. Bug: con modo thinking activado no recibe la lista de herramientas. |
| **Gemma 26B** | Local (Ollama) | USD 0 (hardware ya pagado) | Privacidad total. Rodrigo lo corre en un mini-PC de USD 1.000 a 15 tokens/seg. |
| **Hermes (Nous Research)** | Suscripción propia | Varía | La migración que Cristian y Rodrigo hicieron en EP13-14. Ve la sección siguiente. |

La conclusión operativa de los hosts: no existe reemplazo 1:1 de Opus. Lo que existe es una estrategia de modelos mezclados — modelo caro para razonamiento crítico, modelo barato para iteración rutinaria (EP08).

---

## OpenClaw vs Claude Code: cuándo elegir cada uno

Esta es la comparativa más pedida por quienes están armando su stack en 2026.

### Lo que Claude Code hace mejor (el harness directo)

Claude Code habla directamente al modelo con un harness minimalista y opinionado, orientado a desarrollo de software. Cuando Rodrigo pasó sus agentes de OpenClaw a Claude Code en EP04, funcionaron notablemente mejor usando los mismos modelos por detrás. La explicación: Claude Code es más *tight* — menos capas intermedias entre el modelo y la tarea.

Para tareas específicas donde no necesitas integraciones externas complejas, Claude Code tiende a rendir más que OpenClaw por ese minimalismo.

### Lo que OpenClaw hace mejor (la capa generalista)

OpenClaw suma flexibilidad que Claude Code no tiene por diseño: conectores a Telegram y Discord sin tocar código, gestión de múltiples canales en paralelo, skills modulares reutilizables, y la posibilidad de usarlo sin saber programar. Si quieres un agente que responda en WhatsApp, procese reuniones de Granola, y actualice tu CRM en el mismo flujo, OpenClaw te lo da sin construir toda la infraestructura desde cero.

### La mezcla híbrida que recomienda Rodrigo

La jugada que Rodrigo describió en EP04 y que varios adoptaron: **OpenClaw como orquestador principal** que coordina, con Claude Code ejecutando las tareas donde el harness directo saca más rendimiento. Cada capa en su rol, sin forzar que una herramienta haga lo que no hace bien.

---

## OpenClaw vs Hermes: por qué la gente está migrando

### Por qué Hermes superó a OpenClaw en instalaciones (EP13, EP14)

En la semana del EP13, Hermes Agent de Nous Research superó a OpenClaw en instalaciones. La razón principal que reportaron Cristian y Rodrigo: Hermes es más estable con los modelos actuales. Desde que Anthropic bloqueó el uso de Opus con OpenClaw, el agente perdió su mejor cerebro. Hermes, en cambio, mantiene mejor rendimiento con alternativas como GPT-5.5 y MiniMax.

Rodrigo migró sus dos agentes principales a Hermes: uno tipo mayordomo (su Alfred) que procesa lo que llega, convierte notas de reunión en tareas y arma propuestas; y uno de research local en su DGX Spark con modelos abiertos (EP14).

### La función dreaming de Hermes

La característica que más entusiasma a los usuarios de Hermes: al final del día, el agente revisa los logs de las conversaciones e interacciones y propone mejoras a las skills según los patrones que detectó. Aprende de cómo trabajas de forma sistemática, no solo cuando le explicas algo explícitamente. Rodrigo lo destacó en EP14 como la razón principal por la que no volvería a OpenClaw.

### Cuándo tiene sentido seguir con OpenClaw

- Si ya tienes un setup productivo con OpenClaw y funciona, el costo de cambio no se justifica solo por moda.
- Si usas MiniMax o Qwen como cerebro y funciona bien, la diferencia con Hermes puede ser marginal.
- Si necesitas integraciones con Discord o Telegram que ya tienes configuradas, OpenClaw sigue siendo la opción con más documentación comunitaria.

---

## ¿Qué pasa cuando OpenClaw se cae?

### La lección de depender de un solo agente

En EP07, Cristian confesó que se había "casado con Anthropic": todo su flujo dependía de Claude y un día de caída fue un día improductivo. La misma lección aplica a OpenClaw: si tu operación entera depende de una instancia de agente sin respaldo, cualquier interrupción — un servidor caído, una actualización rota, un cambio en la API del LLM — paraliza todo.

El SLA real de Claude.ai en los últimos 90 días era ~98%, y Claude Code tenía errores parciales casi diarios (EP08). Eso es ~14 horas de downtime mensual para el servicio web, más interrupciones parciales en el API.

Las tres capas de contingencia que recomendaron los hosts:
1. Documentar todo el setup en formato que otro agente pueda leer (Markdown plano, Obsidian).
2. Tener un segundo cerebro configurado para cambiar en minutos cuando el primero falla.
3. Saber qué tareas puedes hacer sin agente sin que sea catastrófico.

### Documentar tu way of work: la única estrategia que escala

Rodrigo llevaba dos "reencarnaciones" de Sheldon antes de EP08. Su conclusión: la única forma de migrar sin perder meses es documentar todo en formatos livianos que cualquier agente pueda leer. Cuatro cosas en Markdown plano (EP08):

1. Tu *way of work* — cómo abordas las tareas habituales.
2. Las herramientas que usas y por qué.
3. Tus reglas de negocio internas — criterios editoriales, tono, políticas de respuesta.
4. Las integraciones activas — qué servicios externos tocas, con qué credenciales, qué hacen.

Si tu agente puede leer esos cuatro archivos, puedes cambiar de OpenClaw a Hermes, de Hermes a lo que venga, en un fin de semana en lugar de dos meses.

---

## Cómo instalar OpenClaw paso a paso

### Requisitos previos

- Un servidor o computador con acceso a terminal (VPS de Linux, Mac, mini-PC con Linux, Raspberry Pi).
- Una cuenta en un proveedor de LLM: Anthropic, OpenAI, Google, MiniMax, o modelos locales vía Ollama.
- Conocimientos básicos de terminal (saber ejecutar comandos, editar archivos de configuración).

No necesitas saber programar, pero necesitas tolerancia para romper cosas y buscar la solución. Diego, Diego mató y revivió tres bots distintos antes de que el primero funcionara bien (EP01).

### Instalación en VPS o servidor local

La documentación oficial de OpenClaw vive en [openclaw.ai](https://openclaw.ai). El proceso general:

```bash
# Clonar el repositorio
git clone https://github.com/openclaw-ai/openclaw.git
cd openclaw

# Instalar dependencias (requiere Node.js o Python según la versión)
npm install  # o pip install -r requirements.txt

# Configurar el archivo .env con las credenciales del LLM
cp .env.example .env
# Editar .env con tu API key del LLM elegido
```

Después de la configuración inicial, arrancas el agente y lo configuras desde su interfaz web o desde el canal de Telegram/Discord que hayas elegido.

### Primera configuración y conexión al LLM

El primer paso después de levantar la instancia: conectar el cerebro. Dependiendo del LLM:

- **MiniMax:** obtén tu API key en minimax.io y agrégala en el .env.
- **Qwen / modelos abiertos:** usa [OpenRouter](https://openrouter.ai/) como proxy unificado.
- **Modelos locales:** instala [Ollama](https://ollama.com/) en la misma máquina, descarga el modelo (ej. `ollama pull gemma:26b`), y apunta OpenClaw a `localhost:11434`.

La regla de Cristian para el primer setup: empieza con un modelo barato (Sonnet o MiniMax) para la configuración inicial. Una vez que el harness funciona, puedes subir al modelo que quieras sin reconfigurar todo.

---

## OpenClaw en la práctica: lo que aprendimos usando en producción

Esta es la diferencia entre una guía que describe la documentación oficial y una que sale de usarlo durante meses.

### Los tres bots de los hosts: Nyx, Rosita y Sheldon

En EP01, Cristian llevaba 21 días con Nyx funcionando, Diego ya había reiniciado tres veces su bot, y Rodrigo tenía a Sheldon respondiendo en grupos de WhatsApp mientras él no estaba. Los tres llegaron a OpenClaw por caminos distintos y con casos de uso distintos — y esa variedad fue intencional para cubrir el espectro de founder solo a empresa chica.

Cristian usó OpenClaw para reemplazar su stack de USD 1.500/mes en SaaS en una semana. Diego lo usó para automatizar procesos internos de una empresa. Rodrigo lo usó para tener un asistente de propuestas comerciales que redujo de días a dos clics el tiempo de generación.

En EP14, Cristian migró por completo a Hermes y reconoció sin nostalgia: sin el modelo correcto de motor, OpenClaw va a fallar. Pero la metodología — agente con skills modulares, memoria persistente, canales de comunicación conectados — es la que sigue usando, independientemente del framework.

### ¿Cuándo no usar OpenClaw?

- Cuando necesitas un comportamiento 100% consistente y predecible: usa una automatización determinista (n8n, Make) en su lugar. Los agentes alucinan; si no puedes tolerar variación en el output, hazlo determinístico (EP12).
- Cuando el LLM de tu elección no rinde bien con el harness de OpenClaw — si Claude Code da mejores resultados para tu tarea con el mismo modelo, usa Claude Code.
- Cuando el overhead de setup y mantenimiento supera el valor que te da. Diego instaló OpenClaw en una empresa, se rompió, y se enteró tres semanas después porque nadie lo cuidaba (EP14). Si no tienes a alguien técnico que lo mantenga, evalúa alternativas más empaquetadas.

---

## Preguntas frecuentes sobre OpenClaw

**¿OpenClaw es gratis?**
El framework es gratis y de código abierto. El costo viene del LLM que uses como cerebro: MiniMax parte en USD 20/mes, Qwen via OpenRouter puede costar menos de un dólar al día con uso moderado, modelos locales con Ollama son gratuitos si ya tienes el hardware.

**¿Necesito saber programar para instalar OpenClaw?**
No necesitas programar, pero sí entender conceptos básicos: qué es un terminal, cómo editar un archivo de configuración, qué es una API key. La propia herramienta guía el setup, y puedes pedirle a Claude Code o al mismo agente que te ayude a instalarla. Lo que sí necesitas es tolerancia para equivocarte varias veces antes de tener algo estable.

**¿Cuál es la diferencia entre OpenClaw y n8n?**
n8n es determinístico: input A siempre genera output B. OpenClaw es útil para tareas con ambigüedad, donde se requiere criterio: resumir reuniones en el contexto de tu negocio, priorizar tareas según tu calendario, generar contenido con tu voz editorial. Para procesos lineales y repetitivos, n8n sigue siendo la mejor opción. Los dos son complementarios, no competidores (EP01).

**¿OpenClaw funciona en Windows?**
Funciona mejor en Linux y macOS. Para Windows se recomienda usar WSL2 (Windows Subsystem for Linux) para tener un entorno Linux dentro de Windows. Un VPS de Linux es la alternativa más limpia si no quieres lidiar con WSL.

**¿Por qué OpenClaw dejó de rendir para algunos usuarios en 2026?**
Porque Anthropic dejó de cubrir el uso de Opus y Sonnet desde agentes externos con el plan Max. El framework sigue funcionando, pero el cerebro más potente (Opus) pasó a costar ~15x más al mes por la vía de API directa. Quienes migraron a MiniMax, Qwen o Hermes como cerebro reportan resultados variables — la calidad del agente depende tanto del harness como del modelo (EP08, EP13).

**¿Es mejor OpenClaw o Hermes Agent?**
Depende del momento. A fines de 2025 y principios de 2026, OpenClaw con Opus era la combinación ganadora. En EP13 (mayo 2026), Hermes superó a OpenClaw en instalaciones y tanto Cristian como Rodrigo migraron. La función dreaming de Hermes (que aprende de los logs del día) es una ventaja concreta que OpenClaw no tiene. Si estás empezando hoy, mira los dos antes de elegir.

---

## Recursos mencionados en el podcast

Los episodios donde más se habló de OpenClaw:

- [EP01 — OpenClaw y el futuro del trabajo](/episodios/01-openclaw-futuro-trabajo/) — El episodio inaugural: qué es, VPS vs local, automatizar lo que duele, y el impacto social que viene.
- [EP04 — Tu empresa va a tener más agentes que empleados](/episodios/04-agentes-vs-empleados/) — Comparativa OpenClaw vs Claude Code, el harness, y la mezcla híbrida.
- [EP05 — OpenClaw, agentes IA y estrategia empresarial](/episodios/05-openclaw-agentes-estrategia/) — El contexto como diferencial competitivo, qué modelo usar en cada etapa, y por qué OpenClaw se volvió una categoría.
- [EP08 — Crisis Anthropic: alternativas a Claude](/episodios/08-crisis-anthropic-modelos-alternativos-ia-local/) — Por qué cambió el costo del cerebro y qué usar en su lugar.
- [EP13 — Karpathy a Anthropic](/episodios/13-karpathy-anthropic-fichaje-rompe-ia/) — La migración de OpenClaw a Hermes y por qué.
- [EP14 — Agentes de IA: ¿uno por persona o por equipo?](/episodios/14-agentes-ia-empresa-uno-por-persona-o-equipo/) — El veredicto final sobre OpenClaw y el debate agente personal vs temático.

---

## El Curso de IA con Agentes en CAR

Si quieres construir tu primer agente de forma estructurada — no solo instalar OpenClaw y ver qué pasa, sino entender la arquitectura, elegir el cerebro correcto y armar skills que funcionen en producción — el curso *Agentes IA: Starter Kit* está en la comunidad Cágala, Aprende, Repite.

Es el mismo stack que usan los hosts del podcast. Lo ves, lo copias, lo adaptas a tu contexto. CAR es educación: nadie te arma el flujo a medida.

---

## 5. Internal-linking spec

### Episodios que linkean IN al hub (anchor text sugerido)

| Episodio | Anchor text | Dónde colocarlo |
|---|---|---|
| EP01 | "guía completa de OpenClaw" | Al final del body, bloque "Tema relacionado" |
| EP04 | "cuándo usar OpenClaw vs Claude Code" | Al final del body |
| EP05 | "estrategia de agentes con OpenClaw" | Al final del body |
| EP13 | "por qué migramos de OpenClaw a Hermes" | Al final del body |
| EP14 | "agente personal vs agente temático" | Al final del body |

### Links OUT del hub

| Destino | Anchor text sugerido | Sección |
|---|---|---|
| `/episodios/01-openclaw-futuro-trabajo/` | "EP01 — OpenClaw y el futuro del trabajo" | Sección intro + recursos |
| `/episodios/04-agentes-vs-empleados/` | "EP04 — más agentes que empleados" | Sección comparativa + recursos |
| `/episodios/05-openclaw-agentes-estrategia/` | "EP05 — estrategia empresarial con agentes" | Sección estrategia + recursos |
| `/episodios/08-crisis-anthropic-modelos-alternativos-ia-local/` | "EP08 — crisis Anthropic y alternativas" | Sección costo cerebro + recursos |
| `/episodios/13-karpathy-anthropic-fichaje-rompe-ia/` | "EP13 — Karpathy a Anthropic" | Sección vs Hermes + recursos |
| `/episodios/14-agentes-ia-empresa-uno-por-persona-o-equipo/` | "EP14 — agentes por persona o por equipo" | Sección práctica + recursos |
| Hub `/guias/hermes-agent/` | "Hermes Agent" | Sección vs Hermes |
| Hub `/guias/claude-code/` | "Claude Code" | Sección comparativa |
| Hub `/guias/agentes-de-ia/` | "qué son los agentes de IA" | Sección qué es + intro |
| Hub `/guias/n8n/` | "n8n para automatizaciones" | Sección cuándo no usar OpenClaw |

---

## 6. Funnel CTA

### Texto del bloque CTA

```
El Curso de IA con Agentes en CAR

Si quieres construir tu primer agente de forma estructurada — no solo instalar
OpenClaw y ver qué pasa, sino entender la arquitectura, elegir el cerebro correcto
y armar skills que funcionen en producción — el curso Agentes IA: Starter Kit está
en la comunidad Cágala, Aprende, Repite.

Es el mismo stack que usan los hosts del podcast. Lo ves, lo copias, lo adaptas a
tu contexto. CAR es educación: nadie te arma el flujo a medida.

[Ver el curso de agentes →]
```

**URL con UTM:**
```
https://www.skool.com/cagala-aprende-repite/classroom/f970d84d?utm_source=eslahoradeaprender&utm_medium=organic&utm_campaign=hub_openclaw
```

---

## 7. Frontmatter spec

```yaml
---
title: "OpenClaw: qué es, cómo instalarlo y cuándo usarlo"
date: "2026-05-28"
updatedAt: "2026-05-28"
description: "OpenClaw es el agente de IA que instala en tu máquina y trabaja contigo 24/7. Qué es, cómo funciona, VPS vs local, comparativa con Claude Code y Hermes, y por qué la gente está migrando."
seoTitle: "OpenClaw: qué es, cómo instalarlo y cuándo usarlo (2026)"
seoDescription: "OpenClaw: el agente de IA que instala en tu máquina y trabaja contigo 24/7. Qué es, cómo funciona, VPS vs local, y comparativa con Claude Code y Hermes. Guía práctica 2026."
focusKeyword: "openclaw"
keywords:
  - "openclaw"
  - "openclaw que es"
  - "openclaw vs claude code"
  - "openclaw instalar"
  - "openclaw agente ia"
  - "openclaw hermes alternativa"
  - "agente ia personalizado"
  - "openclaw vps servidor"
relatedEpisodes: [1, 4, 5, 8, 13, 14]
relatedGuides:
  - "claude-code"
  - "hermes-agent"
  - "agentes-de-ia"
  - "n8n"
funnel:
  type: "course"
  label: "Agentes IA: Starter Kit (CAR)"
  cta: "Si quieres construir tu primer agente de forma estructurada — no solo instalar OpenClaw y ver qué pasa, sino entender la arquitectura, elegir el cerebro correcto y armar skills que funcionen en producción — el curso Agentes IA: Starter Kit está en la comunidad Cágala, Aprende, Repite. Lo ves, lo copias, lo adaptas. CAR es educación: nadie te arma el flujo a medida."
  ctaButton: "Ver el curso de agentes →"
  url: "https://www.skool.com/cagala-aprende-repite/classroom/f970d84d?utm_source=eslahoradeaprender&utm_medium=organic&utm_campaign=hub_openclaw"
faq:
  - question: "¿OpenClaw es gratis?"
    answer: "El framework es gratis y de código abierto. El costo viene del LLM que uses como cerebro: MiniMax parte en USD 20/mes, Qwen via OpenRouter puede costar menos de un dólar al día con uso moderado, modelos locales con Ollama son gratuitos si ya tienes el hardware."
  - question: "¿Necesito saber programar para instalar OpenClaw?"
    answer: "No necesitas programar, pero sí entender conceptos básicos: qué es un terminal, cómo editar un archivo de configuración, qué es una API key. Lo que sí necesitas es tolerancia para equivocarte varias veces antes de tener algo estable."
  - question: "¿Cuál es la diferencia entre OpenClaw y n8n?"
    answer: "n8n es determinístico: input A siempre genera output B. OpenClaw es útil para tareas con ambigüedad, donde se requiere criterio: resumir reuniones en tu contexto, priorizar tareas, generar contenido con tu voz editorial. Para procesos lineales y repetitivos, n8n sigue siendo mejor. Son complementarios."
  - question: "¿Por qué OpenClaw dejó de rendir para algunos usuarios en 2026?"
    answer: "Porque Anthropic dejó de cubrir el uso de Opus y Sonnet desde agentes externos con el plan Max. El framework sigue funcionando, pero el cerebro más potente pasó a costar ~15x más al mes. Quienes migraron a MiniMax, Qwen o Hermes como cerebro reportan resultados variables."
  - question: "¿Es mejor OpenClaw o Hermes Agent?"
    answer: "Depende del momento. En EP13 (mayo 2026), Hermes superó a OpenClaw en instalaciones y tanto Cristian como Rodrigo migraron. La función dreaming de Hermes (que aprende de los logs del día) es una ventaja concreta. Si estás empezando hoy, mira los dos antes de elegir."
  - question: "¿OpenClaw funciona en Windows?"
    answer: "Funciona mejor en Linux y macOS. Para Windows se recomienda usar WSL2. Un VPS de Linux es la alternativa más limpia si no quieres lidiar con la configuración de WSL."
---
```

---

## 8. Decisiones pendientes para Cristian

1. **¿Mantener o deprecar la sección de instalación técnica?** La guía incluye comandos de instalación genéricos. Si la documentación oficial de OpenClaw cambió significativamente desde el último uso en producción, esa sección puede quedar desactualizada rápido. Opciones: (a) mantenerla con nota "verificar en openclaw.ai", (b) reemplazar por un link directo a la documentación oficial y solo describir el proceso a alto nivel.

2. **¿Actualizar el posicionamiento de OpenClaw vs Hermes?** El podcast se grabó en mayo 2026 y Cristian migró a Hermes. La guía refleja esa migración honestamente. Si en un episodio futuro el fallo de Hermes (o algún cambio) justifica volver, la guía necesita update. Sugerencia: agregar un `updatedAt` claro y revisar cada 60 días.

3. **¿Agregar sección de MiniMax como cerebro principal?** Diego y Cristian hablan de MiniMax como el cerebro de reemplazo más práctico para OpenClaw. Podría merecer su propia sección con más detalle del setup. Diferir a brief-hermes-agent o a una guía separada `/guias/minimax/` si el volumen de búsqueda lo justifica.

4. **Voz del CTA:** el draft usa segunda persona con "Lo ves, lo copias, lo adaptas". ¿Preferís un tono más impersonal o el tuteo es correcto para el perfil de audiencia de ELHDA (founders tech-adjacent)?
