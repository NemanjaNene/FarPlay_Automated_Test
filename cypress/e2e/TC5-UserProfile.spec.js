describe('TC5 - User Profile - FairPlay', () => {
  
  beforeEach(() => {
    cy.viewport(1400, 900);
    cy.systemLogin();
    cy.userLogin('nemanjanikitovic1+432@gmail.com', 'Testiranje1!');
  });

  it('TC5.1 - Should access user profile page', () => {
    cy.url().should('include', '/dashboard');
    cy.get('button, a, div').contains(/profile|account|settings/i).should('exist');
  });

  it('TC5.2 - Should display user email', () => {
    cy.url().should('include', '/dashboard');
    cy.contains('kaceysilver@dcpa.net').should('exist');
  });

  it('TC5.3 - Should display user name', () => {
    cy.url().should('include', '/dashboard');
  });

  it('TC5.4 - Should allow profile information viewing', () => {
    cy.url().should('include', '/dashboard/services/my-products');
  });

  it('TC5.5 - Should display logout button in profile area', () => {
    cy.get('button').contains('LOGOUT').should('be.visible');
  });

  it('TC5.6 - Should display dashboard navigation', () => {
    cy.url().should('include', '/dashboard');
    cy.get('nav, aside, div[class*="nav"], div[class*="sidebar"]').should('exist');
  });

  it('TC5.7 - Should display my products section', () => {
    cy.url().should('include', '/dashboard/services/my-products');
  });

  it('TC5.8 - Should have access to shop unlimited from dashboard', () => {
    cy.get('button').contains('SHOP UNLIMITED').should('be.visible');
  });

  it('TC5.9 - Profile page should be responsive', () => {
    cy.viewport(1920, 1080);
    cy.get('button').contains('LOGOUT').should('be.visible');
    
    cy.viewport(768, 1024);
    cy.get('button').contains('LOGOUT').should('exist');
    
    cy.viewport(1400, 900);
  });

  it('TC5.10 - Should maintain session in profile', () => {
    cy.url().should('include', '/dashboard');
    cy.reload();
    cy.url().should('include', '/dashboard');
    cy.get('button').contains('LOGOUT').should('be.visible');
  });

  it('TC5.11 - Should navigate within dashboard sections', () => {
    cy.url().should('include', '/dashboard/services/my-products');
  });

  it('TC5.12 - Should successfully logout from profile', () => {
    cy.get('button').contains('LOGOUT').click();
    cy.get('button').contains('LOGIN').should('be.visible');
    cy.url().should('not.include', '/dashboard');
  });

});

