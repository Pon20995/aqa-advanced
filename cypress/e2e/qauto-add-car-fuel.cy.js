import GaragePage from './pages/GaragePage';
import FuelExpenses from './pages/FuelExpenses';
const garagePage = new GaragePage();
const fuelExpenses = new FuelExpenses();

describe('Test for adding car and adding expenses for it', () => {
  beforeEach(() => {
    cy.viewport(1440, 768);
    cy.login();
  });

  it('Add car test', () => {
    const mileageText = '102100';
    const literText = '30';
    const costText = '45';
    const today = new Date();
    const dateString = today.toLocaleDateString('uk-UA', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const expectedDate = `${dateString}`;

    garagePage.addCarButton().click();
    garagePage.barndSelector().select(1);
    garagePage.modelSelector().select(2);
    garagePage.mileageInput().type('102000');
    garagePage.addCarButtonForm().click();
    garagePage.addFuelExpenseButton().click();
    garagePage.addExpensePopUp().should('be.visible');
    garagePage.mileageInputExpenseForm().clear();
    garagePage.mileageInputExpenseForm().type(mileageText);
    garagePage.literInput().type(literText);
    garagePage.totalCostInput().type(costText);
    garagePage.addExpenseButtonForm().click();
    fuelExpenses.fuelExpensesTitle().should('have.text', 'Fuel expenses');
    fuelExpenses.dateColuumn().should('have.text', expectedDate);
    fuelExpenses.mileageColuumn().should('have.text', mileageText);
    fuelExpenses.literUsedColuumn().should('have.text', `${literText}L`);
    fuelExpenses.totalCostColuumn().should('have.text', `${costText}.00 USD`);
  });

  it('Delete a car', () => {
    garagePage.editCarDataButton().click();
    garagePage.removeCarEditPopUpButton().click();
    cy.get('button.btn-danger').click();
    garagePage
      .noCarsText()
      .should('have.text', 'You don’t have any cars in your garage');
  });
});
