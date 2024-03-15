import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    retries: {
      openMode: 0,
      runMode: 2,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
