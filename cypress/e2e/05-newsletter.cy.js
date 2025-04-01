describe('Assurdly Newsletter Navigation Test', () => {
  it('Navigates to the Newsletter page via the Resources dropdown', () => {
    // Step 1: Visit the Assurdly homepage
    cy.visit('https://www.assurdly.com/');

    // Step 2: Click on the "Resources" dropdown to open it
    cy.get('.w-dropdown-toggle').contains('Resources').click({ force: true });

    // Step 3: Wait for a short delay to allow the dropdown to open
    cy.wait(1000); // Ensure dropdown is open

    // Step 4: Get the Newsletter link and verify its URL
    cy.contains('Newsletter')
      .should('have.attr', 'href') // Ensure it has an href attribute
      .then((href) => {
        expect(href).to.include('substack.com'); // Confirm it redirects to Substack
      });

    // Step 5: Click the Newsletter link (opens in a new tab, Cypress won’t follow)
    cy.contains('Newsletter').click({ force: true });

    // Step 6: Log a success message
    cy.log('Newsletter link successfully clicked, and it redirects externally.');
  });
});
