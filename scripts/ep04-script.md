# EP04 — Script: "Los Agentes Ya Trabajan. ¿Y Tú?"
**Es la Hora de Aprender — Temporada 1, Episodio 4**
**Hosts:** Cristian [C] · Diego [D] · Rodrigo [R]
**Duración estimada:** ~60 minutos
**Grabación:** Marzo 2026

---

## 🎙️ INTRO / COLD OPEN (~3 min)

**[C]** Bienvenidos a Es la Hora de Aprender. Soy Cristian Tala, estoy con Diego Arias y Rodrigo Rojo — y esta semana arrancamos directo con un número que me dejó pensando toda la semana:

**$4.000 dólares. Dos semanas. 22 vulnerabilidades críticas en Firefox.**

Eso es lo que le costó a Anthropic usar Claude para auditar uno de los navegadores más revisados del mundo. Dos meses de trabajo humano, comprimido en dos semanas, por el precio de un vuelo a Miami.

Si eso no les dice que algo cambió — que los agentes ya no son el futuro sino el presente — nada de lo que veamos hoy les va a convencer.

**[D]** Y lo más loco es que no fue una búsqueda automática de errores. Claude leyó el código, entendió el contexto, identificó patrones. Eso es trabajo de analista senior.

**[R]** Sí, y lo que me parece importante es que Mozilla dijo que en sus canales normales de investigación ese volumen lo ven en dos meses. Claude lo hizo en dos semanas.

**[C]** Exacto. Y eso es el hilo de todo el episodio de hoy: los agentes ya están ejecutando trabajo real. Y eso tiene implicancias enormes — para los modelos de negocio, para los equipos, y para lo que tú puedes hacer con tu empresa o proyecto hoy.

> **[MÚSICA DE INTRO]**

---

## 📰 BLOQUE 0: LO QUE NOS LLAMÓ LA ATENCIÓN ESTA SEMANA (~10 min)

**[C]** Antes de entrar en los temas grandes, hagamos el round de la semana. Esta semana salieron varios modelos nuevos — Qwen 3.5, GPT 5.4, y otros. ¿Qué les llamó la atención?

---

**[C] — Su turno:**
*[Comparte lo que más te llamó la atención de los nuevos lanzamientos — Qwen 3.5 open source, GPT 5.4, lo que sea que hayas probado esta semana]*

**ÁNGULO SUGERIDO:**
- Qwen 3.5 es relevante porque viene de Alibaba — el open source asiático está cerrando brecha con los modelos occidentales. Hace un año era impensable.
- GPT 5.4 sigue en la carrera de capacidades de agentes — OpenAI está empujando la frontera de tool use.
- La pregunta que me hago: ¿importa cuál modelo usas hoy, o importa más cómo lo estás integrando?

---

**[D] — Pregunta para Diego:**
> *"Diego, tú trabajas directo con founders y equipos técnicos. ¿Ves que la velocidad de lanzamientos está acelerando la adopción o paralizando a la gente porque no saben qué elegir?"*

**[R] — Pregunta para Rodrigo:**
> *"Rodrigo, desde tu perspectiva — ¿cuándo tiene sentido cambiar de modelo y cuándo es ruido?"*

**PUNTO PRÁCTICO PARA EL CIERRE DEL BLOQUE:**
> La respuesta corta: el modelo importa cada vez menos si tienes buena arquitectura. Lo que importa es que tu sistema pueda cambiar de modelo sin reescribir todo. Ironía: eso nos lleva directo al primer tema grande.

---

## 🔴 BLOQUE 1: SEQUOIA — LA PRÓXIMA EMPRESA DE $1T NO VENDE SOFTWARE (~15 min)

**[C]** El 5 de marzo, Julien Bek, socio de Sequoia Capital — uno de los fondos de VC más influyentes del mundo, los que invirtieron en Apple, Google, Airbnb — publicó un artículo que se está citando en todos lados. La tesis:

> *"La próxima empresa de 1 trillion de dólares va a ser una empresa de software disfrazada de firma de servicios."*

**[D]** O sea, no van a vender el software. Van a vender el trabajo que el software hace.

**[C]** Exacto. Y la distinción es brutal. Él lo llama **Copilot vs Autopilot**.

- Un **Copilot** te vende la herramienta. Tú la usas, tú te responsabilizas del resultado.
- Un **Autopilot** te vende el resultado. Tú le dices qué necesitas — ellos lo entregan.

