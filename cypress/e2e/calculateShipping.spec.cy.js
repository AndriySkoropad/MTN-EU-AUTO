/// <reference types="cypress" />


describe('calculatig shipping', () => {
    beforeEach(() => {
      cy.visit('/');
      
      
      
    });

    it('should allow user to calculate shipping UKRAINE', () => {
    
        cy.contains('.gr-header-menu__link', 'Brands')
          .click();
    
        cy.wait(5000);
    
        cy.contains('.gr-brands-list__item', 'Baselight')
          .click();
    
        cy.wait(10000);
    
        cy.get('div.gr-card-rich-product__details')
          .find('a[href="/products/baselight-wheel-attachment"]')
          .click();

        cy.wait(2000);
    
        cy.contains('.gr-summary__heading', 'Shipping calculator')
          .click();

        cy.wait(2000);
    
        cy.get('#gr_shipping_calculator_country')
          .select('Ukraine');
    
        cy.get('#gr_shipping_calculator_zip')
          .type('30511');
    
        cy.get('.gr-shipping-calc__submit')
          .click();

        cy.wait(5000);
    
        cy.get('.gr-shipping-calc__response')
          .should('exist');
    
    });

    it.only('should allow user to calculate shipping ALBANIA', () => {
    
        cy.contains('.gr-header-menu__link', 'Brands')
          .click();
    
        cy.wait(5000);
    
        cy.contains('.gr-brands-list__item', 'Beneca')
          .click();
    
        cy.wait(10000);
    
        cy.get('div.gr-card-rich-product__details')
          .find('a[href="/products/yale-zgr-35-1000-ratchet-lashing"]')
          .click();

        cy.wait(2000);
    
        cy.contains('.gr-summary__heading', 'Shipping calculator')
          .click();

        cy.wait(2000);
    
        cy.get('#gr_shipping_calculator_country')
          .select('Albania');
    
        cy.get('#gr_shipping_calculator_zip')
          .type('1000');
    
        cy.get('.gr-shipping-calc__submit')
          .click();

        cy.wait(5000);
    
        cy.get('.gr-shipping-calc__response')
          .should('exist');
    
    });

    it('should allow user to calculate shipping BELGIUM', () => {
    
        cy.contains('.gr-header-menu__link', 'Brands')
          .click();
    
        cy.wait(5000);
    
        cy.contains('.gr-brands-list__item', 'Dirty Rigger')
          .click();
    
        cy.wait(10000);
    
        cy.get('div.gr-card-rich-product__details')
          .find('a[href="/products/riggers-multi-tool"]')
          .click();

        cy.wait(2000);
    
        cy.contains('.gr-summary__heading', 'Shipping calculator')
          .click();

        cy.wait(2000);
    
        cy.get('#gr_shipping_calculator_country')
          .select('Belgium');
    
        cy.get('#gr_shipping_calculator_zip')
          .type('7943');
    
        cy.get('.gr-shipping-calc__submit')
          .click();

        cy.wait(5000);
    
        cy.get('.gr-shipping-calc__response')
          .should('exist');
    
    });

    it('should allow user to calculate shipping DENMARK', () => {
    
        cy.contains('.gr-header-menu__link', 'Brands')
          .click();
    
        cy.wait(5000);
    
        cy.contains('.gr-brands-list__item', 'Edeldrid')
          .click();
    
        cy.wait(10000);
    
        cy.get('div.gr-card-rich-product__details')
          .find('a[href="/products/edelrid-fuse"]')
          .click();

        cy.wait(2000);
    
        cy.contains('.gr-summary__heading', 'Shipping calculator')
          .click();

        cy.wait(2000);
    
        cy.get('#gr_shipping_calculator_country')
          .select('Denmark');
    
        cy.get('#gr_shipping_calculator_zip')
          .type('2300');
    
        cy.get('.gr-shipping-calc__submit')
          .click();

        cy.wait(5000);
    
        cy.get('.gr-shipping-calc__response')
          .should('exist');
    
    });

    it('should allow user to calculate shipping ITALY', () => {
    
        cy.contains('.gr-header-menu__link', 'Brands')
          .click();
    
        cy.wait(5000);
    
        cy.contains('.gr-brands-list__item', 'Lee Filters')
          .click();
    
        cy.wait(10000);
    
        cy.get('div.gr-card-rich-product__details')
          .find('a[href="/products/lee-filter-241"]')
          .click();

        cy.wait(2000);
    
        cy.contains('.gr-summary__heading', 'Shipping calculator')
          .click();

        cy.wait(2000);
    
        cy.get('#gr_shipping_calculator_country')
          .select('Italy');

        cy.get('#gr_shipping_calculator_province')
          .select('Verona');
    
        cy.get('#gr_shipping_calculator_zip')
          .type('37100');
    
        cy.get('.gr-shipping-calc__submit')
          .click();

        cy.wait(5000);
    
        cy.get('.gr-shipping-calc__response')
          .should('exist');

        
    
    });

    it('should allow user to calculate shipping SPAIN', () => {
    
        cy.contains('.gr-header-menu__link', 'Brands')
          .click();
    
        cy.wait(5000);
    
        cy.contains('.gr-brands-list__item', 'PHC')
          .click();
    
        cy.wait(10000);
    
        cy.get('div.gr-card-rich-product__details')
          .find('a[href="/products/phc-klever-x-change-w-double-head"]')
          .click();

        cy.wait(2000);
    
        cy.contains('.gr-summary__heading', 'Shipping calculator')
          .click();

        cy.wait(2000);
    
        cy.get('#gr_shipping_calculator_country')
          .select('Spain');
    
        cy.get('#gr_shipping_calculator_zip')
          .type('08830');
    
        cy.get('.gr-shipping-calc__submit')
          .click();

        cy.wait(5000);
    
        cy.get('.gr-shipping-calc__response')
          .should('exist');
    
    });

    it('should send error message when the user tries to type invalid postcdoe', () => {
        cy.visit('https://shopmtn.eu/products/copy-of-rock-exotica-akimbo-ascender');
    
        cy.contains('.gr-summary__heading', 'Shipping calculator')
          .click();

        cy.wait(2000);
    
        cy.get('#gr_shipping_calculator_country')
          .select('France');
    
        cy.get('#gr_shipping_calculator_zip')
          .type('jfkd38393');
    
        cy.get('.gr-shipping-calc__submit')
          .click();

        cy.wait(2000);
    
        cy.get('.gr-shipping-error')
          .should('contain.text', 'Enter a valid postal code for France');
      });
    



});    