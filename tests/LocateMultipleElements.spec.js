import {test,expect} from "@playwright/test";

const homePageURL = 'https://demoblaze.com/';

test ('LocateMultipleElements', async({page}) => {

    await page.goto(homePageURL);

    await page.waitForSelector('//div[@class="col-lg-9"]//div/h4/a[@class="hrefch"]');

    const products = await page.$$('//div[@class="col-lg-9"]//div/h4/a[@class="hrefch"]');

    for (const product of products) {

        const productName = await product.textContent();
        console.log(productName);
    }

    await page.close();

});