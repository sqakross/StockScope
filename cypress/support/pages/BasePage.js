export default class BasePage {
  navigate(path = '') {
    cy.visit(path);
  }

  get(selector) {
    return cy.get(selector);
  }

  find(selector) {
    return cy.xpath(selector);
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
}