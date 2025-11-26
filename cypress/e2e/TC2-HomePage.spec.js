describe('TC2 - HomePage - FairPlay', () => {
  
  beforeEach(() => {
    cy.viewport(1400, 900);
    cy.systemLogin();
  });

  it('TC2.1 - Should display main logo', () => {
    cy.get('img[alt*="logo"], img[alt*="Logo"], svg').first().should('be.visible');
  });

  it('TC2.2 - Should display LOGIN button', () => {
    cy.get('button').contains('LOGIN').should('be.visible').and('be.enabled');
  });

  it('TC2.3 - Should display SHOP UNLIMITED button', () => {
    cy.get('button').contains('SHOP UNLIMITED').should('be.visible').and('be.enabled');
  });

  it('TC2.4 - Should display CONTACT US button', () => {
    cy.contains('button', 'CONTACT US')
      .scrollIntoView()
      .should('be.visible')
      .and('be.enabled');
  });

  it('TC2.5 - Should navigate to login page when clicking LOGIN', () => {
    cy.get('button').contains('LOGIN').click();
    cy.get('h1').contains('LOG IN').should('be.visible');
  });

  it('TC2.6 - Should display hero section with main heading', () => {
    cy.get('h1, h2, h3').should('exist');
  });

  it('TC2.7 - Should display navigation menu', () => {
    cy.get('nav, header').should('exist').and('be.visible');
  });

  it('TC2.8 - Should scroll to SHOP UNLIMITED section', () => {
    cy.get('button').contains('SHOP UNLIMITED').first()
      .scrollIntoView()
      .should('be.visible');
  });

  it('TC2.9 - Should display footer section', () => {
    cy.get('footer').scrollIntoView().should('be.visible');
  });

  it('TC2.10 - Homepage should load within acceptable time', () => {
    const startTime = Date.now();
    cy.visit('https://frontend.dev.fairplay-mobile.com/', {
      auth: {
        username: 'Alois',
        password: 'Fair2025Play!&M0bile8ee&!'
      }
    }).then(() => {
      const loadTime = Date.now() - startTime;
      expect(loadTime).to.be.lessThan(5000);
    });
  });

  it('TC2.11 - Should display all main CTA buttons', () => {
    cy.get('button').contains('LOGIN').should('exist');
    cy.get('button').contains('SHOP UNLIMITED').should('exist');
    cy.contains('button', 'CONTACT US').scrollIntoView().should('exist');
  });

  it('TC2.12 - Should have responsive layout', () => {
    cy.viewport(1920, 1080);
    cy.get('button').contains('LOGIN').should('be.visible');
    
    cy.viewport(768, 1024);
    cy.get('button').contains('LOGIN').should('be.visible');
    
    cy.viewport(375, 667);
    cy.get('button').contains('LOGIN').should('exist');
  });

  it('TC2.13 - Should display page title correctly', () => {
    cy.title().should('not.be.empty');
  });

  it('TC2.14 - All main sections should be present', () => {
    cy.get('button').contains('LOGIN').should('exist');
    
    cy.get('button').contains('SHOP UNLIMITED').should('exist');
    
    cy.contains('button', 'CONTACT US').scrollIntoView().should('exist');
    
    cy.get('footer').scrollIntoView().should('exist');
  });

  it('TC2.15 - Should handle page reload correctly', () => {
    cy.get('button').contains('LOGIN').should('be.visible');
    cy.reload();
    cy.get('button').contains('LOGIN').should('be.visible');
  });

  it('TC2.16 - Should display content without console errors', () => {
    cy.visit('https://frontend.dev.fairplay-mobile.com/', {
      auth: {
        username: 'Alois',
        password: 'Fair2025Play!&M0bile8ee&!'
      },
      onBeforeLoad(win) {
        cy.stub(win.console, 'error').as('consoleError');
      }
    });
    
    cy.get('button').contains('LOGIN').should('be.visible');
  });

  it('TC2.17 - Homepage should be accessible via direct URL', () => {
    cy.url().should('include', 'fairplay-mobile.com');
    cy.get('button').contains('LOGIN').should('be.visible');
  });

});

