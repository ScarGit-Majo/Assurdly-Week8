describe('Home Page', () => {
  it('Should open the homepage', () => {
    cy.visit('https://www.assurdly.com/');
    cy.title().should('include', 'Assurdly'); // Assertion
  });
});
