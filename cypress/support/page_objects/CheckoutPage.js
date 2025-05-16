class CheckOutPage {
  validateCheckoutPage() {
    cy.contains('Checkout: Your Information').should('be.visible');
  }
  fillupForm(firstName, lastName, postCode) {
    cy.get('#first-name').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('input[placeholder="Zip/Postal Code"]').type(postCode);
  }
  continue() {
    cy.get('input[value="CONTINUE"]').click();
  }
}

export default new CheckOutPage();
