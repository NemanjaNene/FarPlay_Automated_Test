describe('FairPlay Modular Test', () => {
    beforeEach(() => {
      cy.viewport(1400, 900);
      cy.systemLogin(); 
    });
  
    it('Should register a new user', () => {
      cy.fillOutForm(); 
      
    });
  
    it('Should login as existing user', () => {
      cy.userLogin('nemanjanikitovic1@gmail.com', 'Nemanja1!');
      cy.url().should('include', '/dashboard'); 
    });
  });
  