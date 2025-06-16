const {test, expect} = require('@playwright/test');



test('UI Basic Test', async ({ page }) => {

    // context works for plugins and cookies passing as argument in the browser.newContext()
    //const context = await browser.newContext();
    //const page =  await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

});

test('UI Basic Positive Test', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    expect(await page.title()).toBe('LoginPage Practise | Rahul Shetty Academy');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    await page.locator('#signInBtn').click();
});

test('UI Basic Negative Test', async ({ page }) => {

    const userName = page.locator('#username');
    const password = page.locator('#password');
     const signInBtn = page.locator('#signInBtn');
     const cardTitles = page.locator(".card-body a");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    expect(await page.title()).toBe('LoginPage Practise | Rahul Shetty Academy');
    await userName.fill('rahulshetty');
    await password.fill('learning');
    await signInBtn.click();
    console.log(await page.locator('[style*="block"]').textContent());
    expect(await page.locator('[style*="block"]').textContent()).toContain('Incorrect');
    await userName.fill('');
    await userName.fill('rahulshettyacademy');
    await signInBtn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.allTextContents());
});


test('UI select debug Test', async ({ page }) => {
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const dropDown = page.locator('select.form-control');
    const documentLink = page.locator('[href*="documents-request"]');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    expect(await page.title()).toBe('LoginPage Practise | Rahul Shetty Academy');
    await userName.fill('rahulshetty');
    await password.fill('learning');
    await dropDown.selectOption('consult');
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    expect(await page.locator('.radiotextsty').last()).toBeChecked();
    await page.locator('#terms').click();
    expect(await page.locator('#terms').last()).toBeChecked();
   // await page.locator('#terms').uncheck();
   expect(await documentLink).toHaveAttribute('class', 'blinkingText');
    await page.pause(); // Pause the test to inspect the dropdown
});

test('Navigate to child windows', async ({ browser }) => {

    const context = await browser.newContext();
    const page =  await context.newPage();
    const documentLink = page.locator('[href*="documents-request"]');
    const userName = page.locator('#username');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const [newPage] = await Promise.all([context.waitForEvent('page'), await documentLink.click()]);// return a promise that resolves when a new page is opened
    const text =   await newPage.locator(".red").textContent();
    const arrayText = text.split('@');
    const domain = arrayText[1].split(" ")[0];
    console.log(text);
    console.log(domain);
    await userName.fill(domain);
});


