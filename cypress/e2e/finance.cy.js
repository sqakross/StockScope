import FinancePage from '../support/pages_objects/finance.page';


context('Google Finance POM Advanced Tests', () => {
  const finance = new FinancePage();
  let expectedStocks;

  before(() => {
    cy.fixture('stocks').then(data => {
      expectedStocks = data.expected;
    });
  });

  beforeEach(() => {
    finance.goToFinance()
  })
  
  it('should have title containing Google Finance', () => {
    finance.getTitle().should('include', 'Google Finance');
  });

  it('should report only missing expected symbols', () => {
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

