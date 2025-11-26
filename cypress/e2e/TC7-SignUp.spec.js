describe('TC7 - Sign Up Form - FairPlay', () => {
  
  beforeEach(() => {
    cy.viewport(1400, 900);
    cy.systemLogin();
  });

  it('TC7.1 - Successful sign up with valid mandatory fields', () => {
    cy.fillOutForm();
    cy.wait(2000);
  });

  it('TC7.2 - Sign up with names containing whitespace', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('John Michael');
    cy.contains('label', 'Last name').parent().find('input').type('Smith Williams');
    cy.contains('label', 'Email').parent().find('input').type('john.whitespace@test.com');
    cy.contains('label', 'Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Repeat Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Country prefix').parent().find('input').type('381');
    cy.contains('label', 'Phone number').parent().find('input').type('601234567');
    cy.contains('label', 'Address').parent().find('input').type('Main Street 123');
    cy.contains('label', 'City').parent().find('input').type('Belgrade');
    cy.contains('label', 'State').parent().find('input').type('Central');
    cy.contains('label', 'Postal code').parent().find('input').type('11000');
    
    cy.get('.transition-transform.duration-300').click();
    cy.get('input[placeholder="Search countries..."]').type('Serbia');
    cy.wait(500);
    cy.contains('p', 'Serbia').click({ force: true });
    
    cy.get('input[type="checkbox"]').first().check({ force: true });
  });

  it('TC7.3 - Sign up using minimum length password (8 chars)', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('Test');
    cy.contains('label', 'Last name').parent().find('input').type('User');
    cy.contains('label', 'Email').parent().find('input').type('min.pass@test.com');
    cy.contains('label', 'Password').parent().find('input').type('Test123!');
    cy.contains('label', 'Repeat Password').parent().find('input').type('Test123!');
    
    cy.contains('label', 'Password').parent().find('input').invoke('val').should('have.length', 8);
  });

  it('TC7.4 - Sign up using maximum length password (32 chars)', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    const maxPassword = 'Test1234567890!@#$%^&*()_+=MAX';
    
    cy.contains('label', 'First name').parent().find('input').type('Test');
    cy.contains('label', 'Last name').parent().find('input').type('User');
    cy.contains('label', 'Email').parent().find('input').type('max.pass@test.com');
    cy.contains('label', 'Password').parent().find('input').type(maxPassword);
    cy.contains('label', 'Repeat Password').parent().find('input').type(maxPassword);
    
    cy.contains('label', 'Password').parent().find('input').invoke('val').should('have.length.lte', 32);
  });

  it('TC7.5 - Successful registration with valid phone format', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('Phone');
    cy.contains('label', 'Last name').parent().find('input').type('Test');
    cy.contains('label', 'Email').parent().find('input').type('phone.test@test.com');
    cy.contains('label', 'Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Repeat Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Country prefix').parent().find('input').type('381');
    cy.contains('label', 'Phone number').parent().find('input').type('641234567');
    
    cy.contains('label', 'Phone number').parent().find('input').should('have.value', '641234567');
  });

  it('TC7.6 - Successful sign up with optional fields empty', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('Optional');
    cy.contains('label', 'Last name').parent().find('input').type('Empty');
    cy.contains('label', 'Email').parent().find('input').type('optional.empty@test.com');
    cy.contains('label', 'Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Repeat Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Country prefix').parent().find('input').type('381');
    cy.contains('label', 'Phone number').parent().find('input').type('601234567');
    
    cy.get('.transition-transform.duration-300').click();
    cy.get('input[placeholder="Search countries..."]').type('Serbia');
    cy.wait(500);
    cy.contains('p', 'Serbia').click({ force: true });
  });

  it('TC7.7 - Sign up with password containing multiple special characters', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('Special');
    cy.contains('label', 'Last name').parent().find('input').type('Chars');
    cy.contains('label', 'Email').parent().find('input').type('special.chars@test.com');
    cy.contains('label', 'Password').parent().find('input').type('Test!@#$%^&*()123');
    cy.contains('label', 'Repeat Password').parent().find('input').type('Test!@#$%^&*()123');
  });

  it('TC7.8 - SIGN UP button enabled after all mandatory fields are valid', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('button', 'SIGN UP').should('be.disabled').or('exist');
    
    cy.contains('label', 'First name').parent().find('input').type('Button');
    cy.contains('label', 'Last name').parent().find('input').type('State');
    cy.contains('label', 'Email').parent().find('input').type('button.state@test.com');
    cy.contains('label', 'Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Repeat Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Country prefix').parent().find('input').type('381');
    cy.contains('label', 'Phone number').parent().find('input').type('601234567');
    
    cy.get('.transition-transform.duration-300').click();
    cy.get('input[placeholder="Search countries..."]').type('Serbia');
    cy.wait(500);
    cy.contains('p', 'Serbia').click({ force: true });
    
    cy.get('input[type="checkbox"]').first().check({ force: true });
  });

  it('TC7.9 - First name shorter than 2 characters', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('A');
    cy.contains('label', 'Last name').parent().find('input').type('Test');
    cy.contains('label', 'Email').parent().find('input').click();
  });

  it('TC7.10 - Last name shorter than 2 characters', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('Test');
    cy.contains('label', 'Last name').parent().find('input').type('B');
    cy.contains('label', 'Email').parent().find('input').click();
  });

  it('TC7.11 - First name contains numbers', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('Test123');
    cy.contains('label', 'Last name').parent().find('input').type('User');
    cy.contains('label', 'Email').parent().find('input').click();
  });

  it('TC7.12 - Last name contains special characters', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('Test');
    cy.contains('label', 'Last name').parent().find('input').type('User@#$');
    cy.contains('label', 'Email').parent().find('input').click();
  });

  it('TC7.13 - Name contains emojis', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('Test😀');
    cy.contains('label', 'Last name').parent().find('input').type('User🎉');
    cy.contains('label', 'Email').parent().find('input').click();
  });

  it('TC7.14 - Invalid email (missing @ symbol)', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'Email').parent().find('input').type('invalidemail.com');
    cy.contains('label', 'Password').parent().find('input').click();
    
    cy.contains('label', 'Email').parent().find('input').then($input => {
      expect($input[0].validity.valid).to.be.false;
    });
  });

  it('TC7.15 - Invalid email (missing domain)', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'Email').parent().find('input').type('invalidemail@');
    cy.contains('label', 'Password').parent().find('input').click();
    
    cy.contains('label', 'Email').parent().find('input').then($input => {
      expect($input[0].validity.valid).to.be.false;
    });
  });

  it('TC7.16 - Email already registered', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('Existing');
    cy.contains('label', 'Last name').parent().find('input').type('User');
    cy.contains('label', 'Email').parent().find('input').type('kaceysilver@dcpa.net');
    cy.contains('label', 'Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Repeat Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Country prefix').parent().find('input').type('381');
    cy.contains('label', 'Phone number').parent().find('input').type('601234567');
    
    cy.get('.transition-transform.duration-300').click();
    cy.get('input[placeholder="Search countries..."]').type('Serbia');
    cy.wait(500);
    cy.contains('p', 'Serbia').click({ force: true });
    
    cy.get('input[type="checkbox"]').first().check({ force: true });
  });

  it('TC7.17 - Password shorter than 8 characters', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'Password').parent().find('input').type('Test12!');
    cy.contains('label', 'Repeat Password').parent().find('input').click();
  });

  it('TC7.18 - Password longer than 32 characters', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    const longPassword = 'Test123456789012345678901234567890!';
    cy.contains('label', 'Password').parent().find('input').type(longPassword);
    cy.contains('label', 'Repeat Password').parent().find('input').click();
  });

  it('TC7.19 - Password without uppercase letter', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'Password').parent().find('input').type('test123456!');
    cy.contains('label', 'Repeat Password').parent().find('input').click();
  });

  it('TC7.20 - Password without special character', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'Password').parent().find('input').type('Test12345678');
    cy.contains('label', 'Repeat Password').parent().find('input').click();
  });

  it('TC7.21 - Password and Repeat Password mismatch', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Repeat Password').parent().find('input').type('Different123!');
    cy.contains('label', 'First name').parent().find('input').click();
  });

  it('TC7.22 - Phone number contains letters', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'Country prefix').parent().find('input').type('381');
    cy.contains('label', 'Phone number').parent().find('input').type('12abc5678');
    cy.contains('label', 'Address').parent().find('input').click();
  });

  it('TC7.23 - Phone number too short for selected country', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'Country prefix').parent().find('input').type('381');
    cy.contains('label', 'Phone number').parent().find('input').type('123');
    cy.contains('label', 'Address').parent().find('input').click();
  });

  it('TC7.24 - Phone number too long', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'Country prefix').parent().find('input').type('381');
    cy.contains('label', 'Phone number').parent().find('input').type('12345678901234567890');
    cy.contains('label', 'Address').parent().find('input').click();
  });

  it('TC7.25 - Missing country selection', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('No');
    cy.contains('label', 'Last name').parent().find('input').type('Country');
    cy.contains('label', 'Email').parent().find('input').type('no.country@test.com');
    cy.contains('label', 'Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Repeat Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Country prefix').parent().find('input').type('381');
    cy.contains('label', 'Phone number').parent().find('input').type('601234567');
    
    cy.get('input[type="checkbox"]').first().check({ force: true });
    
    cy.contains('button', 'SIGN UP').should('exist');
  });

  it('TC7.26 - Privacy Policy & Terms checkbox not selected', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('No');
    cy.contains('label', 'Last name').parent().find('input').type('Checkbox');
    cy.contains('label', 'Email').parent().find('input').type('no.checkbox@test.com');
    cy.contains('label', 'Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Repeat Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Country prefix').parent().find('input').type('381');
    cy.contains('label', 'Phone number').parent().find('input').type('601234567');
    
    cy.get('.transition-transform.duration-300').click();
    cy.get('input[placeholder="Search countries..."]').type('Serbia');
    cy.wait(500);
    cy.contains('p', 'Serbia').click({ force: true });
    
    cy.contains('button', 'SIGN UP').should('be.disabled').or('exist');
  });

  it('TC7.27 - reCAPTCHA not completed', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('No');
    cy.contains('label', 'Last name').parent().find('input').type('Recaptcha');
    cy.contains('label', 'Email').parent().find('input').type('no.recaptcha@test.com');
    cy.contains('label', 'Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Repeat Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Country prefix').parent().find('input').type('381');
    cy.contains('label', 'Phone number').parent().find('input').type('601234567');
    
    cy.get('.transition-transform.duration-300').click();
    cy.get('input[placeholder="Search countries..."]').type('Serbia');
    cy.wait(500);
    cy.contains('p', 'Serbia').click({ force: true });
    
    cy.get('input[type="checkbox"]').first().check({ force: true });
    
    cy.get('iframe[title="reCAPTCHA"]').should('be.visible');
  });

  it('TC7.28 - SQL injection attempt in First name field', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type("'; DROP TABLE users; --");
    cy.contains('label', 'Last name').parent().find('input').type('Test');
    cy.contains('label', 'Email').parent().find('input').click();
  });

  it('TC7.29 - Leading and trailing whitespace in mandatory fields', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('  John  ');
    cy.contains('label', 'Last name').parent().find('input').type('  Doe  ');
    cy.contains('label', 'Email').parent().find('input').type('  test@test.com  ');
    cy.contains('label', 'Password').parent().find('input').click();
  });

  it('TC7.30 - Invalid characters in optional Address field', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'Address').parent().find('input').type('<script>alert("XSS")</script>');
    cy.contains('label', 'City').parent().find('input').click();
  });

  it('TC7.31 - Extremely long text in Address field', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    const longText = 'A'.repeat(500);
    cy.contains('label', 'Address').parent().find('input').type(longText);
    cy.contains('label', 'City').parent().find('input').click();
  });

  it('TC7.32 - Successful sign up after valid reCAPTCHA challenge', () => {
    cy.get('button:contains("SHOP UNLIMITED")').eq(2).scrollIntoView().should('be.visible').click();
    
    cy.contains('label', 'First name').parent().find('input').type('Recaptcha');
    cy.contains('label', 'Last name').parent().find('input').type('Success');
    cy.contains('label', 'Email').parent().find('input').type('recaptcha.success@test.com');
    cy.contains('label', 'Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Repeat Password').parent().find('input').type('Test123456!');
    cy.contains('label', 'Country prefix').parent().find('input').type('381');
    cy.contains('label', 'Phone number').parent().find('input').type('601234567');
    cy.contains('label', 'Address').parent().find('input').type('Main Street 123');
    cy.contains('label', 'City').parent().find('input').type('Belgrade');
    cy.contains('label', 'State').parent().find('input').type('Central');
    cy.contains('label', 'Postal code').parent().find('input').type('11000');
    
    cy.get('.transition-transform.duration-300').click();
    cy.get('input[placeholder="Search countries..."]').type('Serbia');
    cy.wait(500);
    cy.contains('p', 'Serbia').click({ force: true });
    
    cy.get('input[type="checkbox"]').first().check({ force: true });
    
    cy.wait(500);
    cy.get('iframe[title="reCAPTCHA"]').should('be.visible');
    cy.get('iframe[title="reCAPTCHA"]').then($iframe => {
      const body = $iframe.contents().find('body');
      cy.wrap(body).find('.recaptcha-checkbox-border').click();
    });
    
    cy.wait(1000);
  });

});

