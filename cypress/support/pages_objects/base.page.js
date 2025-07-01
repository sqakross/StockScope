export default class BasePage {
  navigate(path = '') {
    cy.visit(path);
  }

  get(selector) {
    return cy.get(selector);
  }

  find(selector) {
    return cy.get(selector);
  }

  click(selector) {
    this.get(selector).click();
  }

  type(selector, text) {
    this.get(selector).clear().type(text);
  }

  assertContains(selector, text) {
    this.get(selector).should('contain', text);
  }

  get(selector, option ={}) {
    const {flacky = false, ...cyOpions} = option;

    const timeout =
    cyOptions.timeout != null
      ? cyOptions.timeout
      : flaky
        ? 20_000
        : Cypress.config('defaultCommandTimeout');

    return cy.get(selector, { timeout, ...cyOptions });
  }  
}