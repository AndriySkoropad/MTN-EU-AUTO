/// <reference types="cypress" />

describe('home page', () => {

  it('should allow user to visit home page', () => {

    cy.visit('/');

    cy.wait(20000);

    cy.get('[aria-label="Close dialog 1"]')
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


    cy.contains('.gr-header-menu', 'Workwear')
      .should('exist');
    cy.contains('.gr-header-menu', 'Height Safety & PPE')
      .should('exist');
    cy.contains('.gr-header-menu', 'Tools & Lighting')
      .should('exist');
    cy.contains('.gr-header-menu', 'Industrial')
      .should('exist');
    cy.contains('.gr-header-menu', 'Entertainment')
      .should('exist');
    cy.contains('.gr-header-menu', 'Brands')
      .should('exist');
    cy.contains('.gr-header-menu', 'Special Offers')
      .should('exist');
    

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

    cy.contains('.gr-footer__navigation', 'HOME')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'OUR STORY')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'RFQ')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'RESOURCES')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'CONTACT')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'BLOG')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'FEEDBACK')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'TERMS OF USE')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'TERMS OF SALE')
      .should('exist');
    cy.contains('.gr-footer__navigation','RETURN POLICY')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'PRIVACY POLICY')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'ACCOUNT SIGN IN')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'VIEW CART')
      .should('exist');
    cy.contains('.gr-footer__navigation', 'FAQS')
      .should('exist');
    cy.contains('.gr-with-icon', 'Contact Us')
      .should('exist');
    cy.contains('.gr-btn', 'Request A Quote')
      .should('exist');
    cy.contains('.gr-footer__actions', 'Click Here to Sign Up')
      .should('exist');

    cy.contains('.gr-footer__nav', 'QUICK LINKS')
      .find('li')
      .should('have.length', 7);

    cy.contains('.gr-footer__nav', 'CUSTOMER SERVICE')
      .find('li')
      .should('have.length', 7);


    cy.get('.icon-facebook')
      .should('exist');
    cy.get('.icon-instagram')
      .should('exist');
    cy.get('.icon-xcorp')
      .should('exist');
    cy.get('.icon-youtube')
      .should('exist');
    cy.get('.icon-linkedin')
      .should('exist');
    cy.get('.icon-mail--s')
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