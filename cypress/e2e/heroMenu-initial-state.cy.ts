describe('heroMenu - initial state', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(6000);
  });

  it('displays the header corner with the correct link', () => {
    cy.get('header')
      .find('a')
      .should('have.attr', 'href', 'https://github.com/jdmiguel/justice-league');
  });

  it('displays the header corner with the correct link', () => {
    cy.get('footer').find('a').should('have.attr', 'href', 'https://jdmiguel.netlify.app');
  });

  it('shows the active bg', () => {
    cy.get('[data-testid=hero-menu-bg]')
      .first()
      .should('be.visible')
      .should('have.css', 'background-image')
      .and('include', '/superman-hero-menu-bg.jpg');
  });

  it('hides the inactive bgs', () => {
    cy.get('[data-testid=hero-menu-bg]').each((heroBg, index) => {
      if (index > 0) {
        cy.wrap(heroBg).should('be.hidden');
      }
    });
  });

  it('shows the active vector logo', () => {
    cy.get('[data-testid=superman-vector-logo]').parent().should('be.visible');
  });

  it('hides the inactive vector logos', () => {
    cy.get('[data-testid=batman-vector-logo]').parent().should('be.hidden');
    cy.get('[data-testid=wonderwoman-vector-logo]').parent().should('be.hidden');
    cy.get('[data-testid=flash-vector-logo]').parent().should('be.hidden');
    cy.get('[data-testid=greenlantern-vector-logo]').parent().should('be.hidden');
    cy.get('[data-testid=aquaman-vector-logo]').parent().should('be.hidden');
    cy.get('[data-testid=cyborg-vector-logo]').parent().should('be.hidden');
  });

  it('shows the active sidedrawer item', () => {
    cy.get('[data-testid=sidedrawer]')
      .find('button')
      .first()
      .find('img')
      .should('be.visible')
      .parent()
      .next()
      .should('be.visible');
  });

  it('hides the inactive sidedrawer items', () => {
    cy.get('[data-testid=sidedrawer]')
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

  it('shows the active heading', () => {
    cy.get('[data-testid=hero-heading]')
      .find('h2')
      .first()
      .find('span')
      .each((heroChar) => {
        cy.wrap(heroChar).should('be.visible');
      });
  });

  it('hides inactive headings', () => {
    cy.get('[data-testid=hero-heading]')
      .find('h2')
      .each((heroHeading, index) => {
        if (index > 0) {
          cy.wrap(heroHeading).each((heroChar) => {
            cy.wrap(heroChar).find('span').should('be.hidden');
          });
        }
      });
  });
});
