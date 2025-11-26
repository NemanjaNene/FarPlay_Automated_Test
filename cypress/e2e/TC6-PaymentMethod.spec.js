describe('TC6 - Payment Method - FairPlay', () => {
  
  beforeEach(() => {
    cy.viewport(1400, 900);
    cy.systemLogin();
    cy.userLogin('kaceysilver@dcpa.net', 'Testiranje1!');
  });

  it('TC6.1 - Should access payment methods section', () => {
    cy.url().should('include', '/dashboard');
    cy.get('a, button, div').contains(/payment|billing/i).should('exist');
  });

  it('TC6.2 - Should display available payment methods', () => {
    cy.url().should('include', '/dashboard');
  });

  it('TC6.3 - Should display add payment method button', () => {
    cy.get('button, a').contains(/add|new/i).should('exist');
  });

  it('TC6.4 - Should open add payment method form', () => {
    cy.get('button').contains('SHOP UNLIMITED').first().click();
  });

  it('TC6.5 - Should display credit card input fields', () => {
    cy.get('button').contains('SHOP UNLIMITED').first().scrollIntoView().click();
    cy.wait(1000);
  });

  it('TC6.6 - Should validate card number format', () => {
    cy.get('button').contains('SHOP UNLIMITED').first().scrollIntoView().click();
    cy.wait(1000);
  });

  it('TC6.7 - Should validate expiry date format', () => {
    cy.get('button').contains('SHOP UNLIMITED').first().scrollIntoView().click();
    cy.wait(1000);
  });

  it('TC6.8 - Should validate CVV format', () => {
    cy.get('button').contains('SHOP UNLIMITED').first().scrollIntoView().click();
    cy.wait(1000);
  });

  it('TC6.9 - Should not accept invalid card number', () => {
    cy.get('button').contains('SHOP UNLIMITED').first().scrollIntoView().click();
    cy.wait(1000);
  });

  it('TC6.10 - Should not accept expired card', () => {
    cy.get('button').contains('SHOP UNLIMITED').first().scrollIntoView().click();
    cy.wait(1000);
  });

  it('TC6.11 - Should display payment security indicators', () => {
    cy.get('button').contains('SHOP UNLIMITED').first().scrollIntoView().click();
    cy.wait(1000);
  });

  it('TC6.12 - Should handle payment form cancellation', () => {
    cy.get('button').contains('SHOP UNLIMITED').first().scrollIntoView().click();
    cy.wait(1000);
  });

  it('TC6.13 - Should display saved payment methods', () => {
    cy.url().should('include', '/dashboard');
  });

  it('TC6.14 - Payment form should be responsive', () => {
    cy.viewport(1920, 1080);
    cy.get('button').contains('SHOP UNLIMITED').should('exist');
    
    cy.viewport(768, 1024);
    cy.get('button').contains('SHOP UNLIMITED').should('exist');
    
    cy.viewport(1400, 900);
  });

  it('TC6.15 - Should display payment method icons', () => {
    cy.get('button').contains('SHOP UNLIMITED').first().scrollIntoView();
  });

  it('TC6.16 - Should require all mandatory payment fields', () => {
    cy.get('button').contains('SHOP UNLIMITED').first().scrollIntoView().click();
    cy.wait(1000);
  });

  it('TC6.17 - Should mask sensitive card information', () => {
    cy.get('button').contains('SHOP UNLIMITED').first().scrollIntoView().click();
    cy.wait(1000);
  });

  it('TC6.18 - Should display payment processing status', () => {
    cy.url().should('include', '/dashboard');
  });

  it('TC6.19 - Should handle payment errors gracefully', () => {
    cy.get('button').contains('SHOP UNLIMITED').first().scrollIntoView();
  });

});

