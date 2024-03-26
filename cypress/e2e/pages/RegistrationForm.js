export default class RegistrationForm {
  nameInput() {
    return cy.get('input#signupName');
  }
  lastNameInput() {
    return cy.get('input#signupLastName');
  }
  emailInput() {
    return cy.get('input#signupEmail');
  }
  passwordInput() {
    return cy.get('input#signupPassword');
  }
  repeatPasswordInput() {
    return cy.get('input#signupRepeatPassword');
  }
}
