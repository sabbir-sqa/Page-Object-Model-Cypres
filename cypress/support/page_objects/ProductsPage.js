class ProductsPage {
  verifyUserIsLoggedIn() {
    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
  }
  productSortByPriceLoWTohigh(dropdownValue) {
    cy.get('.product_sort_container').select(dropdownValue);
  }
  validateSearchResult() {
    cy.get('.inventory_list > :nth-child(1)')
      .contains('Sauce Labs Onesie')
      .should('be.visible');

    cy.get('.inventory_list > :nth-child(6)')
      .contains('Sauce Labs Fleece Jacket')
      .should('be.visible');
  }
  clickProduct() {
    cy.get('#item_2_title_link > .inventory_item_name').click();
    // cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
  }
  validatePriductDetailPage() {
    cy.url().should('include', './inventory-item');
  }
}

export default new ProductsPage();
