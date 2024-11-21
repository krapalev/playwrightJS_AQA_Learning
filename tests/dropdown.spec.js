import {test,expect} from "@playwright/test";
import {randomFill} from "crypto";

const homePageURL = 'https://testautomationpractice.blogspot.com/';


test ('Handle DropDowns', async({page}) => {

    await page.goto(homePageURL);

    await page.locator('#country').selectOption({label:'India'});

//or
    await page.locator('#country').selectOption('Japan');

//or
    await page.locator('#country').selectOption({value:'uk'});

    //or
    await page.locator('#country').selectOption({index:1});

    //or
    await page.selectOption('#country','France');

//or
    const options4 = await page.$$('#country option');

    for (const option of options4) {
        const text = await option.textContent();

        if(text.includes('China')){
            const value = await option.getAttribute('value');
            //await console.log(value);
            await page.selectOption('#country', value);
            break;
        }
    }

    const options = await page.locator('#country option');
    await expect(options).toHaveCount(10);

    const options2 = await page.$$('#country option'); //array
    //await console.log("Number of options: ", options2.length);
    await expect(options2.length).toBe(10);

    const content = await page.locator('#country').textContent();
    //await console.log(content);
    await expect(content.includes('China')).toBeTruthy();

    const options3 = await page.$$('#country option');
    let status = false;

    for (const option of options3) {
        let value = await option.textContent();
        if(value.includes("France")){
            status = true;
            break;
        }

    }
    await expect(status).toBeTruthy();

    await page.close();



});