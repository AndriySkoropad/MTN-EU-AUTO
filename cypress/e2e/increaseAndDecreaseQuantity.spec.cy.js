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
    
        cy.contains('.gr-brands-list__item', 'Gutster')
          .click();
    
        cy.wait(10000);
    
        cy.get('h1')
          .should('contain.text', 'Gutster')
    
        cy.get('div.gr-card-rich-product__details')
          .find('a[href="/products/gutster-small-nail-puller"]')
          .click();
    
        cy.get('.product-form__submit')
          .click()
          .then(() => {
            cy.wait(5000);
            cy.contains('.gr-cart__checkout-btn', 'View cart ').click( {force: true} )
          });

        cy.wait(2000);  
    
        cy.get('.gr-cart-item__link')
          .should('contain.text', 'Gutster Small Nail Puller 76cm');
    
        cy.get('.quantity__input')
          .invoke('val').as('initialQuantity')
          .then((initialQuantity) => {
            cy.log('Initial Quantity:', initialQuantity);
        
            // Click the button to increase the quantity
            cy.get('button[name="plus"]').last().click( {force: true} );

            cy.wait(3000);
        
            // Get the updated quantity
            cy.get('.quantity__input')
              .invoke('val').as('updatedQuantity')
              .then((updatedQuantity) => {
                cy.log('Updated Quantity:', updatedQuantity);
        
                // Assert that the updated quantity is exactly one greater than the initial quantity
                const parsedInitialQuantity = parseInt(initialQuantity);
                const parsedUpdatedQuantity = parseInt(updatedQuantity);
                expect(parsedUpdatedQuantity).to.equal(parsedInitialQuantity + 1);
    
                ///cy.wait(5000);
    
                cy.get('button[name="minus"]').last().click( {force: true} );

                cy.wait(3000);
    
                // Get the updated quantity after decrease
                cy.get('.quantity__input').invoke('val').as('decreasedQuantity')
                  .then((decreasedQuantity) => {
                    cy.log('Decreased Quantity:', decreasedQuantity);
    
                    // Assert that the decreased quantity is exactly one less than the initial quantity
                    const parsedDecreasedQuantity = parseInt(decreasedQuantity);
                    expect(parsedDecreasedQuantity).to.equal(parsedInitialQuantity);
                });
            });
        });
        
    });

    it('should add 1 product to the cart SECOND PRODUCT', () => {
      cy.contains('.gr-header-menu__link', 'Brands')
      .click();
    
        cy.wait(5000);
    
        cy.contains('.gr-brands-list__item', 'Columbus McKinnon')
          .click();
    
        cy.wait(10000);
    
        cy.get('h1')
          .should('contain.text', 'Columbus McKinnon')
    
        cy.get('div.gr-card-rich-product__details')
          .find('a[href="/products/cm-next-gen-lodestar-electric-chain-hoist-2000kg"]')
          .click();
    
        cy.get('.product-form__submit')
          .click()
          .then(() => {
            cy.wait(5000);
            cy.contains('.gr-cart__checkout-btn', 'View cart ').click( {force: true} )
          });
    
        cy.get('.gr-cart-item__link')
          .should('contain.text', 'CM Lodestar Electric Chain Hoist - 2000kg');
    
        cy.get('.quantity__input')
          .invoke('val').as('initialQuantity')
          .then((initialQuantity) => {
            cy.log('Initial Quantity:', initialQuantity);
        
            // Click the button to increase the quantity
            cy.get('button[name="plus"]').last().click( {force: true} );

            cy.wait(3000);
        
            // Get the updated quantity
            cy.get('.quantity__input')
              .invoke('val').as('updatedQuantity')
              .then((updatedQuantity) => {
                cy.log('Updated Quantity:', updatedQuantity);
        
                // Assert that the updated quantity is exactly one greater than the initial quantity
                const parsedInitialQuantity = parseInt(initialQuantity);
                const parsedUpdatedQuantity = parseInt(updatedQuantity);
                expect(parsedUpdatedQuantity).to.equal(parsedInitialQuantity + 1);
    
                ///cy.wait(5000);
    
                cy.get('button[name="minus"]').last().click( {force: true} );

                cy.wait(3000);
    
                // Get the updated quantity after decrease
                cy.get('.quantity__input').invoke('val').as('decreasedQuantity')
                  .then((decreasedQuantity) => {
                    cy.log('Decreased Quantity:', decreasedQuantity);
    
                    // Assert that the decreased quantity is exactly one less than the initial quantity
                    const parsedDecreasedQuantity = parseInt(decreasedQuantity);
                    expect(parsedDecreasedQuantity).to.equal(parsedInitialQuantity);
                });
            });
        });
        
    });

    it('should add 1 product to the cart THIRD PRODUCT', () => {
      cy.contains('.gr-header-menu__link', 'Brands')
      .click();
    
        cy.wait(5000);
    
        cy.contains('.gr-brands-list__item', 'Buff')
          .click();
    
        cy.wait(10000);
    
        cy.get('h1')
          .should('contain.text', 'Buff')
    
        cy.get('div.gr-card-rich-product__details')
          .find('a[href="/products/buff-windproof-neckwear"]')
          .click();
    
        cy.get('.product-form__submit')
          .click()
          .then(() => {
            cy.wait(5000);
            cy.contains('.gr-cart__checkout-btn', 'View cart ').click( {force: true} )
          });
    
        cy.get('.gr-cart-item__link')
          .should('contain.text', 'Buff Windproof Neckwear');
    
        cy.get('.quantity__input')
          .invoke('val').as('initialQuantity')
          .then((initialQuantity) => {
            cy.log('Initial Quantity:', initialQuantity);
        
            // Click the button to increase the quantity
            cy.get('button[name="plus"]').last().click( {force: true} );

            cy.wait(3000);
        
            // Get the updated quantity
            cy.get('.quantity__input')
              .invoke('val').as('updatedQuantity')
              .then((updatedQuantity) => {
                cy.log('Updated Quantity:', updatedQuantity);
        
                // Assert that the updated quantity is exactly one greater than the initial quantity
                const parsedInitialQuantity = parseInt(initialQuantity);
                const parsedUpdatedQuantity = parseInt(updatedQuantity);
                expect(parsedUpdatedQuantity).to.equal(parsedInitialQuantity + 1);
    
                ///cy.wait(5000);
    
                cy.get('button[name="minus"]').last().click( {force: true} );

                cy.wait(3000);
    
                // Get the updated quantity after decrease
                cy.get('.quantity__input').invoke('val').as('decreasedQuantity')
                  .then((decreasedQuantity) => {
                    cy.log('Decreased Quantity:', decreasedQuantity);
    
                    // Assert that the decreased quantity is exactly one less than the initial quantity
                    const parsedDecreasedQuantity = parseInt(decreasedQuantity);
                    expect(parsedDecreasedQuantity).to.equal(parsedInitialQuantity);
                });
            });
        });
        
    });
});