**Ejemplo concreto:** Una empresa gasta $10.000 al año en QuickBooks y $120.000 en el contador que cierra los libros. La próxima empresa grande no te va a vender un software contable mejor. Te va a decir: *"nosotros cerramos tus libros"* — y lo va a hacer con IA, más barato y más rápido.

---

**💬 PREGUNTA PARA DIEGO Y RODRIGO:**
> *"¿Están viendo esto en sus industrias? ¿Conocen casos concretos en Chile o LATAM donde alguien ya esté vendiendo el trabajo y no la herramienta?"*

---

**[C]** El dato que le da peso a todo esto: por cada $1 que las empresas gastan en software, gastan **$6 en servicios**. El mercado real no es el presupuesto de tecnología — es el presupuesto de salarios y outsourcing.

Y Sequoia puso números por industria. Esto es para contextualizar la oportunidad:

| Vertical | TAM outsourced USA |
|----------|-------------------|
| Recruitment & Staffing | $200B+ |
| Supply Chain & Procurement | $200B+ |
| Management Consulting | $300-400B |
| IT Managed Services | $100B+ |
| Insurance Brokerage | $140-200B |
| Accounting & Audit | $50-80B |
| Legal transaccional | $20-25B |

**[C]** ¿Y en Chile? Contabilidad, legal, staffing — industrias enormes, fragmentadas, y que ya operan con outsourcing. La puerta está abierta.

---

**💬 PREGUNTA DEBATE:**
> *"Rodrigo, si tú fueras a lanzar un autopilot en Chile hoy — ¿por qué vertical empezarías y por qué?"*

**PUNTO PRÁCTICO:**
El playbook de Sequoia dice: **empieza donde ya existe outsourcing**. Si el cliente ya paga a alguien externo para hacer el trabajo, ya aceptó que puede hacerse afuera. Eso es el wedge. El AI autopilot es un vendor swap, no una reestructuración.

---

## 🟡 BLOQUE 2: API-FIRST — SI LOS AGENTES NO PUEDEN USAR TU PLATAFORMA, NO EXISTES (~15 min)

**[C]** Aaron Levie es el CEO de Box — empresa que lleva 20 años siendo infraestructura para empresas. Esta semana publicó un ensayo larguísimo, bien pensado, y tiene una frase que sintetiza todo:

> *"Si no tienes API para una feature, es como si esa feature no existiera."*

**[D]** Porque los agentes no van a hacer click en tu UI. Van a llamar tu API.

**[C]** Exacto. Y acá me toca ser honesto: esto no es nuevo. En Pago Fácil — hace 8, 9 años — tomamos la decisión de ser API-first desde el día uno. No porque anticipara los agentes, sino porque era buena ingeniería. Cada funcionalidad tenía que poder consumirse por API antes de que existiera la UI.

¿El resultado? Hoy, cualquier agente puede integrarse con Pago Fácil sin fricción. Esa decisión de ingeniería tomada en 2016 resulta ser la jugada correcta para 2026.

---

**💬 PREGUNTA PARA DIEGO:**
> *"Diego, tú ves muchas startups. ¿Cuántas están pensando en API-first desde el día cero, o siguen construyendo la UI primero y la API como afterthought?"*

---

**[C]** Pero no quiero que esto quede en abstracto. ¿Qué significa ser "amigable con los agentes" en la práctica? Te doy ejemplos concretos:

**Si tienes un SaaS o plataforma:**

✅ **Signup por API** — Jared Friedman de YCombinator lo dijo claro: *"La mayoría de las mejores herramientas de developers todavía no dejan crear una cuenta vía API. En la era de Claude Code, eso es un error fatal."* Si un agente no puede registrarse solo, no existe para él.

✅ **Webhooks y eventos** — El agente necesita saber cuándo algo cambió. Sin webhooks, tiene que estar preguntando cada 5 minutos. Eso es ineficiente y caro.

✅ **Documentación estructurada** — Los agentes consumen tu documentación. Si está mal organizada, el agente va a alucinar cómo usar tu API. OpenAPI spec, ejemplos reales, errores bien documentados.

✅ **Rate limits razonables y pricing por uso** — Los agentes pueden hacer 10.000 llamadas donde un humano haría 10. Si tu pricing solo tiene seats, estás dejando plata sobre la mesa y bloqueando la adopción.

