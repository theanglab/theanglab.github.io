import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    photo: z.string().optional().nullable(),
    draft: z.boolean().optional(),
  }),
});

const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    status: z.enum(['current', 'alumni']),
    photo: z.string().optional().nullable(),
    bio: z.string().optional().nullable(),
    years: z.string().optional().nullable(),
    next_position: z.string().optional().nullable(),
    website: z.string().optional().nullable(),
    order: z.coerce.number().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string(),
    year: z.coerce.number(),
    doi: z.string().optional().nullable(),
    url: z.string().optional().nullable(),
    highlighted: z.boolean().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string().optional().nullable(),
    order: z.coerce.number().optional(),
  }),
});

export const collections = { news, people, publications, research };
