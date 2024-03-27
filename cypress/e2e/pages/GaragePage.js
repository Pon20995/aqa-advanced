export default class GaragePage {
  garageSidebarButton() {
    return cy.get('sidebar_btn -active');
  }
  addCarButton() {
    return cy.get('.panel-page button.btn-primary');
  }
  barndSelector() {
    return cy.get('select#addCarBrand');
  }
  modelSelector() {
    return cy.get('select#addCarModel');
  }
  mileageInput() {
    return cy.get('div input');
  }
  addCarButtonForm() {
    return cy.get(
      'div.modal-footer.d-flex.justify-content-end button.btn-primary',
    );
  }
  editCarDataButton() {
    return cy.get('span.icon-edit');
  }
  removeCarEditPopUpButton() {
    return cy.get('button.btn-outline-danger');
  }
  noCarsText() {
    return cy.get('p.panel-empty_message');
  }
  addFuelExpenseButton() {
    return cy.get('button.btn-success');
  }
  addExpensePopUp() {
    return cy.get('h4.modal-title');
  }
  vehicleSelector() {
    return cy.get('select#addExpenseCar');
  }
  dateSelector() {
    return cy.get('select#addExpenseDate');
  }
  mileageInputExpenseForm() {
    return cy.get('input#addExpenseMileage');
  }
  literInput() {
    return cy.get('input#addExpenseLiters');
  }
  totalCostInput() {
    return cy.get('input#addExpenseTotalCost');
  }
  addExpenseButtonForm() {
    return cy.get(
      'app-add-expense-modal > div.modal-footer.d-flex.justify-content-end > button.btn.btn-primary',
    );
  }
}
