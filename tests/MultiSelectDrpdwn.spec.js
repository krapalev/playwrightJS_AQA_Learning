import {test,expect} from "@playwright/test";
import {randomFill} from "crypto";

const homePageURL = 'https://testautomationpractice.blogspot.com/';


test ('Handle DropDowns', async({page}) => {

    await page.goto(homePageURL);

    await page.selectOption('#colors',['Blue','Red','White']);

    const options = await page.locator('#colors option');
    await expect(options).toHaveCount(7);

    const options2 = await page.$$('#colors option');
    await expect(options2.length).toBe(7);

    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();



    await page.close();



});