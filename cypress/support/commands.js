// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', () => {
  cy.visit('/panel/garage', {
    failOnStatusCode: false,
    auth: {
      username: 'guest',
      password: 'welcome2qauto',
    },
  });
  cy.get('button.header_signin').click();
  cy.get("input[name='email']").type('ozera123456789@gmail.com');
  cy.get("input[name='password']").type('R4gnZxg.J7U7EX');
  cy.get('.modal-footer .btn-primary').click();
});

Cypress.Commands.add('loginWithLegacyCreds', () => {
  cy.visit('/panel/garage', {
    failOnStatusCode: false,
    auth: {
      username: 'guest',
      password: 'welcome2qauto',
    },
  });
});

Cypress.Commands.add(
  'makeExpenseRequestAndCheckResponse',
  (carId, reportedAt, mileage, liters, totalCost, forceMileage) => {
    cy.wait(1000);
    cy.getCookie('sid').then((cookie) => {
      const cookieValue = cookie.value;

      cy.request({
        method: 'POST',
        url: '/api/expenses',
        body: {
          carId: carId,
          reportedAt: reportedAt,
          mileage: mileage,
          liters: liters,
          totalCost: totalCost,
          forceMileage: forceMileage,
        },
        headers: {
          Cookie: `sid=${cookieValue}`,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('status', 'ok');
        expect(response.body.data).to.have.property('id');
        expect(response.body.data).to.have.property('carId', carId);
        expect(response.body.data).to.have.property('reportedAt', reportedAt);
        expect(response.body.data).to.have.property('mileage', mileage);
        expect(response.body.data).to.have.property('liters', liters);
        expect(response.body.data).to.have.property('totalCost', totalCost);
      });
    });
  },
);

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
