---
title: 'Claude Code: qué es, cómo empezar y cuánto cuesta'
date: '2026-05-28'
updatedAt: '2026-07-07'
description: Claude Code es la CLI de Anthropic para programar con IA desde la terminal. Qué hace, cuánto cuesta, cómo instalarlo y cuándo conviene — desde la cancha del podcast.
seoTitle: 'Claude Code: qué es, cómo empezar y cuánto cuesta (2026)'
seoDescription: Claude Code es la CLI de Anthropic para programar con IA desde tu terminal. Qué hace, precio, cómo instalarlo y cuándo conviene usarlo. Guía práctica 2026.
focusKeyword: claude code
keywords:
- claude code
- claude code que es
- claude code precio
- claude code vs cursor
- claude code gratis
- claude code tutorial
- como usar claude code
- claude code mcp
relatedEpisodes:
- 17
- 16
- 15
- 7
- 8
- 13
- 14
funnel:
  type: premium
  label: 'Lo que usamos de verdad: Cofre del Pirata'
  cta: 'Si quieres los prompts y workflows de Claude Code que usamos en producción — no los de la documentación oficial, sino los que salen de armar agentes de marketing, producir cursos y automatizar operaciones reales — están en el Cofre del Pirata de Cágala, Aprende, Repite. Una biblioteca de prompts, workflows, CLAUDE.md de referencia, plantillas y cheatsheets que se actualiza con lo que de verdad cambia el flujo. CAR es educación: lo ves, lo copias y lo adaptas a tu contexto.'
  ctaButton: Ver el Cofre del Pirata →
  url: https://www.skool.com/cagala-aprende-repite/classroom/013cda18?utm_source=eslahoradeaprender&utm_medium=organic&utm_campaign=hub_claude_code
faq:
- question: ¿Claude Code reemplaza a Cursor o a GitHub Copilot?
  answer: No del todo. Cursor es un IDE con IA integrada para programar de forma interactiva. Copilot es autocompletado en el editor. Claude Code es un agente autónomo en tu terminal. Se superponen en algunas capacidades, pero el perfil de uso es distinto. Muchos developers los usan en paralelo.
- question: ¿Claude Code funciona con cualquier lenguaje de programación?
  answer: 'Sí. Al ser un modelo de lenguaje, entiende la mayoría de los lenguajes populares. La calidad varía: para Python, JavaScript, TypeScript y Rust es excelente. Para lenguajes más oscuros o muy específicos, la calidad baja.'
- question: ¿Qué es el CLAUDE.md y por qué importa?
  answer: 'Es un archivo que colocas en la raíz de tu proyecto donde le das instrucciones persistentes a Claude Code: cómo está estructurado el proyecto, qué convenciones de código sigues, qué no debe tocar, qué herramientas tienes configuradas. Es lo que separa a un agente que entiende tu contexto de uno que empieza de cero cada sesión.'
- question: ¿Claude Code puede acceder a Internet?
  answer: Por defecto, no. Accede a tu sistema de archivos local y puede ejecutar comandos del sistema. Si quieres que haga búsquedas web o llame a APIs externas, necesitas configurar los MCPs correspondientes.
---

Claude Code es la interfaz de línea de comandos de Anthropic que convierte a Claude en un asistente de código que trabaja directamente en tu computador. En lugar de copiar y pegar fragmentos de un chat, Claude Code lee tus archivos, entiende el contexto del proyecto y hace cambios reales en el código — en un terminal, sin salir de tu flujo de trabajo.

En el podcast *Es la Hora de Aprender* llevamos meses usando Claude Code en producción: para construir automatizaciones, producir cursos, analizar repositorios y orquestar otros agentes. Esta guía recoge lo que de verdad funciona, lo que no, y lo que necesitas saber antes de invertir tiempo o dinero en la herramienta.

---

## ¿Qué es Claude Code?

Claude Code es la CLI (command-line interface) oficial de Anthropic para trabajar con Claude en proyectos de código. Se instala en tu computador como cualquier paquete de Node.js, se conecta a tu cuenta de Anthropic y desde ahí puede leer tu directorio, ejecutar comandos del sistema, crear o modificar archivos y encadenar tareas de varios pasos sin supervisión continua.

