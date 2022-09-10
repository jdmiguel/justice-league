describe('intro', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByTestId('intro-logo').as('introLogo');
    cy.findByTestId('intro-chars').as('introChars');
  });

  it('shows intro logo and chars', () => {
    cy.get('@introLogo').should('be.visible');
    cy.get('@introChars').should('be.visible');
  });

  it('hides intro logo and chars after animation', () => {
    cy.wait(6000);

    cy.get('@introLogo').should('not.exist');
    cy.get('@introChars').should('not.exist');
  });
});
