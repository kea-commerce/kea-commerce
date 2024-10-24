import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run kea-shop:serve',
        production: 'nx run kea-shop:preview',
      },
      ciWebServerCommand: 'nx run kea-shop:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
