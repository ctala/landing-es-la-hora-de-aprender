import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://eslahoradeaprender.com',
  integrations: [],

  vite: {
    plugins: [tailwindcss()],
  },
});