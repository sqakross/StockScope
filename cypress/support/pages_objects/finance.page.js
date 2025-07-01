import BasePage from './base.page';

export default class FinancePage extends BasePage {
  constructor() {
    super();
    this.titleSelector = 'head > title';
    this.stockCardsSelector = '.ZvmM7';
  }

  goToFinance() {
    this.navigate('/finance');
  }

  getTitle() {
    return cy.title();
  }

  getStocksOnPage() {
    // returns array of stock names from attribute
    return cy.get(this.stockCardsSelector).then($els => {
      return Cypress._.map($els, el => el.textContent.trim());
    });
  }
}