La descripción técnica de Anthropic lo posiciona como "un agente de código autónomo". En la práctica, eso significa dos cosas: puede operar de forma interactiva mientras tú le pides cosas, o puede operar con un objetivo dado y trabajar solo hasta completarlo.

### Claude Code vs. Claude.ai: ¿cuál es la diferencia?

Claude.ai es la interfaz web. Es donde la mayoría de la gente empieza: entras, escribes, copias la respuesta. No toca tu sistema de archivos, no ejecuta código real, no persiste nada entre sesiones a menos que actives la memoria.

Claude Code es otra cosa. Funciona en tu terminal, tiene acceso directo a tu sistema de archivos y puede ejecutar comandos del sistema operativo. Si le dices "analiza este repositorio y genera tests unitarios para todas las funciones que no los tengan", lo hace solo, archivo por archivo.

Claude Cowork — que Rodrigo Rojo usa en el podcast — es una tercera variante: el modo agente para no técnicos dentro de Claude.ai, donde le dejas una carpeta y trabaja sobre los archivos sin que abras un terminal. Es útil para escritores, diseñadores o founders que no quieren ver una CLI.

### ¿Para qué tipo de tareas sirve?

Claude Code destaca en tareas donde el contexto del proyecto importa: refactorizar código existente, agregar features a un repositorio completo, escribir tests, generar documentación técnica, depurar errores en proyectos grandes y automatizar flujos de trabajo que impliquen editar archivos de forma masiva.

En el podcast lo hemos usado para:
- Orquestar equipos de agentes de marketing que corren en paralelo (EP13 y EP14).
- Dejar flujos corriendo durante la noche con el comando `/goal` — defines el objetivo, el agente itera solo hasta cumplirlo.
- Analizar repositorios de terceros y producir resúmenes accionables.

No es la mejor herramienta para tareas de conversación pura, generación de imágenes ni procesamiento de video.

