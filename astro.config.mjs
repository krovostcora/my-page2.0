import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://krovostcora.github.io',
  base: '/my-page2.0',
    // build: {
    //     assets: 'assets'
    // }
});
