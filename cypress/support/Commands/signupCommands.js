Cypress.Commands.add('openSignUpForm', () => {
  cy.get('button').contains('SHOP UNLIMITED').first().click();
  cy.wait(2000);
  
  cy.url().should('include', '/shop');
  
  cy.scrollTo(0, 500);
  cy.wait(1000);
  
  cy.get('button').contains('SHOP UNLIMITED').eq(0).scrollIntoView().should('be.visible').click({ force: true });
  cy.wait(3000);
  
  cy.url({ timeout: 15000 }).should('include', '/auth');
  
  cy.contains('button', 'SIGN UP').should('be.visible').scrollIntoView().click();
  cy.wait(1500);
});