¿Y si no programas? El nombre asusta, pero Claude Code también sirve para operar un negocio sin escribir una línea de código: ordenar archivos, cuadrar gastos, armar el reporte del lunes, investigar prospectos. Cristian lo enseña paso a paso para founders no técnicos en su curso [Claude Code para Emprendedores](https://cristiantala.com/cursos/claude-code-para-emprendedores/?utm_source=eslahoradeaprender&utm_medium=organic&utm_campaign=hub_claude_code).

---

## ¿Cómo funciona Claude Code?

### Modo CLI: comandos básicos para empezar

Una vez instalado, arrancas con `claude` en tu terminal. Desde ahí puedes darle instrucciones en lenguaje natural. Los comandos más usados al principio:

- `claude` — abre la sesión interactiva.
- `claude -p "instrucción"` — ejecuta una instrucción puntual sin sesión interactiva.
- `/help` dentro de la sesión — muestra todos los comandos disponibles.
- `/clear` — limpia el contexto de la conversación actual.

En abril de 2026 Anthropic lanzó `/goal` en Claude Code: defines un objetivo (refactorizar un módulo, escribir todos los tests de un directorio, organizar un conjunto de notas), y el agente hace pasadas sucesivas hasta completarlo. En el podcast, Rodrigo lo usó para que su agente procesara tres años de notas en Obsidian mientras dormía y le entregara el resultado por la mañana (EP12).

### Modo agente: dejar que trabaje mientras duermes

El salto de "asistente que espera tu próxima instrucción" a "agente que trabaja con autonomía" ocurre cuando configuras Claude Code para operar sin human-in-the-loop en cada paso. Cristian llegó a eso en mayo de 2026: antes el agente mandaba un mensaje por Telegram pidiendo aprobación antes de actuar; después simplemente ejecutaba y Cristian revisaba el resultado al final (EP12).

Para llegar a ese punto necesitas:
1. Un objetivo claro y bien delimitado (el agente no improvisa si no sabe adónde va).
2. Permisos explícitos de qué carpetas y comandos puede tocar.
3. Una forma de que te avise cuando termine (Telegram, log de archivo, otro agente).

### MCP y tool use: conectar Claude Code con otras herramientas

MCP (Model Context Protocol) es el estándar abierto de Anthropic para conectar agentes con herramientas externas — bases de datos, APIs, servicios web, otros agentes. Claude Code lo soporta de forma nativa.

En la práctica: si quieres que Claude Code lea datos de una hoja de cálculo, actualice un CRM o consulte una API externa, creas un MCP server que expone esas capacidades, y Claude Code lo usa como una "herramienta" más en su repertorio.

Un gotcha importante que salió en el podcast (EP14): conectar una API no es enseñarle al agente a usarla. Rodrigo tuvo que crear una skill que explicara al agente cómo trabaja él con HubSpot — no bastaba con darle el token. La patineta y el ollie, dice Rodrigo: tener la patineta no significa que sepas andar.

---

## ¿Cuánto cuesta Claude Code?

### Plan gratuito vs. plan Max de $200

Claude Code tiene una capa gratuita con límites de uso. Para uso intensivo o agéntico, Anthropic ofrece el plan Max a $200 al mes, que da acceso ilimitado a Opus y Sonnet directamente desde Claude Code.

En marzo de 2026 Anthropic modificó los términos: el plan Max dejó de cubrir el uso de Opus y Sonnet desde agentes externos como OpenClaw. Claude Code — al ser el cliente oficial de Anthropic — sí está cubierto. Si consumes los modelos directamente por API desde un agente externo, el costo pasa a ser por token, lo que con uso agéntico intensivo puede representar ~15 veces más que el plan Max mensual (EP08).

Resumen de opciones:

| Plan | Precio | Qué incluye | Para quién |
|---|---|---|---|
| Gratuito | $0 | Uso limitado de Sonnet | Explorar, tareas eventuales |
| Pro | ~$20/mes | Acceso a Sonnet con límites generosos | Uso diario moderado |
| Max | $200/mes | Uso "ilimitado" de Opus y Sonnet vía Claude Code | Uso agéntico intensivo, productores de contenido, devs |
| API directa | Por token | Sin límite, pagas exactamente lo que consumes | Productos, startups, equipos |

### ¿Vale la pena el plan Max? El cálculo real

Depende de tu volumen. Si usas Claude Code para tareas puntuales (un par de horas a la semana), el plan Pro o la capa gratuita bastan. Si lo tienes corriendo en modos agénticos durante varias horas al día, el Max se paga solo.

Lo que sí no conviene es no tener ningún plan de contingencia. En el podcast aprendimos en carne propia: un SLA de 93.7% — que es el uptime real que midieron en GitHub durante un mes — equivale a 45 horas de downtime mensual. Si tu productividad depende de una sola herramienta sin plan B, eres rehén (EP07). La recomendación operativa: consume Claude vía AWS Bedrock o Azure, no directo, para que una caída de la infraestructura de Anthropic no te deje sin servicio.

---

## Claude Code vs. Cursor: cuándo elegir uno u otro

La comparativa más buscada en 2026. La respuesta corta: son herramientas distintas para perfiles distintos, y muchos usuarios las usan en paralelo.

### Lo que Cursor hace mejor

Cursor es un IDE completo (fork de VS Code) con IA integrada. Su ventaja está en la integración con el flujo de trabajo visual de un programador: autocompletado, edición inline, refactors en el editor gráfico. Si ya vives en VS Code y quieres que la IA esté embebida en tu editor sin salir de él, Cursor es la elección natural.

### Lo que Claude Code hace mejor

Claude Code no es un IDE: es un agente en tu terminal. Su ventaja está en la autonomía y el contexto amplio: puede leer y editar múltiples archivos en un directorio, ejecutar comandos del sistema, encadenar tareas sin intervención humana y operar con objetivos de largo plazo. Cuando necesitas que un agente trabaje solo durante horas, Claude Code supera a Cursor.

También importa el modelo subyacente. Claude Sonnet y Opus tienen, según los benchmarks de quienes los usan en producción, un estilo de razonamiento y escritura distinto que para ciertos tipos de tareas (código complejo, documentación, análisis de sistemas) resulta más consistente.

### ¿Puedo usar los dos?

Sí, y tiene sentido. El patrón común: Cursor para el día a día de programación interactiva, Claude Code para tareas de análisis y automatización que requieren autonomía. No son mutuamente excluyentes.

---

## Cómo instalar Claude Code y dar los primeros pasos

### Requisitos

- **Node.js** versión 18 o superior.
- Una cuenta en **Anthropic** (anthropic.com) — mínimo el plan gratuito.
- Terminal (macOS, Linux o Windows con WSL).

### Instalación en macOS / Linux / Windows

```bash
# macOS y Linux
npm install -g @anthropic-ai/claude-code

# Windows (requiere WSL2 habilitado)
# Instalarlo dentro de la sesión WSL con el mismo comando
```

Después de instalar, autentica tu sesión:

```bash
claude auth login
```

Se abre un browser para vincular tu cuenta de Anthropic. Una vez autenticado, arranca con:

```bash
claude
```

### Tu primer prompt de código

La forma más directa de empezar es en un directorio con un proyecto real. Entra al directorio y llama a Claude:

```bash
cd mi-proyecto
claude
```

Desde ahí pídele algo concreto:
- `"Explícame qué hace este proyecto leyendo el README y los archivos principales"`
- `"Encuentra y lista todas las funciones que no tienen tests"`
- `"Agrega comentarios de documentación a todas las funciones del archivo src/utils.js"`

La primera instrucción siempre debería ser exploratoria, no destructiva. Deja que Claude Code mapee el proyecto antes de pedirle que cambie algo.

---

## Errores comunes cuando empiezas a usar Claude Code

### Dependencia de proveedor: qué pasa cuando Claude se cae

Este es el error que más duele porque lo descubres cuando ya tienes un flujo de trabajo construido encima de Claude Code.

En el podcast (EP07), Cristian confesó que se había "casado con Anthropic": todo su flujo dependía de Claude y un día de caída fue un día improductivo. La lección operativa que sacó: consume Claude vía AWS Bedrock o Azure OpenAI Service en lugar de directo desde Anthropic. El modelo es el mismo, la infraestructura es distinta. Si se cae una, consumes de la otra.

Tres capas de contingencia recomendadas:
1. Consumir el modelo vía API de un cloud provider (Bedrock o Azure), no solo desde Claude Code directo.
2. Tener definido qué tareas puedes hacer a mano sin catástrofe y cuáles necesitan IA sí o sí.
3. Mantener una segunda suscripción básica en otro proveedor (Gemini, GPT) para tareas donde la calidad no es crítica.

### Por qué tu agente funciona peor en español

Si usas Claude Code en español y notas que a veces se salta instrucciones o no invoca herramientas cuando debería, no es un bug de configuración tuyo: es una limitación de entrenamiento.

Muchos modelos grandes fueron entrenados principalmente en inglés y chino. El tool use — saber cuándo invocar una herramienta cuya descripción está en español — se comporta de forma menos confiable en otros idiomas (EP14). La buena noticia es que los modelos nuevos (Gemini 3.5 Flash, versiones recientes de Claude) están mejorando específicamente en esa dimensión.

Mientras tanto: si un flujo agéntico es crítico, escribe el system prompt y las descripciones de tools en inglés, aunque el contenido que produces sea en español.

---

## Claude Code en la práctica: lo que de verdad usamos

Esta es la diferencia entre una guía que describe la documentación oficial y una guía que viene de quien lo usa en producción.

Cristian construyó con Claude Code un equipo de diez agentes de marketing — copy, UX/UI, imágenes, cada uno con su rol — y lanzó una campaña completa sin tocar la ejecución directa. El resultado: un costo de adquisición de usuarios que bajó de ~USD 50 a aproximadamente medio dólar (EP14). No es un caso aislado: es el tipo de resultado que aparece cuando el agente trabaja con datos reales de tu negocio y entiende el contexto.

Rodrigo usa el comando `/goal` de Claude Code para dejar al agente procesando años de notas en Obsidian mientras duerme, y encontró patrones en sus propios documentos que él no había notado (EP12).

Diego lo usa en paralelo con otros agentes y destaca su capacidad para orquestar flujos que implican múltiples archivos y pasos encadenados.

### Prompts y workflows de Claude Code del Cofre del Pirata

Si quieres ir más rápido, en el Cofre del Pirata de la comunidad CAR están los prompts y workflows de Claude Code que usamos de verdad: desde cómo estructurar un CLAUDE.md para que el agente entienda tu proyecto hasta workflows de n8n que se coordinan con Claude Code para tareas automatizadas.

No es una lista de prompts genéricos de internet. Son los recursos que Cristian usa en su operación diaria y que actualiza cuando algo nuevo aparece que de verdad cambia el flujo. Los puedes ver, copiar y adaptar — sin que nadie te los arme a medida.

### ¿Necesito saber programar para usarlo?

Depende de para qué. Si quieres que Claude Code modifique archivos de código en un proyecto técnico, algo de contexto técnico ayuda para supervisar los cambios. Si lo usas para analizar documentos, organizar notas, generar textos estructurados o automatizar workflows de texto, no necesitas saber programar.

Lo que sí necesitas en cualquier caso: saber leer los resultados y detectar cuando algo está mal. Cristian en el podcast lo resume con una regla: el cuello de botella somos los humanos. La IA espera que le digamos "sigue" o "esto está mal". Ese criterio no lo reemplaza ningún modelo.

---

## Preguntas frecuentes sobre Claude Code

**¿Claude Code reemplaza a Cursor o a GitHub Copilot?**
No del todo. Cursor es un IDE con IA integrada para programar de forma interactiva. Copilot es autocompletado en el editor. Claude Code es un agente autónomo en tu terminal. Se superponen en algunas capacidades, pero el perfil de uso es distinto. Muchos developers los usan en paralelo.

**¿Claude Code funciona con cualquier lenguaje de programación?**
Sí. Al ser un modelo de lenguaje, entiende la mayoría de los lenguajes populares. La calidad varía: para Python, JavaScript, TypeScript y Rust es excelente. Para lenguajes más oscuros o muy específicos, la calidad baja.

**¿Qué es el CLAUDE.md y por qué importa?**
Es un archivo que colocas en la raíz de tu proyecto donde le das instrucciones persistentes a Claude Code: cómo está estructurado el proyecto, qué convenciones de código sigues, qué no debe tocar, qué herramientas tienes configuradas. Es lo que separa a un agente que entiende tu contexto de uno que empieza de cero cada sesión.

**¿Claude Code puede acceder a Internet?**
Por defecto, no. Accede a tu sistema de archivos local y puede ejecutar comandos del sistema. Si quieres que haga búsquedas web o llame a APIs externas, necesitas configurar los MCPs correspondientes.

**¿Qué pasó con Kairos, la función filtrada de Claude Code?**
En abril de 2026 se filtró el código fuente del cliente de Claude Code, y la comunidad encontró 44 funcionalidades detrás de feature flags, incluida una llamada Kairos, descrita como un agente autónomo de largo plazo (EP07). Anthropic no se pronunció sobre el accidente, y los propios desarrolladores del equipo reaccionaron con orgullo ante lo que se encontró. Kairos no está disponible públicamente en ninguna versión lanzada; solo existe en el código filtrado.

---

## Recursos mencionados en el podcast

Los episodios de *Es la Hora de Aprender* donde más se habló de Claude Code:

- [EP07 — Se cayó Claude y no pude trabajar: ¿Tienes plan B?](/episodios/07-se-cayo-claude-plan-b-ia/) — La historia real de dependencia de proveedor y cómo armar contingencia.
- [EP08 — Crisis Anthropic: alternativas a Claude, modelos open source y IA local](/episodios/08-crisis-anthropic-modelos-alternativos-ia-local/) — Qué cambió con los precios de Anthropic y cómo evaluar alternativas.
- [EP13 — Karpathy a Anthropic: el fichaje que rompe la IA](/episodios/13-karpathy-anthropic-fichaje-rompe-ia/) — Cómo Cristian armó un equipo de 10 agentes de marketing con Claude Code.
- [EP14 — Agentes de IA en la empresa: ¿uno por persona o uno por equipo?](/episodios/14-agentes-ia-empresa-uno-por-persona-o-equipo/) — El costo de adquisición a medio dólar con agentes, y por qué el tool use falla en español.
