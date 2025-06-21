const {test, expect} = require('@playwright/test');

test('Calendar Test', async ({ page }) => {

    const monthNumber = "6";
    const year = "2024";
    const date = "15";
    const expectedDate = [monthNumber, date, year];
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();
    await page.locator("//abbr[text()='" + date + "']").click();
    const inputs = await page.locator(".react-date-picker__inputGroup  input");
    for (let i = 0; i < inputs.length; i++) {
        const value = await inputs[i].getAttribute('value');
        expect(value).toEqual(expectedDate[i]);
    }
    await page.pause();
});