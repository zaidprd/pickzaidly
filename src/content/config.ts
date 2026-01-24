import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  // Gunakan callback function untuk mengakses helper 'image'
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Zaidly'),
    // PERBAIKAN: Gunakan image() bukan z.string()
    image: z.object({
      url: image(), 
      alt: z.string(),
    }),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};