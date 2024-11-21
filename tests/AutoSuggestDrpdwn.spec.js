import {test, expect, chromium} from "@playwright/test";
import {randomFill} from "crypto";

const homePageURL = 'https://www.redbus.in/';

test ('AutoSuggestDrpdwn', async({page}) => {

    await page.goto(homePageURL);

    await page.fill('#src','Delhi');

    await page.waitForSelector('//li[contains(@class,\'sc-iwsKbI\')]/div/text[1]');

    const fromCityMain = await page.$$('//li[contains(@class,\'sc-iwsKbI\')]/div/text[1]');
    console.log(fromCityMain);
    let i = 0;

    for(let option of fromCityMain) {
        const value = await option.textContent();
        i = i+1;
        const fromCitySub = await page.textContent('//li[i]//div[1]//text[2]');

        await expect(value.includes('Delhi') || fromCitySub.includes('Delhi')).toBeTruthy();
    }

    console.log(i);

    const numOfCity = fromCityMain.length;
    console.log(numOfCity);
    const randomNum = Math.floor(Math.random() * numOfCity);
    console.log(randomNum);
    const clickCity = await fromCityMain[randomNum].textContent();
    console.log(clickCity);
    for (let option of fromCityMain){
        const value = await option.textContent();
        if(value.includes(clickCity)) {
            await option.click();
            break;
        }
    }
    const fillCity = await page.textContent('.placeHolderMainText');
    console.log(fillCity);
    await expect(clickCity).toEqual(fillCity);

    await page.waitForTimeout(3000);
    await page.close();

});