export default class LoginForm {
  signInHeaderButton() {
    return cy.get('button.header_signin');
  }
  signInFormTitle() {
    return cy.get('h4.modal-title');
  }
  signInFormEmailInput() {
    return cy.get('input#signinEmail');
  }
  signInFormPasswordInput() {
    return cy.get('input#signinPassword');
  }
  loginButton() {
    return cy.get('div.modal-footer button.btn-primary');
  }
}
