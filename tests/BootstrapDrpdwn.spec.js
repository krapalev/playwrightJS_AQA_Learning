import {test,expect} from "@playwright/test";
import {randomFill} from "crypto";

const homePageURL = 'https://jquery-az.com/boots/demo.php?ex=63.0_2';


test ('Bootstraps DropDowns', async({page}) => {

    await page.goto(homePageURL);

    await page.locator('.multiselect').click();

    const options = await page.locator('ul>li label input');
    await expect(options).toHaveCount(11);

    const options2 = await page.$$('ul>li label input');
    await expect(options2.length).toBe(11);

    const options3 = await page.$$('ul>li label');
    for (let option of options3) {
        const value = await option.textContent();
        if(value.includes('Angular') || value.includes('Java')) {
            await option.click();
        }
    }

    await page.waitForTimeout(5000);

    const options4 = await page.$$('.active');
    for (let option of options4) {
        await option.click();

    }

    await page.waitForTimeout(5000);
    await page.close();



});