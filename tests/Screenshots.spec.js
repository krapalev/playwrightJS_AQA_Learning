import {test,expect} from "@playwright/test";

const homePageURL = 'https://demoblaze.com/';

test ('Page Screenshot', async({page}) => {

    await page.goto(homePageURL);
    await page.waitForSelector('(//div[@class=\'col-lg-4 col-md-6 mb-4\'])[3]');

    await page.screenshot({path: 'tests/screenshots/'+Date.now()+'HomePage.png'});

    await page.close();

});

test ('Full page Screenshot', async({page}) => {

    await page.goto(homePageURL);
    await page.waitForSelector('(//div[@class=\'col-lg-4 col-md-6 mb-4\'])[3]');

    await page.screenshot({path: 'tests/screenshots/'+Date.now()+'FullPage.png', fullPage: true});

    await page.close();

});

test.only ('Element Screenshot', async({page}) => {

    await page.goto(homePageURL);
    await page.waitForSelector('(//div[@class=\'col-lg-4 col-md-6 mb-4\'])[3]');

    await page.locator('(//div[@class=\'col-lg-4 col-md-6 mb-4\'])[1]').screenshot({path: 'tests/screenshots/'+Date.now()+'Element.png'});

    await page.close();

});