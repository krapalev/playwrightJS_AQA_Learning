import {test,expect} from "@playwright/test";
import {randomFill} from "crypto";

const homePageURL = 'https://demo.nopcommerce.com/register';


test ('Handle InputBox', async({page}) => {

    await page.goto(homePageURL);

    await expect(page.locator('#gender-male')).toBeVisible();
    await expect(page.locator('#gender-male')).not.toBeChecked();

    await page.check('#gender-male');
    await expect(page.locator('#gender-male')).toBeChecked();



    await page.close();

});