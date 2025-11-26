describe('TC1 - Login - FairPlay', () => {
  
  beforeEach(() => {
    cy.viewport(1400, 900);
    cy.systemLogin();
  });

  it('TC1.1 - Should successfully login with valid credentials', () => {
    cy.userLogin('nemanjanikitovic1+432@gmail.com', 'Testiranje1!');
    cy.url().should('include', '/dashboard/services/my-products');
    cy.get('button').contains('LOGOUT').should('be.visible');
  });

  it('TC1.2 - Should show error with invalid email', () => {
    cy.get('button').contains('LOGIN').should('be.visible').click();
    cy.get('h1').contains('LOG IN').should('be.visible');
    
    cy.get('input[placeholder="Enter your email"]').type('invalidemail@test.com');
    cy.get('input[placeholder="Enter your password"]').type('Testiranje1!');
    cy.get('button').contains('LOG IN').click();
    
    cy.url().should('not.include', '/dashboard');
  });

  it('TC1.3 - Should show error with invalid password', () => {
    cy.get('button').contains('LOGIN').should('be.visible').click();
    cy.get('h1').contains('LOG IN').should('be.visible');
    
    cy.get('input[placeholder="Enter your email"]').type('kaceysilver@dcpa.net');
    cy.get('input[placeholder="Enter your password"]').type('WrongPassword123!');
    cy.get('button').contains('LOG IN').click();
    
    cy.url().should('not.include', '/dashboard');
  });

  it('TC1.4 - Should show error with empty email field', () => {
    cy.get('button').contains('LOGIN').should('be.visible').click();
    cy.get('h1').contains('LOG IN').should('be.visible');
    
    cy.get('input[placeholder="Enter your password"]').type('Testiranje1!');
    cy.get('button').contains('LOG IN').click();
    
    cy.get('input[placeholder="Enter your email"]').then($input => {
      expect($input[0].validationMessage).to.not.be.empty;
    });
  });

  it('TC1.5 - Should show error with empty password field', () => {
    cy.get('button').contains('LOGIN').should('be.visible').click();
    cy.get('h1').contains('LOG IN').should('be.visible');
    
    cy.get('input[placeholder="Enter your email"]').type('kaceysilver@dcpa.net');
    cy.get('button').contains('LOG IN').click();
    
    cy.get('input[placeholder="Enter your password"]').then($input => {
      expect($input[0].validationMessage).to.not.be.empty;
    });
  });

  it('TC1.6 - Should show error with both fields empty', () => {
    cy.get('button').contains('LOGIN').should('be.visible').click();
    cy.get('h1').contains('LOG IN').should('be.visible');
    
    cy.get('button').contains('LOG IN').click();
    
    cy.get('input[placeholder="Enter your email"]').should('be.visible');
    cy.url().should('not.include', '/dashboard');
  });

  it('TC1.7 - Should show error with invalid email format', () => {
    cy.get('button').contains('LOGIN').should('be.visible').click();
    cy.get('h1').contains('LOG IN').should('be.visible');
    
    cy.get('input[placeholder="Enter your email"]').type('notanemail');
    cy.get('input[placeholder="Enter your password"]').type('Testiranje1!');
    cy.get('button').contains('LOG IN').click();
    
    cy.url().should('not.include', '/dashboard');
  });

  it('TC1.8 - Should successfully logout', () => {
    cy.userLogin('nemanjanikitovic1+432@gmail.com', 'Testiranje1!');
    cy.get('button').contains('LOGOUT').should('be.visible').click();
    
    cy.get('button').contains('LOGIN').should('be.visible');
    cy.url().should('not.include', '/dashboard');
  });

  it('TC1.9 - Login form should be accessible and visible', () => {
    cy.get('button').contains('LOGIN').should('be.visible').click();
    
    cy.get('h1').contains('LOG IN').should('be.visible');
    cy.get('input[placeholder="Enter your email"]').should('be.visible').and('be.enabled');
    cy.get('input[placeholder="Enter your password"]').should('be.visible').and('be.enabled');
    cy.get('button').contains('LOG IN').should('be.visible').and('be.enabled');
  });

  it('TC1.10 - Password field should mask input', () => {
    cy.get('button').contains('LOGIN').should('be.visible').click();
    
    cy.get('input[placeholder="Enter your password"]')
      .should('have.attr', 'type', 'password');
  });

  it('TC1.11 - Should maintain session after page refresh', () => {
    cy.userLogin('nemanjanikitovic1+432@gmail.com', 'Testiranje1!');
    cy.url().should('include', '/dashboard/services/my-products');
    
    cy.reload();
    
    cy.url().should('include', '/dashboard');
    cy.get('button').contains('LOGOUT').should('be.visible');
  });

});

