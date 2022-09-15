describe('hero-timeline', () => {
  beforeEach(() => {
    cy.visit('/flash/timeline');
    cy.wait(6000);
  });

  it('activates the enemies menu item on header', () => {
    cy.get('header')
      .find('li')
      .each((menuItem, index) => {
        if (index === 3) {
          cy.wrap(menuItem).should('have.css', 'color', 'rgb(255, 255, 255)');
          return;
        }
        cy.wrap(menuItem).should('have.css', 'color', 'rgb(117, 117, 117)');
      });
  });

  it('shows the timeline content', () => {
    // hero logo as background image
    cy.window().then((win) => {
      cy.get('[data-testid=timeline]').then(($el: JQuery<HTMLDivElement>) => {
        const before = win.getComputedStyle($el[0], '::before');
        const bg = before.getPropertyValue('background-image');
        expect(bg).to.contain('/flash-color-logo.svg');
      });
    });
    // first timeline event
    cy.get('[data-testid=timeline]')
      .find('img')
      .first()
      .should('have.attr', 'alt', 'character creation')
      .should('have.attr', 'src', '/flash-timeline-creation.jpg')
      .next()
      .find('h4')
      .should('have.text', 'character creation')
      .next()
      .should('include.text', 'Flash was created by Gardner')
      .parent()
      .parent()
      .next()
      .should('have.text', '1940');
    // second timeline event
    cy.get('[data-testid=timeline]')
      .find('img')
      .eq(1)
      .should('have.attr', 'alt', 'justice league anexation')
      .should('have.attr', 'src', '/justice-league-timeline-comic.jpg')
      .next()
      .find('h4')
      .should('have.text', 'justice league anexation')
      .next()
      .should('include.text', 'Founder of the Justice League')
      .parent()
      .parent()
      .next()
      .should('have.text', '1960');
    // third timeline event
    cy.get('[data-testid=timeline]')
      .find('img')
      .eq(2)
      .should('have.attr', 'alt', 'the flash - nineties series')
      .should('have.attr', 'src', '/flash-timeline-nineties-tv-series.jpg')
      .next()
      .find('h4')
      .should('have.text', 'the flash - nineties series')
      .next()
      .should('include.text', 'Starred by John W.Shipp')
      .parent()
      .parent()
      .next()
      .should('have.text', '1990');
    // fourth timeline event
    cy.get('[data-testid=timeline]')
      .find('img')
      .eq(3)
      .should('have.attr', 'alt', 'flashpoint')
      .should('have.attr', 'src', '/flash-timeline-flashpoint-comic.jpg')
      .next()
      .find('h4')
      .should('have.text', 'flashpoint')
      .next()
      .should('include.text', 'Perhaps the most iconic')
      .parent()
      .parent()
      .next()
      .should('have.text', '2011');
    // fifth timeline event
    cy.get('[data-testid=timeline]')
      .find('img')
      .eq(4)
      .should('have.attr', 'alt', 'the flash - the series')
      .should('have.attr', 'src', '/flash-timeline-tv-series.jpg')
      .next()
      .find('h4')
      .should('have.text', 'the flash - the series')
      .next()
      .should('include.text', 'This tv series had 8')
      .parent()
      .parent()
      .next()
      .should('have.text', '2014');
    // shows the last event by scrolling
    cy.scrollTo(0, 500).wait(1000);
    // sixth timeline event
    cy.get('[data-testid=timeline]')
      .find('img')
      .last()
      .should('have.attr', 'alt', 'justice league - the movie')
      .should('have.attr', 'src', '/justice-league-timeline-movie.jpg')
      .next()
      .find('h4')
      .should('have.text', 'justice league - the movie')
      .next()
      .should('include.text', 'Directed by Zach Snyder')
      .parent()
      .parent()
      .next()
      .should('have.text', '2017');
  });
});
