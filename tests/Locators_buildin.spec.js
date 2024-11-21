import {test,expect} from "@playwright/test";

const homePageURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

test ('Build-In Locators', async({page}) => {

    await page.goto(homePageURL);

    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {type: 'submit'}).click();

    const userName = await page.locator('//p[@class=\'oxd-userdropdown-name\']').textContent();

    await expect(await page.getByText(userName)).toBeVisible();
/*
    await page.locator('//span[normalize-space()=\'My Info\']').click();
*/
    await expect(await page.getByTitle('Help')).toBeVisible();

    await page.close();

});