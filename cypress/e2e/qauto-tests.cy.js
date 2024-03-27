describe('Profile tests without login', () => {
  beforeEach(() => {
    cy.viewport(1440, 768);
    cy.visit('/panel/garage', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
  });

  it('Check the main titles of pages', () => {
    cy.get('button.header-link.-guest').click();
    cy.get('div.panel-page_heading h1').should('have.text', 'Garage');
    cy.get('div nav a').eq(1).click();
    cy.get('div.panel-page_heading h1').should('have.text', 'Fuel expenses');
    cy.get('div nav a').eq(2).click();
    cy.get('div.panel-page_heading h1').should('have.text', 'Instructions');
    cy.get(' div a.btn span.icon.icon-logout').click();
    cy.get('h1.hero-descriptor_title').should('have.text', 'Do more!');
    cy.get(' div.hero-descriptor p').should(
      'have.text',
      'With the help of the Hillel auto project, you will have the opportunity to get hands-on experience in manual testing.',
    );
  });

  it('Check adding car with a form on current date', () => {
    const today = new Date();
    const dateString = today.toLocaleDateString('uk-UA', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const expectedText = `Update mileage • ${dateString}`;

    cy.get('button.header-link.-guest').click();
    cy.get('button.btn').eq(1).click();
    cy.get('select#addCarBrand').select(1);
    cy.get('select#addCarModel').select(2);
    cy.get('div input').type('50000');
    cy.get('div.modal-footer button')
      .filter('[class="btn btn-primary"]')
      .click();
    cy.get('div p.car_name').should('have.text', 'BMW X5');
    cy.get('div p.car_update-mileage')
      .first()
      .should('have.text', expectedText);
  });

  it('Check instuctions downloading for Porsche Panamer', () => {
    cy.get('button.header-link.-guest').click();
    cy.get('div a').filter('[routerlink="instructions"]').click();
    cy.get('button#brandSelectDropdown').should('be.visible').click();
    cy.get('ul li').eq(3).should('be.visible').click();
    cy.get('button#modelSelectDropdown').should('be.visible').click();
    cy.get('ul.model-select-dropdown_menu li')
      .last()
      .should('be.visible')
      .click();
    for (let i = 0; i < 6; i++) {
      cy.get('div a a').eq(i).should('be.visible').click();
    }
  });
});
