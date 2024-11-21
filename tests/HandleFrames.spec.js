import {test, expect, chromium} from "@playwright/test";
import {randomFill} from "crypto";

const homePageURL = 'https://ui.vision/demo/webtest/frames/';

test ('HandleFrames', async({page}) => {

    await page.goto(homePageURL);

    const allFrames = page.frames();
    console.log(allFrames.length);
//1
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1.fill('input[name=\'mytext1\']', 'Hello');
    await page.waitForTimeout(3000);
//2
    const inputBox = await page.frameLocator('frame[src=\'frame_1.html\']').locator('input[name=\'mytext1\']');
    await inputBox.fill('Back');
    await page.waitForTimeout(3000);

    await page.close();

});