✅ **MCP Server** — El Model Context Protocol de Anthropic ya es estándar. Si tienes un MCP server, cualquier herramienta de agentes puede integrarse con tu plataforma en minutos.

---

**💬 PREGUNTA RODRIGO:**
> *"Rodrigo, desde el punto de vista de producto — ¿cómo priorizarías esto? ¿Es una decisión técnica o de negocio?"*

**PUNTO PRÁCTICO CLAVE:**
> No tienes que reescribir tu producto. El primer paso es auditar tu API actual: ¿qué puede hacer un agente HOY con lo que ya tienes? ¿Puede autenticarse? ¿Puede hacer las operaciones principales? ¿Dónde se rompe? Con eso ya tienes el roadmap.

---

**[C]** Y hay otra dimensión que Levie menciona y que me parece importante: los modelos de negocio van a cambiar.

Hoy vendemos seats — "10 usuarios, $X al mes". Pero si el agente de tu cliente hace el trabajo de 50 personas, el seat no tiene sentido. El futuro es **pricing por consumo o por outcome**. Paga por lo que el agente hace, no por cuántos humanos lo usan.

---

## 🟠 BLOQUE 3: GALPERIN Y MERCADO LIBRE — EL ATTRITION COMO ESTRATEGIA (~10 min)

**[C]** Marcos Galperin — fundador de Mercado Libre, la empresa de tecnología más valiosa de América Latina — dijo algo esta semana que me parece importante procesar.

Tiene 20.000 desarrolladores. En 5 años, espera tener 10.000.

> *"No porque los hayamos despedido, sino porque no estamos contratando a nadie."*

**[D]** Es elegante. Políticamente mucho más fácil que un despido masivo. No hay titulares, no hay crisis de imagen. La gente simplemente no se reemplaza.

**[R]** Pero el resultado final es el mismo — la mitad del equipo.

**[C]** Sí. Y a eso le llama **"maximizar el mínimo"** — el dilema de cualquier empresa establecida hoy. Tienes que optimizar lo que funciona ahora para sobrevivir, mientras al mismo tiempo preparas el sistema que eventualmente lo va a reemplazar.

Y la paradoja es que el mismo equipo que optimiza lo actual tiene que pensar en lo que viene. No puedes separarlo.

---

**💬 PREGUNTA DEBATE ABIERTO:**
> *"¿Están de acuerdo con la estrategia de attrition? ¿Es responsable o es evitar el problema? ¿Y qué le dices al developer de 25 años que empieza hoy?"*

---

**[C]** Y acá viene la frase más polémica de Galperin, que quiero que la debatan:

> *"Hace 10 años les hubiera dicho que necesitan aprender a desarrollar. Hoy digo que necesitan saber matemáticas."*

---

**💬 PREGUNTA DIRECTA A DIEGO Y RODRIGO:**
> *"¿Están de acuerdo? ¿O el que sabe programar BIEN sigue teniendo ventaja enorme sobre el que solo sabe pedir cosas a la IA?"*

**ÁNGULO SUGERIDO PARA CRISTIAN:**
Yo creo que Galperin tiene razón en el espíritu pero se equivoca en la literalidad. Lo que dice es: el pensamiento computacional importa más que la sintaxis. Entender qué puede hacer un sistema, cuáles son sus límites, cómo se diseña — eso no lo reemplaza la IA. Lo que sí reemplaza es escribir el for loop.

---

**💬 PREGUNTA MUNDO AGÉNTICO:**
> *"Galperin también habló de un 'mundo agéntico' donde los asistentes de IA actúan en tu nombre. ¿Lo están viendo ya? ¿Están usando agentes que actúan por ustedes?"*

---

## 🟢 CIERRE PRÁCTICO: TU PROPIA AGENCIA DE IA, HOY, GRATIS (~8 min)

**[C]** Todo lo que hablamos hoy puede sonar muy "big tech" — Sequoia, Box, Mercado Libre. Pero quiero cerrar con algo que cualquiera puede usar esta semana.

Alguien publicó en Reddit — y en 12 horas tenía 50 requests — un repositorio llamado **Agency Agents**. La idea: una colección de 80 agentes especializados, con personalidad, procesos definidos y entregables concretos, que se instalan en Claude Code con un comando.

**¿Qué significa en la práctica?**

