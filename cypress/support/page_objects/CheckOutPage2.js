class CheckOutPage2 {
  verifyCheckOutPage2() {
    cy.url().should('include', '/checkout-step-two.html');
    cy.contains('Checkout: Overview').should('be.visible');
  }
  finish() {
    cy.contains('.cart_button', 'FINISH').click();
  }

  verifyOrderSuccess() {
    cy.contains('THANK YOU FOR YOUR ORDER', { timeout: 5000 }).should(
      'be.visible'
    );
  }
}

export default new CheckOutPage2();
