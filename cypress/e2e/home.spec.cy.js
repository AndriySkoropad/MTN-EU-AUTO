/// <reference types="cypress" />

describe('home page', () => {

  it('should allow user to visit home page', () => {

    cy.visit('/');

    cy.wait(20000);

    cy.get('[aria-label="Close form 1"]')
      .click();

    cy.get('.gr-search-form')
      .should('exist');

    cy.get('.gr-logo')
      .click();
    cy.assertPageUrl('/');

    cy.get('.gr-inc-switcher')
      .should('contain.text', 'incl. VAT')
      .click();
    cy.get('.gr-inc-switcher')
      .should('contain.text', 'excl. VAT')
      .click();


    cy.get('.gr-header-menu')
      .contains('a', 'Workwear');
    cy.get('.gr-header-menu')
      .contains('a', 'Height Safety & PPE');
    cy.get('.gr-header-menu')
      .contains('a', 'Tools & Lighting');
    cy.get('.gr-header-menu')
      .contains('a', 'Industrial');
    cy.get('.gr-header-menu')
      .contains('a', 'Entertainment');
    cy.get('.gr-header-menu')
      .contains('a', 'Brands');
    cy.get('.gr-header-menu')
      .contains('a', 'Special Offers');
    

    cy.get('.gr-slider-wrapper')
      .should('exist');

    cy.get('h2')
      .should('contain.text', 'Top Categories');
    
    cy.get('.icon-caret')
      .should('exist');
     
    cy.get('.section-gr-brands-slider')
      .should('contain.text', 'Our Brands');

    cy.get('h2')
      .should('contain.text', 'Who We Are');

    cy.get('.gr-btn')
      .should('contain.text', 'Gear Up');

    cy.get('.gr-header-btn--account')
      .should('contain.text', 'Log in');

    cy.get('#cart-icon-bubble')
      .should('contain.text', 'Cart')

    cy.get('.gr-footer__navigation')
      .contains('a', 'HOME');
    cy.get('.gr-footer__navigation')
      .contains('a', 'OUR STORY');
    cy.get('.gr-footer__navigation')
      .contains('a', 'RFQ');
    cy.get('.gr-footer__navigation')
      .contains('a', 'RESOURCES');
    cy.get('.gr-footer__navigation')
      .contains('a', 'CONTACT');
    cy.get('.gr-footer__navigation')
      .contains('a', 'BLOG');
    cy.get('.gr-footer__navigation')
      .contains('a', 'FEEDBACK');
    cy.get('.gr-footer__navigation')
      .contains('a', 'TERMS OF USE');
    cy.get('.gr-footer__navigation')
      .contains('a', 'TERMS OF SALE');
    cy.get('.gr-footer__navigation')
      .contains('a', 'RETURN POLICY');
    cy.get('.gr-footer__navigation')
      .contains('a', 'PRIVACY POLICY');
    cy.get('.gr-footer__navigation')
      .contains('a', 'ACCOUNT SIGN IN');
    cy.get('.gr-footer__navigation')
      .contains('a', 'VIEW CART');
    cy.get('.gr-footer__navigation')
      .contains('a', 'FAQS');
    cy.get('.gr-with-icon')
      .contains('a', 'Contact Us');
    cy.get('.gr-btn')
      .contains('a', 'Request A Quote');
    cy.get('.gr-footer__actions')
      .contains('Click Here to Sign Up');


    cy.get('.icon-facebook')
      .should('exist');
    cy.get('.icon-instagram')
      .should('exist');
    cy.get('.icon-twitter')
      .should('exist');
    cy.get('.icon-youtube')
      .should('exist');
    cy.get('.icon-linkedin')
      .should('exist');
    cy.get('.icon-mail')
      .should('exist');

    cy.get('a[href="https://www.facebook.com/mtnshopemea/"]')
      .should('exist');
    cy.get('a[href="https://www.instagram.com/mtnshopemea/"]')
      .should('exist');
    cy.get('a[href="https://twitter.com/mtnshopemea?lang=en"]')
      .should('exist');
    cy.get('a[href="https://www.youtube.com/channel/UCgO36nA9fDa5kUotQLqvfrw"]')
      .should('exist');
    cy.get('a[href="http://www.linkedin.com/company/mtn-shop-emea"]')
      .should('exist');
    cy.get('a[href="mailto:info@shopmtn.eu"]')
      .should('exist');
  });

});