import {test,expect} from "@playwright/test";

const homePageURL = 'https://testautomationpractice.blogspot.com/';


test ('DragDrop', async({page}) => {

    await page.goto(homePageURL);

    const drag = await page.locator('#draggable');
    const drop = await page.locator('#droppable');

    await drag.dragTo(drop);

    const dropText = (await page.locator('#droppable').textContent()).trim();
    console.log(dropText);
    await expect(dropText).toBe('Dropped!');

    await page.waitForTimeout(3000);

    await page.close();

});