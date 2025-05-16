import loginPage from '../support/page_objects/loginPage';
import ProductsPage from '../support/page_objects/ProductsPage';
import productDetailPage from '../support/page_objects/productDetailPage';
import cartPage from '../support/page_objects/cartPage';
import checkoutPage from '../support/page_objects/checkoutPage';
import checkOutPage2 from '../support/page_objects/checkOutPage2';

describe('Swaglabs login and product sort flow', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('should login and sort product', () => {
    loginPage.enterUserName('standard_user');
    loginPage.enterPassword('secret_sauce');
    loginPage.clickLogin();

    ProductsPage.verifyUserIsLoggedIn();
    // cy.screenshot('after_login');
    ProductsPage.productSortByPriceLoWTohigh('Price (low to high)');
    ProductsPage.validateSearchResult();
    ProductsPage.clickProduct();

    productDetailPage.verifyProductDetaiPage();
    // cy.screenshot('product_detail');
    productDetailPage.addToCart();
    productDetailPage.goToCart();

    cartPage.validateCardPage();
    // cy.screenshot('cart_page');
    cartPage.proceedToCheckout();

    checkoutPage.validateCheckoutPage();
    // cy.screenshot('checkout');
    checkoutPage.fillupForm('sabbir', 'ahmed', '1344');
    checkoutPage.continue();

    checkOutPage2.verifyCheckOutPage2();
    // cy.screenshot('checkout2');
    checkOutPage2.finish();
    checkOutPage2.verifyOrderSuccess();
    // cy.screenshot('order_success');
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Change your password'); // Optional: assert message
      cy.log('Alert dismissed:', text);
    });
  });
});
