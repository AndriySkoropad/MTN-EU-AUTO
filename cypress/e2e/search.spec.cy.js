/// <reference types="cypress" />

describe('search field', () => {

  const product = {
    nameFirst: 'MTN BOX Large Insert Package',
    nameSecond: 'Blaklader Flame Retardant Balaclava',
    name: 'Dunlop Safety Boots - Protomaster Chemical Resistant',
    nameThird: 'Kuzar Tower Lift K-2',
    nameFourth: 'Key Clamp: Doughty Handrail Bracket',
    nameFifth: 'MTN Chain Slider Inserts',
    nameSixth: 'Doughty Grip Helper',
    nameSeventh: 'Dirty Rigger Glove Clip',
    nameEighth: 'Baselight '
  };

  const part = {
    partFirst: '',
    partSecond: ''
  };
  
  it('should allow user to search different products', () => {
    cy.visit('/');

    cy.wait(20000);

    cy.get('[aria-label="Close form 1"]')
        .click();

    cy.get('#Search-In-Modal')
      .type(product.nameFirst);

    cy.get(`a[href="/products/${part.partFirst}"], .gr-link`)
      .contains(product.nameFirst)
      .click();

    cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameFirst)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameFirst);

    cy.get('.gr-logo-wrapper')
      .click();


    cy.get('#Search-In-Modal')
      .type(product.nameSecond);

      cy.get(`a[href="/products/${part.partSecond}"], .gr-link`)
      .contains(product.nameSecond)
      .click();
      
    cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameSecond)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameSecond);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameThird);

    cy.get('.gr-link')
      .contains(product.nameThird)
      .click();

    cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameThird)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameThird);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameFourth);

      cy.get('.gr-link')
      .contains(product.nameFourth)
      .click();

    cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameFourth).should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameFourth);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameFifth);

    cy.get('.gr-link')
      .contains(product.nameFifth)
      .click();

    cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameFifth)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameFifth);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameSixth);

    cy.get('.gr-link')
      .contains(product.nameSixth)
      .click();

    cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameSixth)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameSixth);

    cy.get('.gr-logo-wrapper')
      .click();



    cy.get('#Search-In-Modal')
      .type(product.nameSeventh);

    cy.get('.gr-link')
      .contains(product.nameSeventh)
      .click();

    cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameSeventh)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameSeventh);

    cy.get('.gr-logo-wrapper')
      .click();



    /*cy.get('#Search-In-Modal')
      .type(product.nameEighth);

    cy.get('.gr-search-results')
      .should('contain', product.nameEighth)
    

    cy.wait(4000);

    cy.get('[itemprop="name"]')
      .click({force: true});

    cy.contains('span', product.nameEighth)
      .should('exist');

    cy.get('.gr-product__title')
      .should('contain', product.nameEighth);

    cy.get('.gr-logo-wrapper')
      .click();*/
  });
});