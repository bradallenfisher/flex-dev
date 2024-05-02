describe('Homepage', () => {
  it('should see the home page exists', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.get('div').should('exist');
  })
})