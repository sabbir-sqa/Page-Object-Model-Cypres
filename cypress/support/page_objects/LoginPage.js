class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/v1/index.html');
  }

  enterUserName(username) {
    cy.get('#user-name').type(username);
  }
  enterPassword(password) {
    cy.get('[data-test="password"]').type(password);
  }
  clickLogin() {
    cy.get('input[value="LOGIN"]').click();
  }
}

export default new LoginPage();
