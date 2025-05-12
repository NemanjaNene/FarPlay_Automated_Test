Cypress.Commands.add('userLogin', (email, password) => {
    cy.get('button:contains("Login")').click(); 
    cy.get('input[name="email"]').type(mail);
    cy.get('input[name="password"]').type(password);
    cy.contains('button', 'LOGIN').click();

  });
  
  