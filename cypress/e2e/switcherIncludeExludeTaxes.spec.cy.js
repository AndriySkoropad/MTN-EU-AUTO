/// <reference types="cypress" />


describe('checking prices switcher with taxes and without', () => {

  beforeEach(() => {
    cy.visit('/');
    
    cy.wait(20000);
  
    cy.get('[aria-label="Close dialog 1"]')
      .click();    
    
  });  

  it('should check if the prices are changed after the product was added to the cart FIRST PRODUCT', () => {
    cy.contains('.gr-header-menu__link', 'Brands')
      .click();
    
    cy.wait(5000);

    cy.intercept('GET', 'https://eu.app.mountainproductions.com/api/get_data?shop=mtn-shop-eu.myshopify.com*').as('gettingBrand');
    
    cy.contains('.gr-brands-list__item', 'Bravi')
      .click();

    cy.wait('@gettingBrand');
    
    //cy.wait(10000);
    
    cy.get('h1')
      .should('contain.text', 'Bravi');

    //cy.intercept('GET', '/search?view=products_json&*').as('gettingProduct');

    
    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/sprint-tl"]')
      .click();

    //cy.wait('@gettingProduct')
    
    //cy.wait(3000);

    cy.get('h1')
      .should('contain.text', 'Bravi Sprint TL')

    let savedNumericPart; // Define the variable in a higher scope

    cy.get('span.price-item--tax-include', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((value) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(value);
          if (matches && matches[1]) {
            savedNumericPart = matches[1]; // Assign the value to the higher scoped variable
            cy.saveTextValue(savedNumericPart);
            console.log('Saved Value:', savedNumericPart); // Log the saved value to the console
          } else {
            console.error('No numeric value found in savedValue');
          }
      });
      
    cy.get('#ex_vat')
      .click({ force: true });
      
    cy.wait(5000);
      
    cy.get('span.price-item--tax-exclude', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((newValue) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(newValue);
          if (matches && matches[1]) {
            const updatedNumericPart = matches[1];
            console.log('Updated Value:', updatedNumericPart); // Log the updated value to the console
            expect(updatedNumericPart).not.to.equal(savedNumericPart); // Compare the new value with the saved value
          } else {
            console.error('No numeric value found in newValue');
          }
      });

  }); 
  
  
  it('should check if the prices are changed after the product was added to the cart SECOND PRODUCT', () => {

    cy.contains('.gr-header-menu__link', 'Brands')
      .click();
    
    cy.wait(5000);

    cy.intercept('GET', 'https://eu.app.mountainproductions.com/api/get_data?shop=mtn-shop-eu.myshopify.com*').as('gettingBrand');
    
    cy.contains('.gr-brands-list__item', 'FA2')
      .click();

    cy.wait('@gettingBrand')
    
    //cy.wait(10000);
    
    cy.get('h1')
      .should('contain.text', 'FA2');

    //cy.intercept('GET', '/search?view=products_json&*').as('gettingProduct');
    
    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/fa2-fall-protection-package"]')
      .click();

    //cy.wait('@gettingProduct');

    //cy.wait(3000);

    cy.get('h1')
      .should('contain.text', 'FA2 Fall Protection Kit');

    let savedNumericPart;

    cy.get('span.price-item--tax-include', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((value) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(value);
          if (matches && matches[1]) {
            savedNumericPart = matches[1]; // Assign the value to the higher scoped variable
            cy.saveTextValue(savedNumericPart);
            console.log('Saved Value:', savedNumericPart); // Log the saved value to the console
          } else {
            console.error('No numeric value found in savedValue');
          }
      });
      
    cy.get('#ex_vat')
      .click({ force: true });
      
    cy.wait(5000);
      
    cy.get('span.price-item--tax-exclude', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((newValue) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(newValue);
          if (matches && matches[1]) {
            const updatedNumericPart = matches[1];
            console.log('Updated Value:', updatedNumericPart); // Log the updated value to the console
            expect(updatedNumericPart).not.to.equal(savedNumericPart); // Compare the new value with the saved value
          } else {
            console.error('No numeric value found in newValue');
          }
      });

  });

  it('should check if the prices are changed after the product was added to the cart THIRD PRODUCT', () => {

    cy.contains('.gr-header-menu__link', 'Brands')
      .click();
    
    cy.wait(5000);

    cy.intercept('GET', 'https://eu.app.mountainproductions.com/api/get_data?shop=mtn-shop-eu.myshopify.com*').as('gettingBrand');
    
    cy.contains('.gr-brands-list__item', 'VMB')
      .click();

    cy.wait('@gettingBrand');
    
    //cy.wait(10000);
    
    cy.get('h1')
      .should('contain.text', 'VMB');

    //cy.intercept('GET', '/search?view=products_json&*').as('gettingProduct');
    
    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/vmb-tower-lift-tl054"]')
      .click();

    //cy.wait('@gettingProduct');

    //cy.wait(3000);

    cy.get('h1')
      .should('contain.text', 'VMB Tower Lift - TL054')

    let savedNumericPart;

    cy.get('span.price-item--tax-include', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((value) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(value);
          if (matches && matches[1]) {
            savedNumericPart = matches[1]; // Assign the value to the higher scoped variable
            cy.saveTextValue(savedNumericPart);
            console.log('Saved Value:', savedNumericPart); // Log the saved value to the console
          } else {
            console.error('No numeric value found in savedValue');
          }
      });
      
    cy.get('#ex_vat')
      .click({ force: true });
      
    cy.wait(5000);
      
    cy.get('span.price-item--tax-exclude', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((newValue) => {
        const numericRegex = /£([\d.]+)/g;
        const matches = numericRegex.exec(newValue);
          if (matches && matches[1]) {
            const updatedNumericPart = matches[1];
            console.log('Updated Value:', updatedNumericPart); // Log the updated value to the console
            expect(updatedNumericPart).not.to.equal(savedNumericPart); // Compare the new value with the saved value
          } else {
            console.error('No numeric value found in newValue');
          }
      });

  });


});