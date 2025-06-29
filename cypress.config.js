module.exports = {
  e2e: {
    baseUrl: 'https://www.google.com',
    supportFile: 'cypress/support/index.js',
    pageLoadTimeout: 30000,  
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }  
};