/// <reference types="cypress" />

describe('Resources page', () => {
    beforeEach(() => {
      cy.visit('/');
  
      cy.wait(20000);

      cy.get('[aria-label="Close dialog 1"]')
        .click();
    });
    
    it('should allow user to visit Resources page', () => {
  
      cy.contains('.gr-footer__nav-link', 'RESOURCES')
        .click();
  
      cy.assertPageUrl('/pages/resources');
  
      cy.get('h1')
        .should('contain.text', 'Resources');
  
      cy.get('div.gr-main-page__content')
        .find('a')
        .its('length')
        .should('be.gt', 1);
    });
  
  });