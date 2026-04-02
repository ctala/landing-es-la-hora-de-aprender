---
title: "Se cayó Claude y no pude trabajar: ¿Tienes plan B para tu IA?"
episode: 7
season: 1
thumbnail: "/thumbnails/ep07.webp"
date: "2026-04-02"
duration: "1:04:55"
durationSeconds: 3895
youtube: "https://www.youtube.com/watch?v=-f-N7P7inng"
youtubeId: "-f-N7P7inng"
spotify: "https://open.spotify.com/episode/3hj1e8Py0dlj50K9dVWnb8"
apple: "https://podcasts.apple.com/es/podcast/se-cay%C3%B3-claude-y-no-pude-trabajar-tienes-plan-b-para-tu-ia/id1878026962?i=1000758764295"
description: "Cristian confiesa: se casó con Anthropic y cuando Claude se cayó no pudo trabajar. El equipo debate planes de contingencia, dependencia de LLMs, la filtración del código de Claude Code, por qué los humanos también nos equivocamos, y el CEO de JP Morgan pidiendo regulación para 'salvar la sociedad'. Además: GenSpark Cloud, NemoClaw de NVIDIA, Minimax 2.7 y proyectos para las próximas semanas."
seoTitle: "Se cayó Claude y no pude trabajar: Plan B para tu IA | Es la Hora de Aprender EP7"
seoDescription: "EP7: Qué hacer cuando Claude se cae, planes de contingencia IA, filtración código Claude Code, GenSpark Cloud, NemoClaw NVIDIA, dependencia de LLMs en empresas."
ogImage: "https://eslahoradeaprender.com/thumbnails/ep07.webp"
hosts:
  - name: "Cristian Tala"
    linkedin: "https://www.linkedin.com/in/ctala/"
  - name: "Diego Arias"
    linkedin: "https://www.linkedin.com/in/godiegoarias/"
  - name: "Rodrigo Rojo"
    linkedin: "https://www.linkedin.com/in/rodrigorojo/"
topics:
  - "Mea culpa: Cristian se casó con Anthropic y cuando falló no pudo trabajar"
  - "Anthropic colapsado: 5 caídas en un mes, límites bajados a todos"
  - "GitHub con SLA de 93.7% en marzo — 45 horas abajo"
  - "Planes de contingencia: fallback a Gemini, GPT, OpenRouter"
  - "Por qué Cristian NO QUISO usar otro modelo (preferencias de calidad)"
  - "Claude vs ChatGPT: la personalidad del modelo importa"
  - "Empresas: qué pasa cuando Notion se cae y nadie sabe qué hacer"
  - "El rol del humano: no atrofiarse, ser capaz de trabajar manual"
  - "Filtración código Claude Code: 44 features ocultas, Kairos, clones en Rust"
  - "¿Marketing accidental? Anthropic no se ha pronunciado"
  - "Claude Maitos y Claude Capibara: rumores de modelos más potentes que Opus"
  - "GenSpark Cloud: OpenClaw empresarial sin pelear con errores"
  - "NemoClaw de NVIDIA: OpenClaw con corbata y seguridad enterprise"
  - "Minimax 2.7 para ahorro de tokens en tareas agénticas"
  - "Qwen 3.5 Omni: edición de audio incluida"
  - "CEO JP Morgan: pide regulación para 'salvar la sociedad' tras despedir por IA"
  - "El tsunami de IA: aprende a surfear o te pasa por encima"
  - "Hate en redes: haters que niegan lo que está pasando"
  - "El cuello de botella somos los humanos (cita de Andrej Karpathy)"
  - "Proyectos: Vector Rodrigo en Obsidian, auditoría de tools, Empresas Aumentadas blog"
keywords:
  - "se cayo claude que hacer"
  - "plan contingencia inteligencia artificial"
  - "anthropic caidas problemas"
  - "codigo claude code filtrado"
  - "genspark cloud openclaw"
  - "nemoclaw nvidia enterprise"
  - "minimax 2.7 agentes"
  - "dependencia llm empresas"
  - "jp morgan despidos ia regulacion"
  - "qwen 3.5 omni audio"
---

Cristian abre el episodio con una confesión: **se casó con Anthropic** y cuando Claude se cayó, no pudo trabajar. Un día entero de baja productividad porque decidió no usar su plan B. El debate que sigue toca fibras sensibles: ¿cuánta dependencia es demasiada?

## El mea culpa de Cristian

> "Tomé la decisión a propósito de casarme con Anthropic. Tengo el plan de $200 dólares, Cloud Code, Cowork, OpenClaw... y ayer falló. El último mes se cayó como cinco veces."

La pregunta obvia: ¿por qué no usó Gemini o GPT como fallback? La respuesta es reveladora — **no quería**. La calidad de Claude para su flujo de trabajo es tan superior que prefirió hacer reuniones, llamar por teléfono, cualquier cosa menos usar otro modelo.

