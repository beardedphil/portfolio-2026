// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/portfolio-2026/',
  site: 'https://beardedphil.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});