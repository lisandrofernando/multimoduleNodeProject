
const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));


test('Web Test Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage


   const poManager = new POManager(page);
   const email = "anshika@gmail.com";
   const password = "Iamking@000"
   const productName = 'Zara Coat 3';
   const products = page.locator(".card-body");
   const loginPage = poManager.getLoginPage();
   await loginPage.goTo();
   await loginPage.login(dataset.email, dataset.password);
   const dashboardPage = poManager.getDashboardPage();
   await dashboardPage.searchProduct(dataset.productName);

   await dashboardPage.goToCart();
   const cartPage = poManager.getCartPage();
   await cartPage.VerifyProductIsDisplayed(productName);
   await cartPage.Checkout();

   const ordersReviewPage = poManager.getOrdersReviewPage();
   await ordersReviewPage.searchCountryAndSelect("ind", "India");
   const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);

   await dashboardPage.navigateToOrders();

   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});