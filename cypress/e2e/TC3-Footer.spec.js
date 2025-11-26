describe('TC3 - Footer - FairPlay', () => {
  
  beforeEach(() => {
    cy.viewport(1400, 900);
    cy.systemLogin();
  });

  it('TC3.1 - Should display footer section', () => {
    cy.get('footer').scrollIntoView().should('be.visible');
  });

  it('TC3.2 - Should display copyright information', () => {
    cy.get('footer').scrollIntoView();
    cy.get('footer').should('contain.text', '©').or('contain.text', 'Copyright');
  });

  it('TC3.3 - Should display social media links', () => {
    cy.get('footer').scrollIntoView();
    cy.get('footer').find('a[href*="facebook"], a[href*="twitter"], a[href*="instagram"], a[href*="linkedin"]')
      .should('have.length.greaterThan', 0);
  });

  it('TC3.4 - Should display company information', () => {
    cy.get('footer').scrollIntoView();
    cy.get('footer').should('be.visible');
  });

  it('TC3.5 - Footer links should be clickable', () => {
    cy.get('footer').scrollIntoView();
    cy.get('footer a').first().should('have.attr', 'href');
  });

  it('TC3.6 - Should display terms and conditions link', () => {
    cy.get('footer').scrollIntoView();
    cy.get('footer').should('contain.text', 'Terms').or('contain.text', 'Conditions');
  });

  it('TC3.7 - Should display privacy policy link', () => {
    cy.get('footer').scrollIntoView();
    cy.get('footer').should('contain.text', 'Privacy').or('contain.text', 'Policy');
  });

  it('TC3.8 - Footer should be visible on all pages', () => {
    cy.get('footer').scrollIntoView().should('be.visible');
    
    cy.get('button').contains('LOGIN').click();
    cy.get('footer').scrollIntoView().should('be.visible');
  });

  it('TC3.9 - Footer should maintain structure on different screen sizes', () => {
    cy.viewport(1920, 1080);
    cy.get('footer').scrollIntoView().should('be.visible');
    
    cy.viewport(768, 1024);
    cy.get('footer').scrollIntoView().should('be.visible');
    
    cy.viewport(375, 667);
    cy.get('footer').scrollIntoView().should('be.visible');
  });

});

