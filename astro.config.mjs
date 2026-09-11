// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Astro 7 usa 'jsx' por defecto, que elimina espacios entre texto y elementos
  // inline (<span>) dentro de párrafos. 'true' conserva el comportamiento anterior.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
