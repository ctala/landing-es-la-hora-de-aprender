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

export const collections = { episodes };
