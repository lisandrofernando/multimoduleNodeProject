// const {test, expect, request} = require('@playwright/test');
// const {APIUtils} = require('../utils/APIUtils');
// const { console } = require('inspector');
// const loginPayload  = {userEmail: "anshika@gmail.com", userPassword: "Iamking@000"};
// const orderPayload = {orders: [{country: "India", productOrderedId: "6262e4f0e6b1d4f8b8c9a5c3"}]};
// let response;
// test.beforeAll( async ()=>{

//     // Login API
//     const apiContext = await request.newContext();
//     const apiUtils = new APIUtils(apiContext, loginPayload);
//     response = await apiUtils.createOrder(orderPayload);

//  });

// test.only('Web Test Client App login', async ({ page }) => {
//     //js file- Login js, DashboardPage

//     page.addInitScript(value=>{
//         window.localStorage.setItem('token', value);
//     }, response.token)
  
//     await page.goto("https://rahulshettyacademy.com/client");
//  await page.locator("button[routerlink*='myorders']").click();
//  await page.locator("tbody").waitFor();
// const rows = await page.locator("tbody tr");
 
 
// for(let i =0; i<await rows.count(); ++i)
// {
//    const rowOrderId =await rows.nth(i).locator("th").textContent();
//    if (response.orderId.includes(rowOrderId))
//    {
//        await rows.nth(i).locator("button").first().click();
//        break;
//    }
// }
// const orderIdDetails =await page.locator(".col-text").textContent();
// //await page.pause();
// expect(response.orderId.includes(orderIdDetails)).toBeTruthy();

//  });