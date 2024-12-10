import {test,expect} from "@playwright/test";

const homePageURL = 'https://demoblaze.com/';

test('HomePageTest', async ({page}) => {

    //Login
    await page.goto(homePageURL);

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator('button[onclick=\'logIn()\']').click();

    //Test Home Page
    const products = await page.$$('.card');
    expect(products.length).toBe(9);

    //Logout
    await page.locator('#logout2').click();


});

test('AddProductToTheCard', async ({page}) => {
    //Login
    await page.goto(homePageURL);

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator('button[onclick=\'logIn()\']').click();

    //Add product
    await page.locator('//a[normalize-space()=\'Samsung galaxy s6\']').click();
    await page.locator('//a[normalize-space()=\'Add to cart\']').click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });

    //Logout
    await page.locator('#logout2').click();
});