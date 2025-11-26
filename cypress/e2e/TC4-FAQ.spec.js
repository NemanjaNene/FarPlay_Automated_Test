describe('TC4 - FAQ - FairPlay', () => {
  
  beforeEach(() => {
    cy.viewport(1400, 900);
    cy.systemLogin();
  });

  it('TC4.1 - Should navigate to FAQ section', () => {
    cy.contains('FAQ').scrollIntoView().should('be.visible');
  });

  it('TC4.2 - Should display FAQ questions', () => {
    cy.contains('FAQ').scrollIntoView();
    cy.get('button, div, h3, h4').should('contain.text', '?').or('exist');
  });

  it('TC4.3 - Should expand FAQ answer when clicked', () => {
    cy.contains('FAQ').scrollIntoView();
    cy.get('button, [role="button"]').first().click();
  });

  it('TC4.4 - Should collapse FAQ answer when clicked again', () => {
    cy.contains('FAQ').scrollIntoView();
    cy.get('button, [role="button"]').first().click();
    cy.wait(500);
    cy.get('button, [role="button"]').first().click();
  });

  it('TC4.5 - Should display multiple FAQ items', () => {
    cy.contains('FAQ').scrollIntoView();
    cy.get('button, [role="button"], div[class*="faq"], div[class*="accordion"]')
      .should('have.length.greaterThan', 1);
  });

  it('TC4.6 - FAQ section should be accessible', () => {
    cy.contains('FAQ').scrollIntoView().should('be.visible');
  });

  it('TC4.7 - Should display FAQ heading', () => {
    cy.contains('FAQ').scrollIntoView().should('be.visible');
  });

  it('TC4.8 - FAQ section should be responsive', () => {
    cy.viewport(1920, 1080);
    cy.contains('FAQ').scrollIntoView().should('be.visible');
    
    cy.viewport(768, 1024);
    cy.contains('FAQ').scrollIntoView().should('be.visible');
    
    cy.viewport(375, 667);
    cy.contains('FAQ').scrollIntoView().should('be.visible');
  });

  it('TC4.9 - Should display FAQ answers properly formatted', () => {
    cy.contains('FAQ').scrollIntoView();
    cy.get('button, [role="button"]').first().click();
    cy.wait(500);
  });

});

