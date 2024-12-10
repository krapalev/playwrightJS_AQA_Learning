import {test,expect} from "@playwright/test";


const homePageURL = 'https://testautomationpractice.blogspot.com/';
const AxeBuilder = require('@axe-core/playwright').default;

test ('SingleFile', async({page}) => {

    await page.goto(homePageURL);

    await page.waitForSelector('#singleFileInput');

    const uploadSingleButton = await page.locator('#singleFileForm>[type=\'submit\']');
    const chooseSingleButton = await page.$('#singleFileInput');

    //await chooseSingleButton.click();
    await chooseSingleButton.focus();
    const emptyMessage = 'No file chosen';

    //const contentText = await page.hover('#singleFileInput');
    //const contentText = await new AxeBuilder({ page }).include('#singleFileInput').analyze();
    //const contentText = await chooseSingleButton.getAttribute('Value');
    //const contentText = await page.accessibility.snapshot();
    console.log('content text is: ' + contentText);
    //await expect(chooseSingleButton.textContent()).toContain(emptyMessage);

    await chooseSingleButton.setInputFiles('tests/uploadFiles/test1.txt');
    await uploadSingleButton.click();
    const uploadMessage = 'test1.txt';
    //await expect(chooseSingleButton.textContent()).toContain(uploadMessage);

    const testMessage = 'Single file selected: test1.txt, Size: 0 bytes, Type: text/plain';
    //await expect(testMessage).toBe(await page.textContent('#singleFileStatus'));

    await page.waitForTimeout(3000);

    await page.close();

});

test.skip ('MultipleFile', async({page}) => {

    await page.goto(homePageURL);

    await page.waitForSelector('#multipleFilesInput');

    const uploadMultipleButton = await page.locator('#multipleFilesForm>[type=\'submit\']');
    const chooseMultipleButton = await page.locator('#multipleFilesInput');

    await chooseMultipleButton.focus();
    const emptyMessage = 'No file chosen';
    await expect(chooseMultipleButton.textContent()).toContain(emptyMessage);

    await chooseMultipleButton.setInputFiles(['tests/uploadFiles/test1.txt', 'tests/uploadFiles/test2.txt']);
    await uploadMultipleButton.click();
    const uploadMessage = '2 files';
    await expect(uploadMultipleButton.textContent()).toContain(uploadMessage);

    const testMessage2 = 'Multiple files selected: test1.txt, Size: 0 bytes, Type: text/plain test2.txt, Size: 0 bytes, Type: text/plain';
    await expect(testMessage2).toBe((await page.textContent('#multipleFilesStatus')).trim());

    await page.waitForTimeout(3000);

    await page.close();

});
