
import { expect, test } from '@playwright/test';
// Make sure POManager.ts exists in ../pageobjects_ts/ or update the path accordingly
// Update the path below if POManager.ts is located elsewhere
import { POManager } from "../pageobjects _ts/POManager.ts";
// Make sure the test data file exists in the specified path or update the path accordingly
import dataset from '../utils/placeorderTestData.json';
import { customTest } from '../utils_ts/test-base.ts';


customTest('Web Test Client App login', async ({ page, testDataForOrder }) => {
   //js file- Login js, DashboardPage


   const poManager = new POManager(page);
   const email = testDataForOrder.username;
   const password = testDataForOrder.password;
   const productName = testDataForOrder.productName;
   const products = page.locator(".card-body");
   const loginPage = poManager.getLoginPage();
   await loginPage.goTo();
   await loginPage.login(email, password);
   const dashboardPage = poManager.getDashboardPage();
   await dashboardPage.searchProduct(productName);

   await dashboardPage.goToCart();
   const cartPage = poManager.getCartPage();
   await cartPage.VerifyProductIsDisplayed(productName);
   await cartPage.Checkout();
   let orderId : any;
   const ordersReviewPage = poManager.getOrdersReviewPage();
   await ordersReviewPage.searchCountryAndSelect("ind", "India");
    orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);

   await dashboardPage.navigateToOrders();
  
   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});