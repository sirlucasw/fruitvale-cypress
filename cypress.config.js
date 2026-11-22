const { defineConfig } = require('cypress');

// Ambiente: dev (padrão), stg ou prod  ->  npx cypress run --env ambiente=stg
const ambientes = {
  dev:  { baseUrl: 'http://localhost:5173',          apiUrl: 'http://localhost:3000' },
  stg:  { baseUrl: 'https://stg.fruitvale.exemplo',  apiUrl: 'https://api-stg.fruitvale.exemplo' },
  prod: { baseUrl: 'https://fruitvale.exemplo',      apiUrl: 'https://api.fruitvale.exemplo' },
};

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    setupNodeEvents(on, config) {
      const amb = ambientes[config.env.ambiente || 'dev'];
      config.baseUrl = amb.baseUrl;
      config.env.apiUrl = amb.apiUrl;
      return config;
    },
  },
  viewportWidth: 1366,
  viewportHeight: 768,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
});
