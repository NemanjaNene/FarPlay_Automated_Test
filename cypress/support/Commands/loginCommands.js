Cypress.Commands.add('userLogin', (email, password) => {
  cy.get('button').contains('LOGIN').should('be.visible').click()
  cy.get('h1').contains('LOG IN').should('be.visible')
  
  cy.get('input[placeholder="Enter your email"]')
    .should('be.visible')
    .type(email)
  
  cy.get('input[placeholder="Enter your password"]')
    .should('be.visible')
    .type(password)
  
  cy.get('button').contains('LOG IN').click()
  
  // Samo proveravamo URL i osnovne elemente nakon logina
  cy.url().should('include', '/dashboard/services/my-products')
  cy.get('button').contains('LOGOUT').should('be.visible')
  cy.get('button').contains('SHOP UNLIMITED').should('be.visible')
})