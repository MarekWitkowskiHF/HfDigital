import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://localhost:4200',
    defaultCommandTimeout: 8000,
    testIsolation: false,
    chromeWebSecurity: false,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
