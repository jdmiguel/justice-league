describe('hero-enemies', () => {
  beforeEach(() => {
    cy.visit('/flash/enemies');
    cy.wait(6000);
  });

  it('activates the enemies menu item on header', () => {
    cy.get('header')
      .find('li')
      .each((menuItem, index) => {
        if (index === 2) {
          cy.wrap(menuItem).should('have.css', 'color', 'rgb(255, 255, 255)');
          return;
        }
        cy.wrap(menuItem).should('have.css', 'color', 'rgb(117, 117, 117)');
      });
  });

  it('shows the enemies content', () => {
    // hero logo as background image
    cy.window().then((win) => {
      cy.get('[data-testid=enemies]').then(($el: JQuery<HTMLDivElement>) => {
        const before = win.getComputedStyle($el[0], '::before');
        const bg = before.getPropertyValue('background-image');
        expect(bg).to.contain('/flash-color-logo.svg');
      });
    });
    // first enemy content
    cy.get('[data-testid=enemies]')
      .find('h4')
      .first()
      .should('have.text', 'Reverse Flash')
      .next()
      .find('img')
      .should('have.attr', 'alt', 'Reverse Flash')
      .should('have.attr', 'src', '/reverse-flash-enemies.jpg')
      .next()
      .should('include.text', 'Shaping a dark mirror');
    // second enemy content
    cy.get('[data-testid=enemies]')
      .find('h4')
      .eq(1)
      .should('have.text', 'Grood')
      .next()
      .find('img')
      .should('have.attr', 'alt', 'Grood')
      .should('have.attr', 'src', '/grood-enemies.jpg')
      .next()
      .should('include.text', 'Hailing from Gorilla City');
    // third enemy content
    cy.get('[data-testid=enemies]')
      .find('h4')
      .eq(2)
      .should('have.text', 'Savitar')
      .next()
      .find('img')
      .should('have.attr', 'alt', 'Savitar')
      .should('have.attr', 'src', '/savitar-enemies.jpg')
      .next()
      .should('include.text', 'Taking his name from the Hindu');
    // fourth enemy content
    cy.get('[data-testid=enemies]')
      .find('h4')
      .eq(3)
      .should('have.text', 'Captain Cold')
      .next()
      .find('img')
      .should('have.attr', 'alt', 'Captain Cold')
      .should('have.attr', 'src', '/captain-cold-enemies.jpg')
      .next()
      .should('include.text', 'This dangerous criminal is');
    cy.scrollTo(0, 1000).wait(1000);
    // fifth enemy content
    cy.get('[data-testid=enemies]')
      .find('h4')
      .eq(4)
      .should('have.text', 'The Thinker')
      .next()
      .find('img')
      .should('have.attr', 'alt', 'The Thinker')
      .should('have.attr', 'src', '/the-thinker-enemies.jpg')
      .next()
      .should('include.text', 'With a weaponized chair');
    // sixth enemy content
    cy.get('[data-testid=enemies]')
      .find('h4')
      .eq(5)
      .should('have.text', 'Mirror Master')
      .next()
      .find('img')
      .should('have.attr', 'alt', 'Mirror Master')
      .should('have.attr', 'src', '/mirror-master-enemies.jpg')
      .next()
      .should('include.text', 'A lifelong criminal who became');
    // seventh enemy content
    cy.get('[data-testid=enemies]')
      .find('h4')
      .eq(6)
      .should('have.text', 'Heatwave')
      .next()
      .find('img')
      .should('have.attr', 'alt', 'Heatwave')
      .should('have.attr', 'src', '/heatwave-enemies.jpg')
      .next()
      .should('include.text', 'A deadly villain who has');
    // eighth enemy content
    cy.get('[data-testid=enemies]')
      .find('h4')
      .last()
      .should('have.text', 'Captain Boomerang')
      .next()
      .find('img')
      .should('have.attr', 'alt', 'Captain Boomerang')
      .should('have.attr', 'src', '/captain-boomerang-enemies.jpg')
      .next()
      .should('include.text', 'Because of his level of');
  });
});
