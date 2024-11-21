import {test, expect, chromium} from "@playwright/test";
import {randomFill} from "crypto";

const homePageURL = 'https://ui.vision/demo/webtest/frames/';

test ('HandleInnerFrames', async({page}) => {

    await page.goto(homePageURL);

    const allFrames = page.frames();
    console.log(allFrames.length);

    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await frame1.fill('input[name=\'mytext3\']', 'Hello');
    await page.waitForTimeout(3000);

    const childFrames = frame1.childFrames();
    await childFrames[0].check('//div[@id=\'i6\']//div[@class=\'AB7Lab Id5V1\']');
    await expect(childFrames[0].locator('//div[@id=\'i6\']//div[@class=\'AB7Lab Id5V1\']')).toBeChecked();
    await page.waitForTimeout(3000);


    await page.close();

});