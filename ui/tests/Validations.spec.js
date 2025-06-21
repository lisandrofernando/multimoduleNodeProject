const {test, expect} = require('@playwright/test');

test('Validations Test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    // await page.goto("http://google.com");
    // await page.goBack();
    // await page.goForward();

    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    // page.on will listen for events to appear, java dialog is a pop up that appears in the browser
    await page.on('dialog', dialog=>dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.locator("#mousehover").hover();
    const framePage = page.frameLocator("#courses-iframe");
   // await framePage.locator("text=Courses").first().click();
   await framePage.locator("li a[href*='lifetime-access']:visible").click();
   const textCheck = await framePage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);
    await page.pause();
})