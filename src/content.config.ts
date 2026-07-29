import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    platforms: z.array(z.object({ label: z.string(), url: z.string().url().optional() })),
    timeframe: z.string(),
    status: z.string(),
    role: z.string(),
    problem: z.string(),
    impact: z.array(z.string()),
    stack: z.object({
      frontend: z.array(z.string()),
      backend: z.array(z.string()),
      infra: z.array(z.string()),
    }),
    screens: z.array(
      z.object({
        label: z.string(),
        image: z.string().optional(),
        kind: z.enum(['mobile', 'web']).default('mobile'),
      }),
    ),
    order: z.number(),
  }),
});

export const collections = { projects };
