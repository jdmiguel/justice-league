describe('heroMenu - interactions', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(6000);
    cy.get('[data-testid=sidedrawer]').find('button').eq(1).as('batmanSidedrawerBtn');
    cy.get('[data-testid=hero-heading]').find('li').first().find('button').as('supermanHeadingBtn');
  });

  it('highlights inactive sidedrawer item when hovering', () => {
    cy.get('@batmanSidedrawerBtn').realHover();
    cy.wait(500);
    cy.get('@batmanSidedrawerBtn')
      .find('img')
      .should('be.visible')
      .parent()
      .next()
      .should('be.visible');
  });

  it('highlights active hero when hovering', () => {
    cy.get('@supermanHeadingBtn').realHover();
    cy.wait(1000);
    cy.get('[data-testid=hero-menu-bg]').first().should('have.css', 'opacity', '0.3');
    cy.get('[data-testid=superman-vector-logo]')
      .should('have.css', 'width', '575px')
      .find('path')
      .should('have.css', 'fill', 'rgb(24, 98, 158)');
  });

  it('activates the related hero when a sidedrawer item is clicked', () => {
    cy.get('@batmanSidedrawerBtn').realClick();
    cy.wait(1000);
    // shows the clicked sidedrawer item active
    cy.get('@batmanSidedrawerBtn')
      .find('img')
      .should('be.visible')
      .parent()
      .next()
      .should('be.visible');
    // shows the related bg active
    cy.get('[data-testid=hero-menu-bg]')
      .eq(1)
      .should('be.visible')
      .should('have.css', 'background-image')
      .and('include', '/batman-hero-menu-bg.jpg');
    // shows the related vector logo active
    cy.get('[data-testid=batman-vector-logo]').parent().should('be.visible');
  });

  it('navigates to hero page when the hero heading is clicked', () => {
    cy.get('@supermanHeadingBtn').realClick();
    cy.wait(1500);
    cy.url().should('equal', 'http://localhost:8888/superman/profile');
  });
});
