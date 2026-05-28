import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: z.object({
    title: z.string(),
    episode: z.number(),
    season: z.number().default(1),
    date: z.string(), // YYYY-MM-DD
    duration: z.string(), // MM:SS or H:MM:SS
    durationSeconds: z.number(),
    youtube: z.string().url(),
    youtubeId: z.string(),
    thumbnail: z.string().optional(), // local path e.g. /thumbnails/ep01.webp
    spotify: z.string().url(),
    description: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    ogImage: z.string().url().optional(),
    hosts: z.array(z.object({
      name: z.string(),
      linkedin: z.string().url(),
    })),
    topics: z.array(z.string()),
    keywords: z.array(z.string()).optional(),
    relatedEpisodes: z.array(z.number().int().positive()).optional(),
    // Campos estructurados opcionales — alimentan schema JSON-LD y habilitan render dedicado
    excerpt: z.string().max(280).optional(),
    keyTakeaways: z.array(z.string()).optional(),
    timestamps: z.array(z.object({
      time: z.string(), // "00:05:30" o "5:30"
      seconds: z.number().int().nonnegative(),
      label: z.string(),
    })).optional(),
    resources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      type: z.enum(['tool', 'article', 'paper', 'book', 'video', 'repo', 'other']).default('other'),
      description: z.string().optional(),
    })).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    guests: z.array(z.object({
      name: z.string(),
      role: z.string().optional(),
      company: z.string().optional(),
      bio: z.string().optional(),
      linkedin: z.string().url().optional(),
    })).optional(),
    updatedAt: z.string().optional(), // YYYY-MM-DD
  }),
});

/**
 * Guías pilar evergreen — /guias/{slug}/
 *
 * Páginas-pilar de tema cruzadas a los episodios donde se habló del tema.
 * Plan completo en docs/SEO-GROWTH-STRATEGY.md (Sprint SEO Growth 2026-05).
 *
 * Distinto de `/temas/{slug}/` (cluster pages ligeras, pendientes en
 * ROADMAP) — `/guias/` son guías deep evergreen que rankean head terms.
 */
const guias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guias' }),
  schema: z.object({
    title: z.string(),
    date: z.string(), // YYYY-MM-DD — fecha de publicación
    updatedAt: z.string().optional(), // YYYY-MM-DD — última actualización
    description: z.string(), // resumen corto para cards y meta fallback
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    focusKeyword: z.string().optional(), // keyword head del cluster
    ogImage: z.string().url().optional(),
    keywords: z.array(z.string()).optional(),
    relatedEpisodes: z.array(z.number().int().positive()).optional(),
    relatedGuides: z.array(z.string()).optional(), // slugs de otras guías
    // Funnel CTA contextual al final de la guía (CAR, comunidad Rodrigo, etc.)
    funnel: z.object({
      type: z.enum(['premium', 'free', 'community']).default('community'),
      label: z.string(), // título del bloque CTA
      cta: z.string().optional(), // copy del párrafo CTA
      ctaButton: z.string().optional(), // texto del botón (default: "Ir →")
      url: z.string().url(), // destino con UTM
    }).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    resources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      description: z.string().optional(),
    })).optional(),
  }),
});

/**
 * Glosario — /glosario/{slug}/
 *
 * Entradas cortas de términos técnicos que aparecen recurrentemente en
 * el podcast y los hubs (MCP, tool use, agente, MoE, RAG, computer use,
 * vibecoding, fine-tuning, context window, etc).
 *
 * Funciona como capa programática de SEO: cada entrada targetea "qué es
 * [término]" y enlaza al episodio + hub donde se desarmó. Pensado para
 * AI Overviews — direct-answer-first, JSON-LD DefinedTerm.
 */
const glosario = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/glosario' }),
  schema: z.object({
    term: z.string(), // término canónico (ej. "MCP", "Agente de IA")
    aliases: z.array(z.string()).optional(), // sinónimos / variantes
    date: z.string(),
    updatedAt: z.string().optional(),
    description: z.string(), // definición corta para meta + cards
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    relatedEpisodes: z.array(z.number().int().positive()).optional(),
    relatedGuides: z.array(z.string()).optional(), // slugs de hubs
    relatedGlossary: z.array(z.string()).optional(), // slugs de otras entradas del glosario
  }),
});

export const collections = { episodes, guias, glosario };
