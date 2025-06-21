const {test, expect} = require('@playwright/test');

test('special Locators Test', async({ page }) => {

    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel('Employed').click();
    await page.getByLabel('Gender').selectOption('Female');
    await page.getByPlaceholder('Password').fill('Lisandro100@');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByText('Success! The Form has been submitted successfully!').isVisible();
    await page.getByRole('link', { name: 'Shop' }).click();
    await page.locator('app-card').filter({hasText: 'Iphone X'}).getByRole('button').click();
    await page.pause();
});