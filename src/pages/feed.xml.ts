import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
    const episodes = await getCollection('episodes');
    const sorted = episodes.sort((a, b) => b.data.episode - a.data.episode);

    return rss({
        title: 'Es la Hora de Aprender',
        description: 'Tecnologías, IA y el futuro del ecosistema digital analizado semanalmente por quienes están en la cancha.',
        site: context.site!.toString(),
        xmlns: {
            itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd',
            googleplay: 'http://www.google.com/schemas/play-podcasts/1.0',
            spotify: 'http://www.spotify.com/ns/rss',
        },
        customData: `
            <language>es-CL</language>
            <copyright>© ${new Date().getFullYear()} Cristian Tala, Diego Arias, Rodrigo Rojo</copyright>
            <itunes:author>Cristian Tala, Diego Arias, Rodrigo Rojo</itunes:author>
            <itunes:summary>Tecnologías, IA y el futuro del ecosistema digital analizado semanalmente por quienes están en la cancha.</itunes:summary>
            <itunes:subtitle>Tech Podcast sobre IA, Startups y Automatización</itunes:subtitle>
            <itunes:owner>
                <itunes:name>Cristian Tala</itunes:name>
                <itunes:email>cristian@cristiantala.com</itunes:email>
            </itunes:owner>
            <itunes:explicit>no</itunes:explicit>
            <itunes:category text="Technology"/>
            <itunes:category text="Business"><itunes:category text="Entrepreneurship"/></itunes:category>
            <itunes:category text="Education"><itunes:category text="How To"/></itunes:category>
            <itunes:image href="https://eslahoradeaprender.com/og-image.jpg"/>
            <itunes:type>episodic</itunes:type>
            <googleplay:author>Cristian Tala, Diego Arias, Rodrigo Rojo</googleplay:author>
            <googleplay:description>Tecnologías, IA y el futuro del ecosistema digital analizado semanalmente por quienes están en la cancha.</googleplay:description>
            <googleplay:image href="https://eslahoradeaprender.com/og-image.jpg"/>
            <googleplay:category text="Technology"/>
            <googleplay:explicit>No</googleplay:explicit>
            <spotify:countryOfOrigin>cl</spotify:countryOfOrigin>
        `,
        items: sorted.map((ep) => ({
            title: ep.data.title,
            link: `/episodios/${ep.id}`,
            pubDate: new Date(ep.data.date + 'T00:00:00-03:00'),
            description: ep.data.description,
            customData: `
                <itunes:title>${ep.data.title}</itunes:title>
                <itunes:author>Cristian Tala, Diego Arias, Rodrigo Rojo</itunes:author>
                <itunes:summary>${ep.data.description}</itunes:summary>
                <itunes:duration>${ep.data.duration}</itunes:duration>
                <itunes:explicit>no</itunes:explicit>
                <itunes:episodeType>full</itunes:episodeType>
                <itunes:season>${ep.data.season}</itunes:season>
                <itunes:episode>${ep.data.episode}</itunes:episode>
                <itunes:image href="https://img.youtube.com/vi/${ep.data.youtubeId}/maxresdefault.jpg"/>
                <googleplay:description>${ep.data.description}</googleplay:description>
                <googleplay:image href="https://img.youtube.com/vi/${ep.data.youtubeId}/maxresdefault.jpg"/>
                <enclosure url="${ep.data.youtube}" type="video/mp4" length="0"/>
                ${ep.data.topics.map(t => `<category>${t}</category>`).join('\n                ')}
            `,
        })),
    });
}
