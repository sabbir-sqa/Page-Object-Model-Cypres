class ProductDetailPage {
  verifyProductDetaiPage() {
    cy.get('.inventory_details_back_button').should('be.visible');
  }
  addToCart() {
    cy.contains('Sauce Labs Onesie').get('.btn_primary').click();
  }
  goToCart() {
    cy.get('.shopping_cart_link').click();
  }
}

export default new ProductDetailPage();
