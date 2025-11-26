Cypress.Commands.add('fillOutForm', () => {

  cy.get('button').contains('SHOP UNLIMITED').first().scrollIntoView().click({ force: true });
  cy.wait(1000);

  cy.contains('label', 'First name').parent().find('input').type('Nemanja');
  cy.contains('label', 'Last name').parent().find('input').type('Nikitovic');
  cy.contains('label', 'Email').parent().find('input').type('nemanja.qatest@example.com');
  cy.contains('label', 'Password').parent().find('input').type('Test123456!');
  cy.contains('label', 'Repeat Password').parent().find('input').type('Test123456!');
  cy.contains('label', 'Country prefix').parent().find('input').type('381');
  cy.contains('label', 'Phone number').parent().find('input').type('601234567');
  cy.contains('label', 'Address').parent().find('input').type('Main Street 123');
  cy.contains('label', 'City').parent().find('input').type('Valjevo');
  cy.contains('label', 'State').parent().find('input').type('Central');
  cy.contains('label', 'Postal code').parent().find('input').type('14000');
  cy.get('.transition-transform.duration-300').click(); 
  cy.get('input[placeholder="Search countries..."]').type('Australia');

  cy.wait(1000);
  cy.contains('p', 'Australia').click({ force: true });
  
  cy.get('input[type="checkbox"]').first().check({ force: true });
  
  cy.wait(500);
  cy.get('iframe[title="reCAPTCHA"]').should('be.visible');
  cy.get('iframe[title="reCAPTCHA"]').then($iframe => {
    const body = $iframe.contents().find('body');
    cy.wrap(body).find('.recaptcha-checkbox-border').click();
  });
  
  cy.wait(1000);
  cy.contains('button', 'SIGN UP').click();
});
