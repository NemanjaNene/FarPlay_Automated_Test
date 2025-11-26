Cypress.Commands.add('systemLogin', () => {
    cy.visit('https://frontend.dev.fairplay-mobile.com/', {
      auth: {
        username: 'Alois',
        password: 'Fair2025Play!&M0bile8ee&!'
      }
    });
  });
  