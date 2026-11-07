import { defineConfig } from 'astro/config';

// Statische Ausgabe für GitHub Pages mit eigener Domain (base = '/').
export default defineConfig({
  site: 'https://felixundlouheiraten.de',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
