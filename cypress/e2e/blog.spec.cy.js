/// <reference types="cypress" />


describe('blog page', () => {
    it('should allow user to visit blog and article', () => {
      cy.visit('/');
  
      cy.wait(20000);

      cy.get('[aria-label="Close form 1"]')
        .click();
  
      cy.contains('.gr-footer__nav-link', 'BLOG')
        .click();
  
      cy.assertPageUrl('/blogs/news');
  
      cy.get('h1')
        .should('contain.text', 'News');
  
      cy.get('.gr-blog-search')
        .should('exist');
  
      cy.get('div.gr-main-blog__articles')
        .find('a')
        .its('length')
        .should('be.gt', 1);
  
      cy.get('.gr-pagination__list')
        .should('exist');
  
      cy.contains('.gr-article-card__heading', 'Everything You Need to Know to Choose The Right Pallet Truck - 10 Top Tips!')
        .click();
  
      cy.contains('h1', 'Everything You Need to Know to Choose The Right Pallet Truck - 10 Top Tips!')
        .should('exist');
  
      cy.get('.gr-author-info')
        .should('exist');
  
      cy.get('.gr-sharing-wrap')
        .should('exist');
  
      cy.get('div.gr-additional-articles')
        .find('a')
        .its('length')
        .should('be.gt', 1);
  
    });
  });