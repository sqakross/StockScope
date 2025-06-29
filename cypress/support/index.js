import './commands';

// Ignore cross-origin script errors on Google Finance
Cypress.on('uncaught:exception', (err, runnable) => {
  // ignore Script error caused by cross-origin scripts
  if (err.message && err.message.includes('Script error')) {
    return false;
  }
  return true;
});
