import { test as base } from '@playwright/test';

export const customTest = base.extend({
    testDataForOrder: async ({}, use) => {
        await use({
            username: "anshika@gmail.com",
            password: "Iamking@000",
            productName: "ZARA COAT 3",
        });
    }
});