export default class FuelExpenses {
  fuelExpensesSidebarButton() {
    return cy.get('nav a.sidebar_btn[routerlink="expenses"]');
  }
  addFuelButton() {
    return cy.get('.item-group button.btn-primary');
  }
  fuelExpensesTitle() {
    return cy.get('div.flex-lg-row h1');
  }
  dateColuumn() {
    return cy.get('td.font-weight-bold');
  }
  mileageColuumn() {
    return cy.get('tr td:nth-child(2)');
  }
  literUsedColuumn() {
    return cy.get('tr td:nth-child(3)');
  }
  totalCostColuumn() {
    return cy.get('tr td:nth-child(4)');
  }
}
