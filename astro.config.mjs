// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://felipehoffmann-portfolio.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap(), mdx()]
});