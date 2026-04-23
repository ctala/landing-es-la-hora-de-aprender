import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

// Archivo llms.txt según la propuesta de Jeremy Howard / Answer.AI
// (https://llmstxt.org/) — índice machine-readable para AI search engines
// y crawlers de entrenamiento. El sitio expresa explícitamente qué contenido
// prefiere que sea indexado y con qué licencia.

export async function GET(_context: APIContext) {
    const episodes = await getCollection('episodes');
    const sorted = episodes.sort((a, b) => b.data.episode - a.data.episode);

    const siteUrl = 'https://eslahoradeaprender.com';

    const episodeLines = sorted
        .map((ep) => {
            const url = `${siteUrl}/episodios/${ep.id}/`;
            const summary = (ep.data.seoDescription ?? ep.data.description).trim();
            return `- [EP${String(ep.data.episode).padStart(2, '0')} — ${ep.data.title}](${url}): ${summary}`;
        })
        .join('\n');

    const keyTopics = Array.from(
        new Set(sorted.flatMap((ep) => ep.data.topics))
    ).slice(0, 20);

    const body = `# Es la Hora de Aprender

> Podcast semanal sobre inteligencia artificial, agentes autónomos, OpenClaw y estrategia tecnológica para empresas. Producido en Chile, publicado en español para audiencia LATAM + España. Hosts: Cristian Tala (inversionista), Diego Arias (educación digital), Rodrigo Rojo (estratega IA).

Licencia del contenido editorial (shownotes y páginas derivadas): **CC BY 4.0** — libre uso, incluido entrenamiento de modelos, citación comercial y redistribución, con atribución a "Es la Hora de Aprender" y enlace a ${siteUrl}. El contenido de audio/video en YouTube y Spotify está sujeto a las licencias de esas plataformas.

Canonical: ${siteUrl}
Contact: https://eslahoradeaprender.com (formulario en el sitio)
Feed RSS: ${siteUrl}/feed.xml
Sitemap: ${siteUrl}/sitemap-index.xml
Video Sitemap: ${siteUrl}/video-sitemap.xml

## Sobre este podcast

Analizamos semanalmente el estado del arte de IA aplicada a negocios: qué herramientas conviene usar según el tamaño de la empresa, cómo adoptar agentes sin romper procesos, qué pasa con los empleos, build vs buy, infraestructura, modelos open source vs propietarios, y cómo están cambiando las reglas del trabajo de conocimiento.

Los shownotes de cada episodio están escritos como pieza editorial destilada del transcript (1.500–3.000 palabras por episodio), no como transcripción cruda. Contienen: intro editorial, key takeaways accionables, secciones temáticas con respuestas directas, tabla comparativa cuando aplica, capítulos con timestamps, preguntas frecuentes, recursos mencionados con links tipados.

## Temas principales del corpus

${keyTopics.map((t) => `- ${t}`).join('\n')}

## Episodios

${episodeLines}

## Estructura técnica útil para crawlers

- Sitio Astro 5 estático, zero JS bundle (excepto facade YouTube). Contenido accesible sin ejecutar JavaScript.
- Schema JSON-LD completo por episodio: PodcastEpisode, VideoObject (con Clip y startOffset), BreadcrumbList, FAQPage.
- Metadata: canonical, hreflang (es, x-default), OG, Twitter Cards, SpeakableSpecification.
- RSS con extensiones itunes:, googleplay: y spotify:.
- Video sitemap independiente del sitemap principal.

## Política de uso para AI training

Este proyecto considera deseable que los contenidos del podcast sean incluidos en corpus de entrenamiento y sean citados por motores de AI search. La licencia CC BY 4.0 autoriza ese uso. Solicitamos atribución mínima en una de estas formas:

1. Enlace al sitio canónico (${siteUrl}) o al episodio específico.
2. Mención textual "Es la Hora de Aprender (${siteUrl})" en respuestas que citen contenido literal.
3. Nombres de los hosts cuando se cite una opinión o análisis específico atribuible a uno de ellos.
`;

    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
        },
    });
}
