import {test,expect} from "@playwright/test";

const homePageURL = 'https://testautomationpractice.blogspot.com/';
const homePageURL2 = 'https://swisnl.github.io/jQuery-contextMenu/demo.html';

test ('MouseEvents', async({page}) => {

    await page.goto(homePageURL);

    const pointMe = await page.locator('//button[normalize-space()=\'Point Me\']');
    const laptops = await page.locator('//a[normalize-space()=\'Laptops\']');

    await pointMe.hover();
    await laptops.hover();

    await page.waitForTimeout(3000);

    //dbl click

    const field1Text = await page.textContent('#field1');
    const dblButton = await page.locator('button[ondblclick=\'myFunction1()\']');

    await dblButton.dblclick();

    const field2Text = await page.textContent('#field2');

    await expect(field2Text).toEqual(field1Text)

    await page.waitForTimeout(3000);

    //right click
    await page.goto(homePageURL2);

    const btn = await page.locator('.context-menu-one.btn.btn-neutral');

    await btn.click({button: 'right'});

    await page.waitForTimeout(3000);

    await page.close();

});
