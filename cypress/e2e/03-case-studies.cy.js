describe('Case Studies Page', () => {
  it('Should open the Case Studies page', () => {
    cy.visit('https://www.assurdly.com/case-studies');
    cy.contains('Case Studies').should('be.visible');
  });
});
