import FinancePage from '../support/pages/FinancePage';
import { assert } from 'chai';

context('Google Finance POM Advanced Tests', () => {
  const finance = new FinancePage();
  let expectedStocks;

  before(() => {
    cy.fixture('stocks').then(data => {
      expectedStocks = data.expected;
    });
  });

  it('should have title containing Google Finance', () => {
    finance.goToFinance();
    finance.getTitle().should('include', 'Google Finance');
  });

  it('should report only missing expected symbols', () => {
  finance.goToFinance();

  finance.getStocksOnPage().then(onPage => {
    const missing = expectedStocks.filter(sym => !onPage.includes(sym));
  
    cy.log(`Missing symbols: ${missing.join(', ')}`);
    expect(
      missing,
      `Expected symbols not found in UI: ${missing.join(', ')}`
    ).to.be.empty;
  });
});

  it('should report only unexpected symbols', () => {
    finance.goToFinance();
    finance.getStocksOnPage().then(onPage => {
    const extra = onPage.filter(sym => !expectedStocks.includes(sym));

    cy.log(`Unexpected symbols: ${extra.join(', ')}`);
    expect(
      extra,
      `Unexpected symbols found in UI: ${extra.join(', ')}`
      ).to.be.empty;
    });
  });
});

