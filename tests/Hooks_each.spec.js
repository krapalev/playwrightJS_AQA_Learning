import {test,expect} from "@playwright/test";

const homePageURL = 'https://demoblaze.com/';
let page;


test.beforeEach(async ({browser})=>{

    page = await browser.newPage();

    //Login
    await page.goto(homePageURL);

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator('button[onclick=\'logIn()\']').click();
});

test.afterEach(async ()=>{
    //Logout
    await page.locator('#logout2').click();
});

test('HomePageTest', async () => {

    const products = await page.$$('.card');
    expect(products.length).toBe(9);
});

test('AddProductToTheCard', async () => {

    await page.locator('//a[normalize-space()=\'Samsung galaxy s6\']').click();
    await page.locator('//a[normalize-space()=\'Add to cart\']').click();

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });
});