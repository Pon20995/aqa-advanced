import GaragePage from './pages/GaragePage';
import FuelExpenses from './pages/FuelExpenses';
const garagePage = new GaragePage();
const fuelExpenses = new FuelExpenses();

describe('API test for adding car', () => {
  let carId;
  const mileageText = '100000';
  const mileageNumber = parseInt(mileageText, 10);
  const increasedMileageNumber = mileageNumber + 100;
  const literText = 30;
  const costText = 45;
  const today = new Date();
  const dateString = today.toLocaleDateString('uk-UA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const parts = dateString.split('.');
  const expectedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

  beforeEach(() => {
    cy.viewport(1440, 768);
    cy.login();
  });

  it('Add car test with body check', () => {
    cy.intercept('POST', '/api/cars').as('addCar');
    garagePage.addCarButton().click();
    garagePage.barndSelector().select(1);
    garagePage.modelSelector().select(2);
    garagePage.mileageInput().type(mileageText);
    garagePage.addCarButtonForm().click();
    cy.get('@addCar')
      .its('response')
      .then((response) => {
        expect(response.statusCode).to.equal(201);
        carId = response.body.data.id;
      });
  });

  it('Check if the car in the list', () => {
    cy.intercept('GET', '/api/cars').as('getCars');
    cy.get('div.panel-page_heading h1').should('have.text', 'Garage');
    cy.get('@getCars')
      .its('response')
      .then((response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.body.data[0]).to.have.property('id', carId);
      });
  });

  it('Add expnses', () => {
    cy.wait(1000);
    cy.getCookie('sid').then((cookie) => {
      const cookieValue = cookie.value;

      cy.request({
        method: 'POST',
        url: '/api/expenses',
        body: {
          carId: carId,
          reportedAt: expectedDate,
          mileage: increasedMileageNumber + 100,
          liters: literText,
          totalCost: costText,
          forceMileage: false,
        },
        headers: {
          Cookie: `sid=${cookieValue}`,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('status', 'ok');
        expect(response.body.data).to.have.property('id');
        expect(response.body.data).to.have.property('carId', carId);
        expect(response.body.data).to.have.property('reportedAt', expectedDate);
        expect(response.body.data).to.have.property(
          'mileage',
          increasedMileageNumber + 100,
        );
        expect(response.body.data).to.have.property('liters', literText);
        expect(response.body.data).to.have.property('totalCost', costText);
      });
    });
  });

  it.skip('Delete a car', () => {
    garagePage.editCarDataButton().click();
    garagePage.removeCarEditPopUpButton().click();
    cy.get('button.btn-danger').click();
    garagePage
      .noCarsText()
      .should('have.text', 'You don’t have any cars in your garage');
  });
});
