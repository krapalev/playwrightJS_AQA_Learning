import {test,expect} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import {HomePage} from "../pages/HomePage";
import {CartPage} from "../pages/CartPage";


test ('RetryTest', async({page}) => {

    //Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol','test@123');

    await page.waitForTimeout(3000);
    //AddToCart
    const home = new HomePage(page);
    await home.addProductToCart('HTC One M9');
    await home.gotoCart();

    await page.waitForTimeout(3000);

    //Cart
    const cart = new CartPage(page);
    const status = await cart.checkProductInCart('HTC One M9');
    await expect(status).toBe(true);

    await page.waitForTimeout(3000);

    //await expect(page.locator('#logout2')).toBeVisible();

    //await page.close();

});