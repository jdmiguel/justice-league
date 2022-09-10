describe('intro', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows intro logo and chars', () => {
    cy.get('[data-testid=intro-logo]').should('be.visible');
    cy.get('[data-testid=intro-chars]').should('be.visible');
  });

  it('hides intro logo and chars after animation', () => {
    cy.wait(6000);
    cy.get('[data-testid=intro-logo]').should('not.exist');
    cy.get('[data-testid=intro-chars]').should('not.exist');
  });
});
