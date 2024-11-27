import {test,expect} from "@playwright/test";

const homePageURL = 'https://gotranscript.com/text-compare';

test ('KeyboardActions', async({page}) => {

    await page.goto(homePageURL);

    const fillText = 'welcome to paradise!';

    await page.fill('//textarea[@name="text1"]', fillText);

    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');

    //console.log('fill: ' + fillText);

    const insertedText = await page.locator('//textarea[@name="text2"]').inputValue();
    //console.log('ins: ' + insertedText);

    await expect(insertedText).toEqual(fillText);

    await page.waitForTimeout(3000);

    await page.close();

});