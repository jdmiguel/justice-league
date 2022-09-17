describe('hero-profile', () => {
  beforeEach(() => {
    cy.visit('/flash/profile');
    cy.wait(6000);
  });

  it('activates the profile menu item on header', () => {
    cy.get('header')
      .find('li')
      .each((menuItem, index) => {
        if (index === 1) {
          cy.wrap(menuItem).should('have.css', 'color', 'rgb(255, 255, 255)');
          return;
        }
        cy.wrap(menuItem).should('have.css', 'color', 'rgb(117, 117, 117)');
      });
  });

  it('shows the profile content', () => {
    // hero logo as background image
    cy.window().then((win) => {
      cy.get('[data-testid=profile]').then(($el: JQuery<HTMLDivElement>) => {
        const before = win.getComputedStyle($el[0], '::before');
        const bg = before.getPropertyValue('background-image');
        expect(bg).to.contain('/flash-color-logo.svg');
      });
    });
    // intro content
    cy.get('[data-testid=profile-intro]')
      .find('img')
      .should('have.attr', 'alt', 'hero intro')
      .should('have.attr', 'src', '/flash-profile.jpg');
    cy.get('[data-testid=profile-intro]').find('h2').should('have.text', 'Flash');
    cy.get('[data-testid=profile-intro]').find('h3').should('have.text', 'The fastest man alive');
    cy.get('[data-testid=profile-intro]')
      .find('p')
      .should('include.text', 'Having discovered his mother');
    // details content
    cy.get('[data-testid=profile-detail]').find('h4').should('have.text', 'Details');
    cy.get('[data-testid=profile-detail]')
      .find('li')
      .first()
      .should('have.text', 'full name: Barry Allen')
      .next()
      .should('have.text', 'place of birth: Fallville, Iowa')
      .next()
      .should('have.text', 'occupation: Forensic Scientist')
      .next()
      .should('have.text', 'base: Central City')
      .next()
      .should('have.text', '1st appearance: Flash Comics #1')
      .parent()
      .parent()
      .parent()
      .parent()
      .next()
      .should('have.attr', 'alt', 'hero details')
      .should('have.attr', 'src', '/flash-profile-details.jpg');
    // appearance content
    cy.get('[data-testid=profile-appearance]')
      .find('> div')
      .first()
      .should('be.hidden')
      .next()
      .should('be.hidden')
      .next()
      .should('be.hidden');
    // shows appearance by scrolling
    cy.scrollTo(0, 800)
      .wait(1000)
      .get('[data-testid=profile-appearance]')
      .find('> div')
      .first()
      .should('be.visible')
      .find('h4')
      .should('have.text', 'Appearance')
      .parent()
      .find('li')
      .first()
      .should('have.text', 'race: Human')
      .next()
      .should('have.text', 'height: 6.0 / 183 cm')
      .next()
      .should('have.text', 'weight: 185 lb / 88 kg')
      .next()
      .should('have.text', 'eye color: Blue')
      .next()
      .should('have.text', 'hair color: Blond')
      .parent()
      .parent()
      .parent()
      .parent()
      .next()
      .should('be.visible')
      .should('have.attr', 'alt', 'hero appearance')
      .should('have.attr', 'src', '/flash-profile-appearance.png')
      .parent()
      .find('h4')
      .should('be.visible')
      .last()
      .should('have.text', 'Powers')
      .parent()
      .find('li')
      .first()
      .should('have.text', 'Super speed')
      .next()
      .should('have.text', 'Super reflexes')
      .next()
      .should('have.text', 'Super healing')
      .next()
      .should('have.text', 'Time travel')
      .next()
      .should('have.text', 'Enhanced senses');
    // stats content
    cy.get('[data-testid=profile-stats]').should('be.hidden');
    // shows stats by scrolling
    cy.scrollTo(0, 1800)
      .wait(1000)
      .get('[data-testid=profile-stats]')
      .should('be.visible')
      .find('h4')
      .should('have.text', 'Ranked stats')
      .next()
      .find('g')
      .eq(3)
      .find('text')
      .should('have.text', '75%40%98%70%54%')
      .parent()
      .next()
      .find('text')
      .first()
      .should('have.text', 'intelligence')
      .next()
      .should('have.text', 'strength')
      .next()
      .should('have.text', 'speed')
      .next()
      .should('have.text', 'power')
      .next()
      .should('have.text', 'combat');
  });
});
