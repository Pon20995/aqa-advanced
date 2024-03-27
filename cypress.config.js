import { defineConfig } from 'cypress';
import lib from 'cypress-mochawesome-reporter/lib/index.js';
const { beforeRunHook, afterRunHook } = lib;

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    env: {
      baseUrl: 'https://qauto.forstudy.space',
      customEnvVariable: 'https://qauto-staging.forstudy.space',
      users: {
        user1: {
          email: 'ozera123456789+1711464036597@gmail.com',
          password: 'Password1',
        },
        user2: {
          email: 'ozera123456789+1711464084047@gmail.com',
          password: 'Password1',
        },
        user3: {
          email: 'ozera123456789+1711495641706@gmail.com',
          password: 'Password1',
        },
      },
    },
    retries: {
      openMode: 0,
      runMode: 2,
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'my-reporter-for-cypress-tests',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });
      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
      config.baseUrl = config.env.baseUrl || 'https://qauto.forstudy.space';
      return config;
    },
  },
});
