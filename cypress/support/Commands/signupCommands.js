Cypress.Commands.add('openSignUpForm', () => {
  cy.get('button').contains('SHOP UNLIMITED').first().click();
  cy.wait(1000);
  
  cy.url().should('include', '/shop');
  
  cy.get('button').contains('SHOP UNLIMITED').first().scrollIntoView().click();
  cy.wait(1500);
  
  cy.url().should('include', '/auth');
  
  cy.contains('button', 'SIGN UP').scrollIntoView().click();
  cy.wait(1000);
});

