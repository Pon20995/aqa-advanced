describe('template spec', () => {
  beforeEach(() => {
    cy.viewport(1440, 768);
    cy.visit('https://www.guru99.com/');
  });

  it('Check Libraries names on the main page', () => {
    cy.get(' div:nth-child(1) > div > h4:nth-child(1) > b').should(
      'have.text',
      'Testing',
    );
    cy.get('div:nth-child(2) > div > h4:nth-child(1) > b').should(
      'have.text',
      'SAP',
    );
    cy.get('div:nth-child(3) > div > h4:nth-child(1) > b').should(
      'have.text',
      'AI',
    );
    cy.get('div:nth-child(4) > div > h4:nth-child(1) > b').should(
      'have.text',
      'Must Learn!',
    );
    cy.get('div:nth-child(1) > div > h4:nth-child(4) > b').should(
      'have.text',
      'Live Projects',
    );
    cy.get('div:nth-child(3) > div > h4:nth-child(4) > b').should(
      'have.text',
      'Web',
    );
    cy.get('div:nth-child(2) > div > h4:nth-child(4) > b').should(
      'have.text',
      'Big Data',
    );
    cy.get('div:nth-child(1) > div > h4:nth-child(7) > b').should(
      'have.text',
      'Defect Tools',
    );
    cy.get(' div:nth-child(1) > div > h4:nth-child(10) > b').should(
      'have.text',
      'Enterprise Testing',
    );
    cy.get('div:nth-child(4) > div > h4:nth-child(4) > b').should(
      'have.text',
      'DataBase',
    );
    cy.get('div:nth-child(3) > div > h4:nth-child(7) > b').should(
      'have.text',
      'Test Management',
    );
    cy.get('#java_technologies > h4 > b').should(
      'have.text',
      'Performance Testing',
    );
  });

  it('Check header banner links', () => {
    cy.get('#menu-item-3172 > a').should('have.attr', 'href', '/');
    cy.get('#menu-item-3173 > a').should(
      'have.attr',
      'href',
      '/software-testing.html',
    );
    cy.get('#menu-item-3174 > a').should(
      'have.attr',
      'href',
      '/what-is-sap.html',
    );
    cy.get('#menu-item-3175 > a').should(
      'have.attr',
      'href',
      '/java-tutorial.html',
    );
    cy.get('#menu-item-3176 > a').should(
      'have.attr',
      'href',
      '/design-analysis-algorithms-tutorial.html',
    );
    cy.get('#menu-item-3177 > a').should(
      'have.attr',
      'href',
      '/bigdata-tutorials.html',
    );
    cy.get('#menu-item-3178 > a').should(
      'have.attr',
      'href',
      '/live-testing-project.html',
    );
    cy.get('#menu-item-3179 > a').should(
      'have.attr',
      'href',
      '/artificial-intelligence-tutorial.html',
    );
  });

  it('Check ML Tutorials title names', () => {
    cy.get(':nth-child(1) > a > .entered').click();
    cy.get('#post-1299 > div > header > h1').should(
      'have.text',
      'Machine Learning Tutorial for Beginners: What is, Basics of ML',
    );
    cy.get('.nav-next > a > div > .pagenav > .kadence-svg-iconset').click();
    cy.get('#post-1750 > div > header > h1').should(
      'have.text',
      'Confusion Matrix in Machine Learning with EXAMPLE',
    );
    cy.get('.nav-next > a > div > .pagenav').click();
    cy.get('#post-1445 > div > header > h1').should(
      'have.text',
      'Deep Learning Tutorial for Beginners: Neural Network Basics',
    );
    cy.get(
      '.nav-next > a > div > .pagenav > .kadence-svg-iconset > .kadence-svg-icon',
    ).click();
    cy.get('#post-1688 > div > header > h1').should(
      'have.text',
      'Supervised Machine Learning: What is, Algorithms with Examples',
    );
    cy.visit('https://www.guru99.com/');
  });
});
