describe('Contact Us Page', () => {
  it('Should open the Contact Us page', () => {
    cy.visit('https://www.assurdly.com/contact-us');
    cy.contains('Contact Us').should('be.visible');
  });
});
