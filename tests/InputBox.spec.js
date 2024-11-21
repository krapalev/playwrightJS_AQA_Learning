import {test,expect} from "@playwright/test";
import {randomFill} from "crypto";

const homePageURL = 'https://demo.nopcommerce.com/register';


test ('Handle InputBox', async({page}) => {

    const firstName = Math.random().toString(36).substring(2,7);
    console.log(firstName);

    await page.goto(homePageURL);

    await expect(page.locator('#FirstName')).toBeVisible();
    await expect(page.locator('#FirstName')).toBeEmpty();
    await expect(page.locator('#FirstName')).toBeEditable();
    await expect(page.locator('#FirstName')).toBeEnabled();

    await page.fill('#FirstName', firstName);
    await expect(page.locator('#FirstName')).toHaveValue(firstName);



    await page.close();

});