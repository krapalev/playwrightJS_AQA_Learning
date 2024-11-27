import {test,expect} from "@playwright/test";
import {type} from "node:os";

const homePageURL = 'https://testautomationpractice.blogspot.com/';


test ('SingleFile', async({page}) => {

    await page.goto(homePageURL);

    await page.waitForSelector('#singleFileInput');

    const uploadSingleButton = await page.locator('#singleFileForm>[type=\'submit\']');
    const chooseSingleButton = await page.locator('#singleFileInput');

    //await chooseSingleButton.click();
    await chooseSingleButton.focus();
    const emptyMessage = 'No file chosen';
    await expect(chooseSingleButton).toContainText(emptyMessage);

    await chooseSingleButton.setInputFiles('tests/uploadFiles/test1.txt');
    await uploadSingleButton.click();
    const uploadMessage = 'test1.txt';
    await expect(chooseSingleButton).toContainText(uploadMessage);

    const testMessage = 'Single file selected: test1.txt, Size: 0 bytes, Type: text/plain';
    await expect(testMessage).toBe(await page.textContent('#singleFileStatus'));

    await page.waitForTimeout(3000);

    await page.close();

});

test ('MultipleFile', async({page}) => {

    await page.goto(homePageURL);

    await page.waitForSelector('#multipleFilesInput');

    const uploadMultipleButton = await page.locator('#multipleFilesForm>[type=\'submit\']');
    const chooseMultipleButton = await page.locator('#multipleFilesInput');

    await chooseMultipleButton.focus();
    const emptyMessage = 'No file chosen';
    await expect(chooseMultipleButton).toContainText(emptyMessage);

    await chooseMultipleButton.setInputFiles(['tests/uploadFiles/test1.txt', 'tests/uploadFiles/test2.txt']);
    await uploadMultipleButton.click();
    const uploadMessage = '2 files';
    await expect(uploadMultipleButton).toContainText(uploadMessage);

    const testMessage2 = 'Multiple files selected: test1.txt, Size: 0 bytes, Type: text/plain test2.txt, Size: 0 bytes, Type: text/plain';
    await expect(testMessage2).toBe((await page.textContent('#multipleFilesStatus')).trim());

    await page.waitForTimeout(3000);

    await page.close();

});
