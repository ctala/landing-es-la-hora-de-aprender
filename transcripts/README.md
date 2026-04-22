# Transcripts — archive local

Este directorio está pensado para guardar los transcripts originales de los episodios (exportados de Riverside, YouTube captions, o cualquier fuente) como **archive histórico** fuera del sitio web.

## Reglas

- **Los archivos de transcript (`*.txt`, `*.vtt`, `*.srt`, `*.md`) NO se commitean**. Están en el `.gitignore` local de este directorio.
- Este `README.md` sí queda versionado — documenta el protocolo para los 3 hosts y futuros colaboradores.
- Los transcripts **no se publican en la web**. El estándar editorial del proyecto es "modo B" — ver [`docs/agent-add-new-episode.md`](../docs/agent-add-new-episode.md) — que destila cada episodio en un editorial denso (~1.500-2.500 palabras), usando el transcript como fuente, no como contenido.

## Para qué sirven

- **Re-refactor editorial**: si mañana querés regenerar los shownotes de un episodio con un modelo mejor o una voz distinta, los transcripts son la fuente primaria.
- **Búsqueda semántica**: indexado vectorial local sobre todos los episodios para encontrar "¿en qué episodio hablamos de X?".
- **Análisis temático agregado**: clusters de temas, evolución de tópicos en el tiempo.
- **Generación de clips / shorts**: identificar los momentos clave con timestamps precisos.
- **Accesibilidad futura**: si se decide ofrecer transcript descargable, la fuente está lista.

## Convención de nombres

```
transcripts/
├── README.md                 # este archivo (versionado)
├── .gitignore                # ignora *.txt, *.md, *.vtt, *.srt (local)
├── ep01.txt                  # transcript Riverside crudo (NO versionado)
├── ep02.txt
├── ...
├── ep09.txt
└── raw/                      # exports originales con nombres largos (opcional)
    └── 00002870-20260217_eslahoradeaprender_0_transcript.txt
```

## Compartir entre hosts

Como los archivos no están en Git, usá el flujo actual (WhatsApp del grupo, Drive compartido, Dropbox). Si en el futuro decidimos versionar un subconjunto con scrub de privacidad (ver Opción B del plan), el protocolo se actualiza en este README.

## Privacidad

Los transcripts crudos pueden contener:
- Comentarios off-record sobre terceros (empresas, personas, deals)
- Información comercial/legal compartida entre hosts
- Muletillas, chistes internos, tangentes privadas

**Por eso nunca se commitean al repo público.** Si necesitás un transcript procesado para compartir fuera del grupo, aplicale primero un scrub manual.
