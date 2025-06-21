class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator("#userEmail");
        this.passwordInput = page.locator("#userPassword");
        this.loginButton = page.locator("#login");
    }
    
    async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client");
    }
    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = { LoginPage };