Abre Claude Code y le dices: *"Usa el Backend Architect agent para diseñar esta API."* O *"Activa el Security Engineer y revisa este código."*

Tienes un Frontend Developer, un Growth Hacker, un UX Researcher, un Legal Compliance Checker — todos disponibles, todos gratis, todos open source.

```bash
# Instalar en Claude Code
cp -r agency-agents/* ~/.claude/agents/
```

O con el instalador interactivo que detecta qué herramientas tienes:
```bash
./scripts/install.sh
```

Y funciona también en Cursor, Gemini CLI, Windsurf, Aider.

---

**💬 PREGUNTA PRÁCTICA FINAL:**
> *"¿Están usando Claude Code o herramientas similares en su día a día? ¿Cuál es el caso de uso donde más tiempo les ahorra?"*

---

**PUNTO DE CIERRE CONCEPTUAL:**

Todo lo que vimos hoy apunta a lo mismo: los agentes ya están haciendo trabajo. El que entiende cómo estructurar ese trabajo — qué darle, cómo pedirlo, cómo verificarlo — tiene una ventaja enorme sobre el que sigue esperando que "madure la tecnología".

La tecnología ya maduró. La pregunta es si tú te adaptaste.

---

## 🎙️ CIERRE DEL EPISODIO (~4 min)

**[C]** Perfecto. Resumamos lo que vimos hoy:

1. **Claude auditó Firefox** en 2 semanas por $4K — trabajo de 2 meses humanos. Los agentes ya hacen trabajo real de calidad.

2. **Sequoia:** La próxima empresa de $1T no vende software — vende el trabajo. El TAM real son los presupuestos de servicios y salarios, no de software.

3. **Levie / API-first:** Si tu plataforma no es amigable con los agentes — signup por API, webhooks, MCP server, pricing por uso — eres invisible para ellos. Y los agentes son el usuario más importante del futuro.

4. **Galperin:** Mercado Libre va de 20.000 a 10.000 devs, no despidiendo sino no contratando. "Maximizar el mínimo" es el dilema de toda empresa hoy.

5. **Agency Agents:** 80 agentes especializados, gratis, listos para usar en Claude Code esta semana.

---

**[C]** Si te gustó el episodio, compártelo con alguien que necesite escuchar esto. Encuéntranos en Spotify, YouTube, y en eslahoradeaprender.com.

Soy Cristian Tala.

**[D]** Diego Arias.

**[R]** Rodrigo Rojo.

**[TODOS]** ¡Es la Hora de Aprender!

> **[MÚSICA DE CIERRE]**

---

## 📋 CHEAT SHEET — DATOS CLAVE PARA TENER A MANO

| Dato | Fuente |
|------|--------|
| Claude: 22 bugs en Firefox, 14 de alta gravedad, 2 semanas, $4K | Anthropic + Mozilla, Feb 2026 |
| Sequoia: $1T company vende el trabajo, no el software | Julien Bek, sequoiacap.com, 5 Mar 2026 |
| Ratio software/servicios: $1 software = $6 servicios | Sequoia Capital |
| Galperin: 20.000 → 10.000 devs por attrition natural | La Nación Argentina, 3 Mar 2026 |
| Levie: "Si no tienes API, la feature no existe" | Aaron Levie (Box CEO), Mar 2026 |
| YC Friedman: "Si un agente no puede registrarse en tu producto, estás muerto" | Jared Friedman, YCombinator |
| Agency Agents: 80 agentes open source para Claude Code | github.com/msitarzewski/agency-agents |
| Modelos semana: Qwen 3.5, GPT 5.4 | — |

---

## 🗣️ PREGUNTAS DE DISCUSIÓN — LISTADO RÁPIDO

1. ¿Están viendo autopilots en Chile/LATAM ya? ¿Conocen casos?
2. ¿Por qué vertical de servicios lanzarían un autopilot hoy?
3. ¿Su producto/empresa es "amigable con agentes"? ¿Qué le falta?
4. ¿Attrition vs despido — es una estrategia responsable?
5. ¿Matemáticas sobre programación — están de acuerdo con Galperin?
6. ¿Están usando agentes que actúan por ustedes hoy?
7. ¿Qué modelo de los nuevos (Qwen 3.5, GPT 5.4) les llamó la atención y por qué?

---

*Script generado por Nyx · 10 Mar 2026*
