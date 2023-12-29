/// <reference types="cypress" />

describe('Increase and decrease quantity', () => {
    beforeEach(() => {
        cy.visit('/');
    
        cy.wait(20000);
  
        cy.get('[aria-label="Close dialog 1"]')
          .click();
    });

    it('should add 1 product to the cart FIRST PRODUCT', () => {
        cy.contains('.gr-header-menu__link', 'Brands')
          .click();
    
        cy.wait(5000);

        cy.intercept('GET', 'https://eu.app.mountainproductions.com/api/get_data?shop=mtn-shop-eu.myshopify.com*').as('gettingBrand');
    
        cy.contains('.gr-brands-list__item', 'Gutster')
          .click();
        
        cy.wait('@gettingBrand');
    
        //cy.wait(10000);
    
        cy.get('h1')
          .should('contain.text', 'Gutster')
    
        cy.get('div.gr-card-rich-product__details')
          .find('a[href="/products/gutster-small-nail-puller"]')
          .click();

        cy.intercept('GET', '/cart.json').as('addingToCart');
    
        cy.get('.product-form__submit')
          .click()
          .then(() => {
            cy.wait('@addingToCart');
            //cy.wait(5000);
            //cy.intercept('GET', '/cart.json').as('checkingCart');
            cy.contains('.gr-cart__checkout-btn', 'View cart ').click( {force: true} )
          });

        //cy.wait('@checkingCart')
        
        //cy.wait(2000);  
    
        cy.get('.gr-cart-item__link')
          .should('contain.text', 'Gutster Small Nail Puller 76cm');
    
          function extractLastDigitFromString(text) {
            const regex = /(\d+)\D*$/;
            const match = text.match(regex);
            return match ? parseInt(match[1]) : NaN;
          }
          
          cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
            .invoke('text')
            .then((initialQuantityText) => {
              const initialQuantity = extractLastDigitFromString(initialQuantityText);
          
              cy.log('Initial Quantity Text:', initialQuantityText); // Log the initial quantity text
          
              // Check if initialQuantity is a valid number
              if (!isNaN(initialQuantity)) {
                // Click the button to increase the quantity
                cy.get('.fa-plus').click({ force: true });
                cy.wait(3000);
          
                // Get the updated quantity
                cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
                  .invoke('text')
                  .then((updatedQuantityText) => {
                    const updatedQuantity = extractLastDigitFromString(updatedQuantityText);
          
                    cy.log('Updated Quantity Text:', updatedQuantityText); // Log the updated quantity text
          
                    // Check if updatedQuantity is a valid number
                    if (!isNaN(updatedQuantity)) {
                      // Assert that the updated quantity is exactly one greater than the initial quantity
                      expect(updatedQuantity).to.equal(initialQuantity + 1);
                    } else {
                      throw new Error('Updated Quantity is NaN');
                    }
          
                    // Click the button to decrease the quantity
                    cy.get('.fa-minus').click({ force: true });
                    cy.wait(3000);
          
                    // Get the decreased quantity
                    cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
                      .invoke('text')
                      .then((decreasedQuantityText) => {
                        const decreasedQuantity = extractLastDigitFromString(decreasedQuantityText);
          
                        cy.log('Decreased Quantity Text:', decreasedQuantityText); // Log the decreased quantity text
          
                        // Check if decreasedQuantity is a valid number
                        if (!isNaN(decreasedQuantity)) {
                          // Assert that the decreased quantity is exactly one less than the initial quantity
                          expect(decreasedQuantity).to.equal(initialQuantity);
                        } else {
                          throw new Error('Decreased Quantity is NaN');
                        }
                      });
                  });
              } else {
                throw new Error('Initial Quantity is NaN');
              }
            });
          
          




        
        
    });

    it('should add 1 product to the cart SECOND PRODUCT', () => {
      cy.contains('.gr-header-menu__link', 'Brands')
      .click();
    
        cy.wait(5000);

        cy.intercept('GET', 'https://eu.app.mountainproductions.com/api/get_data?shop=mtn-shop-eu.myshopify.com*').as('gettingBrand');
    
        cy.contains('.gr-brands-list__item', 'Columbus McKinnon')
          .click();

        cy.wait('@gettingBrand');
    
        //cy.wait(10000);
    
        cy.get('h1')
          .should('contain.text', 'Columbus McKinnon')
    
        cy.get('div.gr-card-rich-product__details')
          .find('a[href="/products/cm-next-gen-lodestar-electric-chain-hoist-2000kg"]')
          .click();

        cy.intercept('GET', '/cart.json').as('addingToCart');
    
        cy.get('.product-form__submit')
          .click()
          .then(() => {
            cy.wait('@addingToCart');
            //cy.wait(5000);
            //cy.intercept('GET', '/cart.json').as('checkingCart');
            cy.contains('.gr-cart__checkout-btn', 'View cart ').click( {force: true} )
          });

        //cy.wait('@checkingCart');
    
        cy.get('.gr-cart-item__link')
          .should('contain.text', 'CM Lodestar Electric Chain Hoist - 2000kg');
    
          function extractLastDigitFromString(text) {
            const regex = /(\d+)\D*$/;
            const match = text.match(regex);
            return match ? parseInt(match[1]) : NaN;
          }
          
          cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
            .invoke('text')
            .then((initialQuantityText) => {
              const initialQuantity = extractLastDigitFromString(initialQuantityText);
          
              cy.log('Initial Quantity Text:', initialQuantityText); // Log the initial quantity text
          
              // Check if initialQuantity is a valid number
              if (!isNaN(initialQuantity)) {
                // Click the button to increase the quantity
                cy.get('.fa-plus').click({ force: true });
                cy.wait(3000);
          
                // Get the updated quantity
                cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
                  .invoke('text')
                  .then((updatedQuantityText) => {
                    const updatedQuantity = extractLastDigitFromString(updatedQuantityText);
          
                    cy.log('Updated Quantity Text:', updatedQuantityText); // Log the updated quantity text
          
                    // Check if updatedQuantity is a valid number
                    if (!isNaN(updatedQuantity)) {
                      // Assert that the updated quantity is exactly one greater than the initial quantity
                      expect(updatedQuantity).to.equal(initialQuantity + 1);
                    } else {
                      throw new Error('Updated Quantity is NaN');
                    }
          
                    // Click the button to decrease the quantity
                    cy.get('.fa-minus').click({ force: true });
                    cy.wait(3000);
          
                    // Get the decreased quantity
                    cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
                      .invoke('text')
                      .then((decreasedQuantityText) => {
                        const decreasedQuantity = extractLastDigitFromString(decreasedQuantityText);
          
                        cy.log('Decreased Quantity Text:', decreasedQuantityText); // Log the decreased quantity text
          
                        // Check if decreasedQuantity is a valid number
                        if (!isNaN(decreasedQuantity)) {
                          // Assert that the decreased quantity is exactly one less than the initial quantity
                          expect(decreasedQuantity).to.equal(initialQuantity);
                        } else {
                          throw new Error('Decreased Quantity is NaN');
                        }
                      });
                  });
              } else {
                throw new Error('Initial Quantity is NaN');
              }
            });
        
    });

    it('should add 1 product to the cart THIRD PRODUCT', () => {
      cy.contains('.gr-header-menu__link', 'Brands')
      .click();
    
        cy.wait(5000);

        cy.intercept('GET', 'https://eu.app.mountainproductions.com/api/get_data?shop=mtn-shop-eu.myshopify.com*').as('gettingBrand');
    
        cy.contains('.gr-brands-list__item', 'Buff')
          .click();

        cy.wait('@gettingBrand')
    
        //cy.wait(10000);
    
        cy.get('h1')
          .should('contain.text', 'Buff')
    
        cy.get('div.gr-card-rich-product__details')
          .find('a[href="/products/buff-windproof-neckwear"]')
          .click();

        cy.intercept('GET', '/cart.json').as('addingToCart');
    
        cy.get('.product-form__submit')
          .click()
          .then(() => {
            cy.wait('@addingToCart');
            //cy.wait(5000);
            //cy.intercept('GET', '/cart.json').as('checkingCart');
            cy.contains('.gr-cart__checkout-btn', 'View cart ').click( {force: true} )
          });

        //cy.wait('@checkingCart');
    
        cy.get('.gr-cart-item__link')
          .should('contain.text', 'Buff Windproof Neckwear');
    
          function extractLastDigitFromString(text) {
            const regex = /(\d+)\D*$/;
            const match = text.match(regex);
            return match ? parseInt(match[1]) : NaN;
          }
          
          cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
            .invoke('text')
            .then((initialQuantityText) => {
              const initialQuantity = extractLastDigitFromString(initialQuantityText);
          
              cy.log('Initial Quantity Text:', initialQuantityText); // Log the initial quantity text
          
              // Check if initialQuantity is a valid number
              if (!isNaN(initialQuantity)) {
                // Click the button to increase the quantity
                cy.get('.fa-plus').click({ force: true });
                cy.wait(3000);
          
                // Get the updated quantity
                cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
                  .invoke('text')
                  .then((updatedQuantityText) => {
                    const updatedQuantity = extractLastDigitFromString(updatedQuantityText);
          
                    cy.log('Updated Quantity Text:', updatedQuantityText); // Log the updated quantity text
          
                    // Check if updatedQuantity is a valid number
                    if (!isNaN(updatedQuantity)) {
                      // Assert that the updated quantity is exactly one greater than the initial quantity
                      expect(updatedQuantity).to.equal(initialQuantity + 1);
                    } else {
                      throw new Error('Updated Quantity is NaN');
                    }
          
                    // Click the button to decrease the quantity
                    cy.get('.fa-minus').click({ force: true });
                    cy.wait(3000);
          
                    // Get the decreased quantity
                    cy.get('.rebuy-cart__flyout-item-quantity-widget-label')
                      .invoke('text')
                      .then((decreasedQuantityText) => {
                        const decreasedQuantity = extractLastDigitFromString(decreasedQuantityText);
          
                        cy.log('Decreased Quantity Text:', decreasedQuantityText); // Log the decreased quantity text
          
                        // Check if decreasedQuantity is a valid number
                        if (!isNaN(decreasedQuantity)) {
                          // Assert that the decreased quantity is exactly one less than the initial quantity
                          expect(decreasedQuantity).to.equal(initialQuantity);
                        } else {
                          throw new Error('Decreased Quantity is NaN');
                        }
                      });
                  });
              } else {
                throw new Error('Initial Quantity is NaN');
              }
            });
        
    });
});