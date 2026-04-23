import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
    const episodes = await getCollection('episodes');
    const sorted = episodes.sort((a, b) => a.data.episode - b.data.episode);

    const items = sorted.map((ep) => `
  <url>
    <loc>https://eslahoradeaprender.com/episodios/${ep.id}/</loc>
    <video:video>
      <video:thumbnail_loc>https://img.youtube.com/vi/${ep.data.youtubeId}/maxresdefault.jpg</video:thumbnail_loc>
      <video:title>${ep.data.seoTitle || ep.data.title} | Es la Hora de Aprender EP${String(ep.data.episode).padStart(2, '0')}</video:title>
      <video:description>${ep.data.description}</video:description>
      <video:content_loc>${ep.data.youtube}</video:content_loc>
      <video:player_loc allow_embed="yes" autoplay="ap=1">https://www.youtube.com/embed/${ep.data.youtubeId}</video:player_loc>
      <video:duration>${ep.data.durationSeconds}</video:duration>
      <video:publication_date>${ep.data.date}T00:00:00-03:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      ${ep.data.topics.map(t => `<video:tag>${t}</video:tag>`).join('\n      ')}
      <video:category>Technology</video:category>
      <video:uploader info="https://www.youtube.com/@EsLaHoraDeAprender_com">Es la Hora de Aprender</video:uploader>
      <video:requires_subscription>no</video:requires_subscription>
      <video:live>no</video:live>
    </video:video>
  </url>`).join('');

    return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${items}
</urlset>`,
        { headers: { 'Content-Type': 'application/xml' } }
    );
}
