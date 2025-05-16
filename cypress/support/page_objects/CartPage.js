class CartPage {
  validateCardPage() {
    cy.url().should('include', '/cart.html');
  }
  proceedToCheckout() {
    cy.get('.checkout_button').click();
  }
}

export default new CartPage();
