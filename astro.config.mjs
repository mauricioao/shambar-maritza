import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shambar-maritza.pe',
  base: '/',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  server: {
    port: 3000,
    host: true,
  },
});