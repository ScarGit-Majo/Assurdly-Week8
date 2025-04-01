describe('Services Section', () => {
  it('Should navigate to the Services section from the homepage', () => {
    cy.visit('https://www.assurdly.com/');

    // Click on "Services" in the navbar
    cy.contains('Services').click();
  });
});
