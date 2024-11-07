/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import webfontDownload from 'vite-plugin-webfont-dl';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/kea-shop',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap',
    ]),
  ],

  build: {
    outDir: '../../dist/apps/kea-shop',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
