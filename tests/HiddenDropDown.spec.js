import {test, expect, chromium} from "@playwright/test";
import {randomFill} from "crypto";

const homePageURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

test ('HiddenDropDown', async({page}) => {

    await page.goto(homePageURL, {waitUntil:'load'});

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {type: 'submit'}).click();

    await page.locator('//a[normalize-space()=\'PIM\']').click();
    await page.locator('(//div[@class=\'oxd-select-text--after\'])[3]').click();

    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span")

    const numOfJobTitle = options.length;
    console.log(numOfJobTitle);
    const randomNum = Math.floor(Math.random() * numOfJobTitle);
    console.log(randomNum);
    const clickJobTitle = await options[randomNum].textContent();
    console.log(clickJobTitle);
    for (let option of options){
        const jobTitle = await option.textContent();
        if(jobTitle.includes(clickJobTitle)) {
            await option.click();
            break;
        }
    }
    const fillJobTitle = await page.textContent('(//div[@class=\'oxd-select-text-input\'])[3]');
    console.log(fillJobTitle);
    await expect(clickJobTitle).toEqual(fillJobTitle);


    await page.waitForTimeout(3000);
    await page.close();



});