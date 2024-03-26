import RegistrationForm from './pages/RegistrationForm';
describe('template spec', () => {
  const registrationForm = new RegistrationForm();

  beforeEach(() => {
    cy.viewport(1440, 768);
    cy.visit('https://qauto.forstudy.space/panel/garage', {
      failOnStatusCode: false,
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
    cy.get('button.header_signin').should('be.visible').click();
    cy.get('h4.modal-title').should('have.text', 'Log in');
    cy.get('div.modal-footer button.btn-link').click();
    cy.get('h4.modal-title').should('have.text', 'Registration');
  });

  it('Check the registration fields validation with empty data', () => {
    registrationForm.nameInput().click();
    registrationForm.lastNameInput().click();
    registrationForm
      .nameInput()
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.form-group:nth-child(1) .invalid-feedback p').should(
      'have.text',
      'Name required',
    );
    registrationForm.emailInput().click();
    registrationForm
      .lastNameInput()
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.form-group:nth-child(2) .invalid-feedback p').should(
      'have.text',
      'Last name required',
    );
    registrationForm.passwordInput().click();
    registrationForm
      .emailInput()
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.form-group:nth-child(3) .invalid-feedback p').should(
      'have.text',
      'Email required',
    );
    registrationForm.repeatPasswordInput().click();
    registrationForm
      .passwordInput()
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.form-group:nth-child(4) .invalid-feedback p').should(
      'have.text',
      'Password required',
    );
    registrationForm.nameInput().click();
    registrationForm
      .repeatPasswordInput()
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.form-group:nth-child(5) .invalid-feedback p').should(
      'have.text',
      'Re-enter password required',
    );
  });

  it('Check the registration fields validation with invalid data', () => {
    const incorrectNames = ['Іван', 'Pet-ro', 'Mar ia', 'J7ohn'];
    const incorrectLastNames = ['Шевченко', 'Kvitk_a', 'Ukrain ka', '5Tychyna'];
    const incorrectEmails = [
      'user@domain',
      'user@domain.',
      'user@.domain.com',
      'user@domain..com',
      'user@domain@.com',
      'user@domain.',
      'user@domain.com@',
      'user@domain..com',
      'user@domaincom',
      'user@domain,com',
      'user(domain.com',
    ];
    const incorrectPass = [
      '1qwertY',
      '1qwertY1qwertY1qwertY',
      '1qwerty1qwerty',
      'qwertYqwertY',
      '12345678',
      'pa$$w0rd',
      'PASSWORD',
    ];

    incorrectNames.forEach((name) => {
      registrationForm.nameInput().type(name);
      registrationForm.lastNameInput().click();
      registrationForm
        .nameInput()
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('.form-group:nth-child(1) .invalid-feedback p').should(
        'have.text',
        'Name is invalid',
      );
      registrationForm.nameInput().clear();
    });

    incorrectLastNames.forEach((lastName) => {
      registrationForm.lastNameInput().type(lastName);
      registrationForm.emailInput().click();
      registrationForm
        .lastNameInput()
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('.form-group:nth-child(2) .invalid-feedback p').should(
        'have.text',
        'Last name is invalid',
      );
      registrationForm.lastNameInput().clear();
    });

    incorrectEmails.forEach((email) => {
      registrationForm.emailInput().type(email);
      registrationForm.passwordInput().click();
      registrationForm
        .emailInput()
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('.form-group:nth-child(3) .invalid-feedback p').should(
        'have.text',
        'Email is incorrect',
      );
      registrationForm.emailInput().clear();
    });

    incorrectPass.forEach((pass) => {
      registrationForm.passwordInput().type(pass);
      registrationForm.repeatPasswordInput().click();
      registrationForm
        .passwordInput()
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('.form-group:nth-child(4) .invalid-feedback p').should(
        'have.text',
        'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
      );
      registrationForm.passwordInput().clear();
    });
    registrationForm.passwordInput().type('Qwerty123');
    registrationForm.repeatPasswordInput().type('Qwerty 123');
    registrationForm
      .repeatPasswordInput()
      .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    cy.get('.form-group:nth-child(5) .invalid-feedback p').should(
      'have.text',
      'Passwords do not match',
    );
  });

  it('Check the registration fields validation with wrong length data', () => {
    const wrongLengthData = ['e', 'qwertyuiopqwertyuiopq'];
    wrongLengthData.forEach((data) => {
      registrationForm.nameInput().type(data);
      registrationForm.lastNameInput().click();
      registrationForm
        .nameInput()
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('.form-group:nth-child(1) .invalid-feedback p').should(
        'have.text',
        'Name has to be from 2 to 20 characters long',
      );
      registrationForm.lastNameInput().type(data);
      registrationForm.passwordInput().click();
      registrationForm
        .lastNameInput()
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('.form-group:nth-child(2) .invalid-feedback p').should(
        'have.text',
        'Last name has to be from 2 to 20 characters long',
      );
      registrationForm.passwordInput().type(data);
      registrationForm.nameInput().click();
      registrationForm
        .passwordInput()
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
      cy.get('.form-group:nth-child(4) .invalid-feedback p').should(
        'have.text',
        'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
      );
    });
  });

  it('Check the registration with valid data', () => {
    const userEmail = `ozera123456789+${Date.now()}@gmail.com`;
    const userPassword = 'Password1';

    registrationForm.nameInput().type('Harry');
    registrationForm.lastNameInput().type('Potter');
    registrationForm.emailInput().type(userEmail);
    registrationForm.passwordInput().type(userPassword);
    registrationForm.repeatPasswordInput().type(userPassword);

    Cypress.env('email', userEmail);
    Cypress.env('password', userPassword);

    cy.get('div.modal-footer button.btn-primary').click();
    cy.get('div.panel-page_heading h1').should('have.text', 'Garage');
  });

  it('Login with previously registered data', () => {
    const userEmail = Cypress.env('email');
    const userPassword = Cypress.env('password');
    cy.get('button.close').click();
    cy.get('button.header_signin').click();
    cy.get('h4.modal-title').should('have.text', 'Log in');
    cy.get('input#signinEmail').type(Cypress.env('email'));
    cy.get('input#signinPassword').type(Cypress.env('password'));
    cy.get('div.modal-footer button.btn-primary').click();
    cy.get('div.panel-page_heading h1').should('have.text', 'Garage');
  });
});
