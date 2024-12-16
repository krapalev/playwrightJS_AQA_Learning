import {test,expect} from "@playwright/test";

const homePageURL1 = 'https://demoblaze.com/';
const homePageURL2 = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
const homePageURL3 = 'https://demo.nopcommerce.com/';

test ('test1', async({page}) => {

    await page.goto(homePageURL1);
    await expect(page).toHaveTitle('STORE');

    await page.close();
});

test ('test2', async({page}) => {

    await page.goto(homePageURL2);
    await expect(page).toHaveTitle('OrangeHRM');

    await page.close();
});

test ('test3', async({page}) => {

    await page.goto(homePageURL3);
    await expect(page).toHaveTitle('nopCommerce demo store');

    await page.close();
});