describe('Assurdly FAQ Navigation Test', () => {
  it('Opens the FAQ section via the Resources dropdown', () => {
    // Step 1: Visit the Assurdly homepage
    cy.visit('https://www.assurdly.com/');

    // Step 2: Click on the "Resources" dropdown to open it
    cy.get('.w-dropdown-toggle').contains('Resources').click({ force: true });

    // Step 3: Wait for the dropdown to fully open
    cy.wait(1000);

    // Step 4: Click the FAQ link
    cy.contains('FAQ').click({ force: true });

    // Step 5: Check if the FAQ section is visible after clicking
    cy.get('h1, h2, section')
      .contains('Frequently Asked Questions') // Adjust if needed
      .should('be.visible');

    // Step 6: Log success message
    cy.log('FAQ section is visible after clicking the link.');
  });
});
