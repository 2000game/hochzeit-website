import { defineConfig } from 'astro/config';

// Statische Ausgabe für GitHub Pages mit eigener Domain (base = '/').
export default defineConfig({
  // TODO: echte Domain eintragen, z. B. 'https://hochzeit-beispiel.de'
  site: 'https://example.invalid',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
