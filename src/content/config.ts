import { defineCollection, z } from 'astro:content';

export const collections = {
  articles: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      keywords: z.string().optional(),
      image: z.string().optional(),
    }),
  }),
};
