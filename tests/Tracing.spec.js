import {test,expect} from "@playwright/test";

const homePageURL = 'https://demoblaze.com/';

test ('Tracing', async({page}) => {

    await page.goto(homePageURL);
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.locator('#logout2')).toBeVisible();

    await page.close();

});