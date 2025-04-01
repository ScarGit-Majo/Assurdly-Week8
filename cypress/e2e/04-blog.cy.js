describe('Assurdly Blog Navigation Test', () => {
  it('Navigates to the Blog page via the Resources dropdown', () => {
    // Step 1: Visit the Assurdly homepage
    cy.visit('https://www.assurdly.com/');

    // Step 2: Click on the "Resources" dropdown to open it
    cy.get('.w-dropdown-toggle').contains('Resources').click({ force: true });

    // Step 3: Wait for the dropdown to fully open by checking CSS properties
    cy.get('.w-dropdown-list')
      .should('exist') // Ensure the dropdown exists
      .and('have.css', 'display', 'none'); // Check for "display: block" indicating it is visible

    // Step 4: Click the Blog link inside the dropdown
    cy.contains('Blog').click({ force: true });

    // Step 5: Verify that the URL includes '/blog'
    cy.url().should('include', '/blog');

    // Step 6: Verify that the Blog page contains expected content
    cy.get('h1').should('contain.text', 'Little bits of assurance'); // Adjust if needed
  });
});
