import { data } from '../fixtures/cypress.test';
import LoginForm from './pages/LoginForm';

describe('Login test with diferent data', () => {
  const loginForm = new LoginForm();
  beforeEach(() => {
    cy.viewport(1440, 768);
    cy.loginWithLegacyCreds();
  });

  for (const { id, email, password } of data) {
    it.only(`${id} Login from fixtures data`, () => {
      loginForm.signInHeaderButton().click();
      loginForm.signInFormTitle().should('have.text', 'Log in');
      loginForm.signInFormEmailInput().type(`${email}`);
      loginForm.signInFormPasswordInput().type(`${password}`);
      loginForm.loginButton().click();
      cy.get('div.panel-page_heading h1').should('have.text', 'Garage');
      cy.get('button#userNavDropdown').click();
      cy.get('button.user-nav_link').click();
    });
  }

  Object.entries(Cypress.env('users')).forEach(([role, userInfo]) => {
    it.only(`Login with ${role} from env data`, () => {
      loginForm.signInHeaderButton().click();
      loginForm.signInFormTitle().should('have.text', 'Log in');
      loginForm.signInFormEmailInput().type(userInfo.email);
      loginForm.signInFormPasswordInput().type(userInfo.password);
      loginForm.loginButton().click();
      cy.get('div.panel-page_heading h1').should('have.text', 'Garage');
      cy.get('button#userNavDropdown').click();
      cy.get('button.user-nav_link').click();
    });
  });
});
