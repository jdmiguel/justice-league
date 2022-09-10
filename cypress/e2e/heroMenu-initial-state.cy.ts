describe('heroMenu - initial state', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(6000);
    cy.findAllByRole('navigation').first().as('sidedrawer');
    cy.findAllByRole('navigation').last().as('heroHeadings');
  });

  it('shows the active bg', () => {
    cy.findAllByTestId('hero-menu-bg')
      .first()
      .should('be.visible')
      .should('have.css', 'background-image')
      .and('include', '/superman-hero-menu-bg.jpg');
  });

  it('hides the inactive bgs', () => {
    cy.findAllByTestId('hero-menu-bg').each((heroBg, index) => {
      if (index > 0) {
        cy.wrap(heroBg).should('be.hidden');
      }
    });
  });

  it('shows the active vector logo', () => {
    cy.findByTestId('superman-vector-logo').parent().should('be.visible');
  });

  it('hides the inactive vector logos', () => {
    cy.findByTestId('batman-vector-logo').parent().should('be.hidden');
    cy.findByTestId('wonderwoman-vector-logo').parent().should('be.hidden');
    cy.findByTestId('flash-vector-logo').parent().should('be.hidden');
    cy.findByTestId('greenlantern-vector-logo').parent().should('be.hidden');
    cy.findByTestId('aquaman-vector-logo').parent().should('be.hidden');
    cy.findByTestId('cyborg-vector-logo').parent().should('be.hidden');
  });

  it('shows the active heading', () => {
    cy.get('@heroHeadings')
      .find('h2')
      .first()
      .find('span')
      .each((heroChar) => {
        cy.wrap(heroChar).should('be.visible');
      });
  });

  it('hides inactive headings', () => {
    cy.get('@heroHeadings')
      .find('h2')
      .each((heroHeading, index) => {
        if (index > 0) {
          cy.wrap(heroHeading).each((heroChar) => {
            cy.wrap(heroChar).find('span').should('be.hidden');
          });
        }
      });
  });

  it('shows the active sidedrawer item', () => {
    cy.get('@sidedrawer')
      .find('button')
      .first()
      .find('img')
      .should('be.visible')
      .parent()
      .next()
      .should('have.text', 'Superman')
      .should('be.visible');
  });

  it('hides the inactive sidedrawer items', () => {
    cy.get('@sidedrawer')
      .find('button')
      .each((sidedrawerBtn, index) => {
        if (index > 0) {
          cy.wrap(sidedrawerBtn)
            .find('img')
            .should('have.css', 'opacity', '0.5')
            .parent()
            .next()
            .should('be.hidden');
        }
      });
  });
});
