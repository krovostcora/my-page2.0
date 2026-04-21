import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // Розкоментуй для GitHub Pages:
  // site: 'https://YOUR_USERNAME.github.io',
  // base: '/anna-portfolio',
});
