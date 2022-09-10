describe('heroMenu - hover interactions', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(6000);
    cy.findAllByRole('navigation')
      .last()
      .find('li')
      .first()
      .find('button')
      .as('supermanHeadingBtn');
    cy.findAllByRole('navigation').first().find('button').eq(1).as('batmanSidedrawerBtn');
  });

  it('highlights active hero when hovering', () => {
    cy.get('@supermanHeadingBtn').realHover();
    cy.wait(1000);
    cy.findAllByTestId('hero-menu-bg').first().should('have.css', 'opacity', '0.3');
    cy.findByTestId('superman-vector-logo')
      .should('have.css', 'width', '575px')
      .find('path')
      .should('have.css', 'fill', 'rgb(24, 98, 158)');
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
});
