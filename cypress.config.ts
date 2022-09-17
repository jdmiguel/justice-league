import { defineConfig } from 'cypress';

export default defineConfig({
  defaultCommandTimeout: 5000,
  e2e: {
    baseUrl: 'http://localhost:8888',
  },
  fixturesFolder: false,
  projectId: '6owrko',
  screenshotOnRunFailure: false,
  scrollBehavior: 'nearest',
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
});
