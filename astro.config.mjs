import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  site: 'https://krovostcora.github.io/my-page2.0',
  base: '/my-page2.0/',
    // build: {
    //     assets: 'assets'
    // }
});