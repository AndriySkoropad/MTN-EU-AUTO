/// <reference types="cypress" />


describe('adding to the cart', () => {

  beforeEach(() => {

    cy.visit('/');
    
    cy.wait(20000);
  
    cy.get('[aria-label="Close dialog 1"]')
      .click();

      
  });

  it('should check that cart is empty', () => {

    cy.get('#cart-icon-bubble')
      .click();

    cy.get('h2')
      .should('contain.text', 'Your cart is empty');

    cy.contains('.gr-btn--outline', 'Continue shopping')
      .should('exist');
  });

  it('should add product to the cart', () => {

    cy.contains('.gr-header-menu__link', 'Brands')
      .click();
    cy.assertPageUrl('/pages/shop-our-brands');
    cy.get('.section-gr-brands-list')
      .should('exist');

    cy.wait(5000);

    cy.intercept('GET', 'https://eu.app.mountainproductions.com/api/get_data?shop=mtn-shop-eu.myshopify.com*').as('gettingBrand');

    cy.contains('.gr-brands-list__item', 'Crewsaver')
      .click();
    cy.assertPageUrl('/collections/crewsaver');
    cy.contains('h1', 'Crewsaver')
      .should('exist');

    cy.wait('@gettingBrand')
    
    cy.contains('a[href="/products/hansen-seacrewsader-275n-3d-fire-retardant-life-jacket-83220"]','Crewsaver Seacrewsader 275N 3D Fire Retardant Life Vest 83220')
      .click();
    cy.assertPageUrl('/products/hansen-seacrewsader-275n-3d-fire-retardant-life-jacket-83220?variant=46806193537366');
    cy.get('h1')
      .should('contain.text', 'Crewsaver Seacrewsader 275N 3D Fire Retardant Life Vest 83220');
    cy.get('.gr-product-media')
      .should('exist');
    cy.get('.gr-price__container')
      .should('exist');
    cy.contains('.gr-details', 'Product details')
      .should('exist')

    cy.get('.product-form__submit')
      .click();

    cy.get('.gr-count-bubble')
      .should('exist');

    cy.get('#cart-icon-bubble')
      .click( {force: true} );
    //cy.intercept('GET', '/cart.json').as('checkingCart');
    cy.contains('.gr-cart__checkout-btn', 'View cart ')
      .click( {force: true} );
    //cy.wait('@checkingCart');
    //cy.assertPageUrl('/cart');
    //cy.contains('h1', 'Your cart')
      //.should('exist');
    //cy.contains('#checkout', 'Check out')
      //.should('exist');
    cy.contains('.shopify-section', 'Crewsaver Seacrewsader 275N 3D Fire Retardant Life Vest 83220')
      .should('exist');
    //cy.contains('.gr-link', 'Continue shopping')
      //.should('exist');
    //cy.get('.cart__dynamic-checkout-buttons')
      //.should('exist');
    //cy.get('.gr-cart-footer-subtotal-wrap')
      //.should('exist');

    cy.get('#SmartCart_title')
      .should('contain.text', 'Your Cart');

    cy.get('.rebuy-cart__flyout-item-quantity')
      .should('exist');

    cy.get('.rebuy-cart__flyout-recommendations')
      .should('exist');

    cy.get('.rebuy-cart__flyout-item-remove')
      .should('exist');

    cy.get('.rebuy-cart__flyout-subtotal')
      .should('contain.text', 'Subtotal (1 item)');

    cy.get('.rebuy-cart__checkout-button')
      .should('exist');

  });

  it('should proceed to checkout', () => {

    cy.contains('.gr-header-menu__link', 'Brands')
      .click();

    cy.wait(5000);

    cy.intercept('GET', 'https://eu.app.mountainproductions.com/api/get_data?shop=mtn-shop-eu.myshopify.com*').as('gettingBrand');

    cy.contains('.gr-brands-list__item', 'NEOFEU')
      .click();

    cy.wait('@gettingBrand');

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/neofeu-harnais-nus77a"]')
      .click();

    /*cy.get('span.price-item--tax-include', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((value) => {
          const numericRegex = /[\d.,]+/g;
          const matches = value.match(numericRegex);
          if (matches && matches.length > 0) {
            const savedNumericPart = parseFloat(matches[0].replace(/,/g, '')); // Remove commas from the numeric part
            cy.wrap(savedNumericPart).as('savedTextValue');
            console.log('Saved Value:', savedNumericPart); // Log the saved value to the console
          } else {
            throw new Error('No numeric value found in savedValue');
          }
    });

    cy.get('.product-form__submit').click({ force: true });
    cy.wait(5000);
    cy.get('a[href="/cart"]').click();

    cy.get('@savedTextValue').then((savedValue) => {
      cy.get('span.price--end-include-tax')
        .invoke('text')
        .then((otherValue) => {
          console.log('Saved Value:', savedValue); // Log the saved value in the console
          console.log('Other Value:', otherValue); // Log the other value in the console

          const numericSavedValue = parseFloat(savedValue);
          const numericOtherValue = parseFloat(otherValue.replace(/[^\d.]/g, '')); // Remove non-numeric characters

          // Define the minimum and maximum values in UAH and USD
          const minConvertedPriceUAH = 340; // Minimum price in UAH
          const maxConvertedPriceUAH = 370; // Maximum price in UAH
          const minConvertedPriceUSD = 6; // Minimum price in USD
          const maxConvertedPriceUSD = 13; // Maximum price in USD

          // Check if the numeric price is within either the UAH range or the USD range
          const isInRange = (numericSavedValue >= minConvertedPriceUAH && numericSavedValue <= maxConvertedPriceUAH) ||
                            (numericSavedValue >= minConvertedPriceUSD && numericSavedValue <= maxConvertedPriceUSD);

          // Check if the other numeric price is within the UAH range or the USD range
          const isOtherInRange = (numericOtherValue >= minConvertedPriceUAH && numericOtherValue <= maxConvertedPriceUAH) ||
                                 (numericOtherValue >= minConvertedPriceUSD && numericOtherValue <= maxConvertedPriceUSD);

          if (!isInRange || !isOtherInRange) {
            throw new Error('Price does not fall within the expected range.');
          }
        });
    });*/


    /* I'm going to store the previous part of the code here if the shopify will be back to show the prices in the pounds again.
    */

    cy.get('span.price-item--tax-include', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then((value) => {
        const numericRegex = /€([\d.]+)/g;
        const matches = numericRegex.exec(value);
        if (matches && matches[1]) {
            const savedNumericPart = matches[1];
            cy.saveTextValue(savedNumericPart);
            console.log('Saved Value:', savedNumericPart); // Log the saved value to the console
        } else {
            console.error('No numeric value found in savedValue');
        }
    });

    cy.intercept('GET', '/cart.json').as('addingToCart');

    cy.get('.product-form__submit')
      .click()
      .then(() => {
        cy.wait('@addingToCart');
        //cy.intercept('GET', '/cart.json').as('checkingCart');
        cy.contains('.gr-cart__checkout-btn', 'View cart ')
          .click( {force: true} ).then(() => {
          cy.get('@savedTextValue').then((savedValue) => {
            cy.get('span.price--end-include-tax')
              .invoke('text')
              .then((otherValue) => {
                console.log('Saved Value:', savedValue); // Log the saved value in the console
                console.log('Other Value:', otherValue); // Log the other value in the console
                expect(otherValue).to.include(savedValue, 'Saved numeric value is included in the other value');
              });
            });
        });
    });

    //cy.wait('@checkingCart');
   
    cy.get('.rebuy-cart__checkout-button')
      .click();

    cy.url()
      .should('include', '/checkouts');

    cy.contains('div', 'Express checkout')
      .should('exist');

    cy.contains('div', 'Contact')
      .should('exist');

      cy.contains('div', 'Delivery')
      .should('exist');

      cy.contains('div', 'Payment')
      .should('exist');

    cy.contains('div', 'Shipping method')
      .should('exist');

    cy.get('[href="https://shopmtn.eu/cart"]')
      .should('exist');

    cy.contains('Neofeu Harnais NUS77A')
      .should('be.visible');

  });

  it('should remove prooduct from the cart', () => {
    cy.contains('.gr-header-menu__link', 'Brands')
      .click(); 
      
    cy.wait(5000);

    cy.intercept('GET', 'https://eu.app.mountainproductions.com/api/get_data?shop=mtn-shop-eu.myshopify.com*').as('gettingBrand');

    cy.contains('.gr-brands-list__item', 'Showtex')
      .click();

    cy.wait('@gettingBrand');

    cy.get('div.gr-card-rich-product__details')
      .find('a[href="/products/showtex-trussleeve-4-way-cross"]')
      .click();

    cy.intercept('GET', '/cart.json').as('addingToCart');

    cy.get('.product-form__submit')
      .click()
      .then(() => {
        cy.wait('@addingToCart');
        cy.get('#cart-icon-bubble').click( {force: true} )
      });

    cy.get('.gr-cart-item__link')
      .should('contain.text', 'Showtex Trussleeve 4-Way Cross');

    cy.get('.rebuy-cart__flyout-item-remove')
      .click();

    //cy.get('.gr-cart-item__link')
      //.should('not.exist');

    cy.contains('h4', 'Your cart is empty!')
      .should('exist');

    cy.contains('.ql-align-center', 'Shop Now')
      .should('exist');

  });

});