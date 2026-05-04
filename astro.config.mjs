import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite:{
      plugins: [tailwindcss()],
  },
  site: 'https://krovostcora.github.io/my-page2.0',
  base: '/my-page2.0/',
    // build: {
    //     assets: 'assets'
    // }
});
