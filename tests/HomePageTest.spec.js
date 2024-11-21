const {test, expect}=require('@playwright/test');

const homePageURL = 'https://demoblaze.com/';

test('Home Page', async ({page})=>{

    await page.goto(homePageURL);

    const pageTitle = await page.title();
    console.log('Page title is ', pageTitle);

    await expect(pageTitle).toEqual('STORE');

    await expect(page).toHaveURL(homePageURL);

    await page.close();

})
