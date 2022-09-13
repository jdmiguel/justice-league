describe('navigation', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(6000);
  });

  it('navigates correctly through the application', () => {
    // Click batman sidedrawer item
    cy.get('[data-testid=sidedrawer]').find('button').eq(1).realClick();
    cy.wait(1000);
    // Click batman heading
    cy.get('[data-testid=hero-heading]').find('li').eq(1).find('button').realClick();
    cy.wait(1500);
    cy.location('pathname').should('equal', '/batman/profile');
    // Click enemies menu item
    cy.get('header').find('li').eq(2).realClick();
    cy.wait(1500);
    cy.location('pathname').should('equal', '/batman/enemies');
    // Click timeline menu item
    cy.get('header').find('li').eq(3).realClick();
    cy.wait(1500);
    cy.location('pathname').should('equal', '/batman/timeline');
    // Click home menu item
    cy.get('header').find('li').eq(0).realClick();
    cy.wait(1500);
    cy.location('pathname').should('equal', '/');
    // Shows batman as active hero on hero menu
    cy.get('[data-testid=hero-menu-bg]').eq(1).should('be.visible');
    cy.get('[data-testid=batman-vector-logo]').parent().should('be.visible');
    cy.get('[data-testid=sidedrawer]').find('button').eq(1).should('be.visible');
  });
});
