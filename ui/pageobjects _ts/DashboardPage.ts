import { expect, test, Locator, Page } from "@playwright/test";
export class DashboardPage{

    page: Page;
            productText: Locator;
            cartButton: Locator;
            cart: Locator;
            orders: Locator;
            checkout: Locator;
            products: Locator;
    constructor(page: Page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productText = page.locator(".card-body b");
        this.cartButton = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
    }

    async searchProduct(productName){
         const titles = await this.productText.allTextContents();
            console.log(titles); 
           const count = await this.products.count();
           for (let i = 0; i < count; ++i) {
              if (await this.products.nth(i).locator("b").textContent() === productName) {
                 //add to cart
                 await this.products.nth(i).locator("text= Add To Cart").click();
                 break;
              }
           }
    }

    async goToCart() {
        await this.cartButton.click();
        await this.page.locator("div li").first().waitFor();
    }

    async navigateToOrders(){
        await this.orders.click();
    }

}
