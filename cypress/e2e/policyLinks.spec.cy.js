/// <reference types="cypress" />

describe('should visit all policy links', () => {
  beforeEach(() => {
    cy.visit('/');
      
    cy.wait(20000);
    
    cy.get('[aria-label="Close form 1"]')
    .click();
      
  }); 
  
  it('should visit Terms of use link', () => {

    cy.contains('.gr-footer__nav-link', 'TERMS OF USE')
      .click();

    cy.assertPageUrl('/pages/terms-of-use');

    cy.get('h1')
      .should('contain.text', 'Terms of Use');
  });

});