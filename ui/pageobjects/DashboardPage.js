class DashboardPage{

    constructor(page) {
        this.page = page;
        this.products = page.locator(".card-body");
        this.productText = page.locator(".card-body b");
        this.cartButton = page.locator("[routerlink*='cart']");
    }

    async searchProduct(productName){
         const titles = await this.productText.allTextContents();
            console.log(titles); 
           const count = await products.count();
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

}
module.exports = { DashboardPage };