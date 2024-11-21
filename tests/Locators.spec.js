//const {test, expect} = require('@playwright/test');
import {test,expect} from "@playwright/test";

const homePageURL = 'https://demoblaze.com/';

test ('Locators', async({page}) => {

    await page.goto(homePageURL);

    await page.click('id=login2');

    await page.fill('#loginusername', 'pavanol');
    await page.fill('#loginpassword', 'test@123');

    await page.click('//button[normalize-space()="Log in"]');

    const logOutLink = await page.locator('id=logout2');

    await expect(logOutLink).toBeVisible();

    await page.close();

});