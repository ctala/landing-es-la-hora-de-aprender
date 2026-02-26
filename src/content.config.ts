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
  }),
});

export const collections = { episodes };
