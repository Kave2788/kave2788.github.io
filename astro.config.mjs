// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kave2788.github.io',
  base: '/sito-papa',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [alpinejs(), sitemap()],
});