describe('verify head start study', () => {
  it('find head start ', function () {
    cy.visit("https://www.icpsr.umich.edu");
    cy.get('#test-search-box').type("head start");
    cy.get("form").submit();
    cy.get("h1").contains("Search Results").should("exist");
  });

  it('open study ', function () {
    cy.get('a[href$="studies/4134"]').click();
    cy.get("h1").contains("ICPSR 4134").should("exist");
  });
  it('verify summary tab', function () {
    cy.get('#summaryLink').click();
    cy.location('pathname').should('contain', '/summary');
  });
  it('data documentation tab ', function () {
    cy.get('#datadocumentationLink').click();
    cy.location('pathname').should('contain', '/datadocumentation');
  });

  it('variables tab ', function () {
    cy.get('#variablesLink').click();
    cy.location('pathname').should('contain', '/variables');
  });
})