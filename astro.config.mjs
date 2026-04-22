import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://krovostcora.github.io/anna-portfolio',
  base: '/anna-portfolio',
  build: {
    assets: 'assets'
  }
});
