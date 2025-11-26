Cypress.Commands.add('openSignUpForm', () => {
  cy.get('button').contains('SHOP UNLIMITED').first().scrollIntoView().click({ force: true });
  cy.wait(1000);
});

