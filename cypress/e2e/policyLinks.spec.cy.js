/// <reference types="cypress" />

describe('should visit all policy links', () => {
  beforeEach(() => {
    cy.visit('/');
      
    cy.wait(20000);
    
    cy.get('[aria-label="Close dialog 1"]')
    .click();
      
  }); 
  
  it('should visit Terms of use link', () => {

    cy.contains('.gr-footer__nav-link', 'TERMS OF USE')
      .click();

    cy.assertPageUrl('/pages/terms-of-use');

    cy.get('h1')
      .should('contain.text', 'Terms of Use');
  });

  it('should visit Privacy Policy link', () => {

    cy.contains('.gr-footer__nav-link', 'PRIVACY POLICY')
      .click();

    cy.assertPageUrl('/pages/privacy-policy');

    cy.get('h1')
      .should('contain.text', 'Privacy Policy');
  });


  it('should visit Terms of Sale link', () => {

    cy.contains('.gr-footer__nav-link', 'TERMS OF SALE')
      .click();

    cy.assertPageUrl('/pages/terms-of-sale');

    cy.get('h1')
      .should('contain.text', 'Terms of Sale');
  });

  it('should visit Return Policy link', () => {

    cy.contains('.gr-footer__nav-link', 'RETURN POLICY')
      .click();

    cy.assertPageUrl('/pages/refund-return-policy');

    cy.get('h1')
      .should('contain.text', 'Refund & Return Policy');
  });

  it('should visit FAQ link', () => {

    cy.contains('.gr-footer__nav-link', 'FAQS')
      .click();

    cy.assertPageUrl('/pages/faqs');

    cy.get('h1')
      .should('contain.text', 'FAQs');
  });

  it('should visit Our Story link', () => {

    cy.contains('.gr-footer__nav-link', 'OUR STORY')
      .click();

    cy.assertPageUrl('/pages/about');

    cy.get('h1')
      .should('contain.text', 'Our Story');
  });

  it('should visit Home link', () => {

    cy.contains('.gr-footer__nav-link', 'HOME')
      .click();

    cy.assertPageUrl('/');
  });

});