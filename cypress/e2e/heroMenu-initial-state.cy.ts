describe('heroMenu - initial state', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(6000);
  });

  it('displays the header elements', () => {
    // Header elements
    cy.get('header')
      .find('h1')
      .find('img')
      .should('have.attr', 'alt', 'justice league logo')
      .and('have.attr', 'src', '/justice-league-white-logo.svg')
      .parent()
      .parent()
      .parent()
      .find('a')
      .should('have.attr', 'href', 'https://github.com/jdmiguel/justice-league');
  });

  it('displays the footer elements', () => {
    cy.get('footer')
      .find('div')
      .first()
      .should('include.text', 'Created by')
      .find('a')
      .should('have.text', 'jdmiguel')
      .and('have.attr', 'href', 'https://jdmiguel.netlify.app')
      .parent()
      .next()
      .find('h4')
      .should('have.text', 'To navigate the menu:')
      .next()
      .find('li')
      .first()
      .should('have.text', 'use the mouse wheel')
      .next()
      .should('have.text', 'click on the side menu');
  });

  it('shows the active bg', () => {
    cy.get('[data-testid=hero-menu-bg]').each((heroBg, index) => {
      if (index === 0) {
        cy.wrap(heroBg)
          .should('be.visible')
          .should('have.css', 'background-image')
          .and('include', '/superman-hero-menu-bg.jpg');
        return;
      }
      cy.wrap(heroBg).should('be.hidden');
    });
  });

  it('shows the active vector logo', () => {
    cy.get('[data-testid=superman-vector-logo]').parent().should('be.visible');
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
      .each((sidedrawerBtn, index) => {
        if (index === 0) {
          cy.wrap(sidedrawerBtn)
            .find('img')
            .should('be.visible')
            .parent()
            .next()
            .should('be.visible');
          return;
        }
        cy.wrap(sidedrawerBtn)
          .find('img')
          .should('have.css', 'opacity', '0.5')
          .parent()
          .next()
          .should('be.hidden');
      });
  });

  it('shows the active heading', () => {
    cy.get('[data-testid=hero-heading]')
      .find('h2')
      .each((heroHeading, index) => {
        if (index === 0) {
          cy.wrap(heroHeading).each((heroChar) => {
            cy.wrap(heroChar).find('span').should('be.visible');
          });
          return;
        }
        cy.wrap(heroHeading).each((heroChar) => {
          cy.wrap(heroChar).find('span').should('be.hidden');
        });
      });
  });
});