Rodrigo confirma: le pasa lo mismo. La personalidad de Claude, cómo resuelve, cómo escribe... es un compañero de trabajo que tiene estilo propio.

## GitHub: 93.7% de SLA en marzo

Cristian trae el dato duro: GitHub tuvo un SLA de **93.7%** en marzo. Suena bien (está sobre 90%), pero la matemática es brutal:
- 99.9% SLA = 43 minutos de downtime permitido al mes
- 93.7% SLA = **45 horas** de downtime

45 horas es una semana laboral completa. Si tu productividad depende de estas herramientas, ya no eres productivo.

## El riesgo que nadie quiere ver

Diego plantea lo esencial: siempre hay que tener un proveedor backup. Se cae el internet, llamas a otro ISP. Se cae Claude, usas GPT. No puedes parar.

Rodrigo va más profundo: el problema no es solo técnico. **Hay empresas que colapsan cuando Notion se cae**. No pueden ver la lista de tareas, no saben qué hacer. La dependencia se volvió patológica.

> "Estos son sistemas que te multiplican, pero uno debería ser capaz de hacer su pega solo."

## La filtración de Claude Code

El giro del episodio: Anthropic filtró **todo el código fuente de Claude Code** por un error humano (alguien lo sacó del .gitignore). La competencia recibió años de trabajo gratis.

Lo más loco:
- **44 funcionalidades ocultas** con flags para no mostrar en la versión oficial
- Una llamada **Kairos**: agente autónomo de largo plazo
- La comunidad ya tiene clones en Rust
- Anthropic **no ha dicho nada** — de hecho, los desarrolladores reaccionan orgullosos a los hallazgos

¿Error o marketing? Rodrigo especula que quizás están aprovechando la situación. Dado que pasó, mejor que la gente aprenda.

## Claude Maitos y Claude Capibara

Se filtraron rumores de dos modelos nuevos: **Claude Maitos** y **Claude Capibara**, supuestamente más potentes que Opus. Justo cuando se filtró el código. Coincidencia sospechosa.

Diego agrega: Anthropic podría estar bajando el perfil porque viene un IPO.

## GenSpark Cloud y NemoClaw: OpenClaw empresarial

Para los que están cansados de pelear con errores de OpenClaw local, hay opciones:

**GenSpark Cloud:** Diego lo recomienda. Has matado varios OpenClaw en diferentes servidores, pero el de GenSpark ha sobrevivido. El arnés que ponen encima hace que el modelo se comporte mejor.

**NemoClaw de NVIDIA:** Básicamente OpenClaw con corbata y maletín. Mismo código por debajo, pero con capas de seguridad enterprise, ambiente Docker privado, hardware validado. La analogía de Rodrigo: "Le pone trajecito para que pueda ir a la oficina sin que nadie hable de problemas de seguridad."

## CEO de JP Morgan: "Salvar la sociedad"

El dato más provocador del episodio: el CEO del banco más grande de Estados Unidos, después de despedir a mucha gente por IA, dijo que **apoyaría regulación para proteger empleos** si el gobierno la impusiera. Para "salvar la sociedad".

Cristian lo interpreta generosamente: quizás es un llamado a ir paso a paso, a que el cambio no genere caos social.

Rodrigo es más duro: cada cambio tecnológico cambió la sociedad. No podemos frenar esto, ya está suelto en código abierto. La pregunta no es cómo parar, es **cómo preparar a la sociedad para navegar el nuevo mundo**.

## El tsunami y los haters

Cristian comparte que está recibiendo hate en LinkedIn. Gente que le dice que miente, que exagera. Incluso cuando los posts tienen las fuentes abajo.

> "Viene un tsunami gigante. Puedes aprender a surfear o quedarte tomando sol en la playa. Pero el tsunami va a pasar igual."

La resistencia al cambio es humana, pero el cambio no espera. Las empresas que ya están experimentando van a sobrevivir. Las que dicen "eso no puede ser" van a despertar con el agua al cuello.

## Proyectos para las próximas semanas

**Cristian:**
- Mantiene Anthropic como modelo prioritario (con fallbacks)
- Servidor Git espejo para no depender de GitHub

**Rodrigo:**
- "Vector Rodrigo": documentar todo sobre sí mismo en Obsidian para que la IA lo consulte
- Auditoría de herramientas: qué estoy pagando que ya no uso
- Ya llegó al límite de tokens de Claude 2 veces este mes

**Diego:**
- Minimax 2.7 para ahorrar tokens
- Nuevo blog: **empresasaumentadas.com** (IA para empresas)
- Experimento para Revenue Summit: 3 agentes compitiendo

## La frase del episodio

Rodrigo cita a Andrej Karpathy:

> "El cuello de botella hoy somos nosotros, los humanos. La IA está esperando que le digamos 'sigue'. Pero tenemos que dormir."

---

*Únete a **Cágala, Aprende, Repite** — la comunidad donde seguimos aprendiendo juntos:*
*[skool.com/cagala-aprende-repite/about](https://www.skool.com/cagala-aprende-repite/about)*
