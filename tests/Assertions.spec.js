import { test, expect } from '@playwright/test';

const homePageURL = 'https://demo.nopcommerce.com/register';

test ('Assertions', async({page}) => {

    await page.goto(homePageURL);

    await expect(page).toHaveURL(homePageURL);
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const logoElement = await page.locator('img[alt=\'nopCommerce demo store\']');
    await expect(logoElement).toBeVisible();

    const searchBox = await page.locator('#small-searchterms');
    await expect(searchBox).toBeEnabled();

    const radioMale = await page.locator('#gender-male');
    await radioMale.click();
    await expect(radioMale).toBeChecked();

    const checkboxNewsletter = await page.locator('#Newsletter');
    await expect(checkboxNewsletter).toBeChecked();

    const btnRegister = await page.locator('#register-button');
    await expect(btnRegister).toHaveAttribute('type', 'submit');

    const headerRegister = await page.locator('.page-title h1');
    await expect(headerRegister).toHaveText('Register');

    await expect(await page.locator('(//div[@class=\'title\'])[1]')).toContainText('ur Personal Det');

    const txtboxEmail = await page.locator('#Email');
    await txtboxEmail.fill('test@demo.com');
    await expect(txtboxEmail).toHaveValue('test@demo.com');

    const drpdwnMonth = await page.locator('select[name=\'DateOfBirthMonth\'] option');
    await expect(drpdwnMonth).toHaveCount(13);

    await page.close();

});