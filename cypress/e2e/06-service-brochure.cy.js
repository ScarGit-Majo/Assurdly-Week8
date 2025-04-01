describe('Assurdly Service Brochure Navigation Test', () => {
  it('Verifies and clicks the Service Brochure link inside the dropdown', () => {
    // Step 1: Visit the Assurdly homepage
    cy.visit('https://www.assurdly.com/');

    // Step 2: Click on the "Resources" dropdown to open it
    cy.get('.w-dropdown-toggle').contains('Resources').click({ force: true });

    // Step 3: Wait for a short delay to allow the dropdown to open
    cy.wait(1000); // Ensure dropdown is open

    // Step 4: Get the Service Brochure link and verify its URL
    cy.contains('Service Brochure')
      .should('have.attr', 'href') // Ensure it has an href attribute
      .then((href) => {
        expect(href).to.include('.pdf'); // Verify it links to a PDF file
      });

    // Step 5: Click the Service Brochure link (opens in a new tab, Cypress won’t follow)
    cy.contains('Service Brochure').click({ force: true });

    // Step 6: Log a success message
    cy.log('Service Brochure link successfully clicked, and it redirects to a PDF file.');
  });
});
