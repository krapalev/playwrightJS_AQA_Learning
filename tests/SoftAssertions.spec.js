import {test,expect} from "@playwright/test";

const homePageURL = 'https://demoblaze.com/';

test ('SoftAssertions', async({page}) => {

    await page.goto(homePageURL);

   await expect.soft(page).toHaveTitle('STORE1');
   await expect(page).toHaveURL(homePageURL);
   await expect(page.locator('.navbar-brand')).toBeVisible();

    await page.close();

});