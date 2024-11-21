import {test,expect} from "@playwright/test";
import {randomFill} from "crypto";

const homePageURL = 'https://testautomationpractice.blogspot.com/';

test.skip ('Alert with OK', async({page}) => {

    await page.goto(homePageURL);

    //Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();

    })

    await page.click('#alertBtn');
    await page.waitForTimeout(5000);

    await page.close();

});

test.skip ('Confirmation Dialog', async({page}) => {

    await page.goto(homePageURL);

    //Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();//close by using OK btn
       // await dialog.dismiss();//close by using Cancel btn

    })

    await page.click('#confirmBtn');
    await expect(page.locator('#demo')).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);

    await page.close();

});

test ('Promt Dialog', async({page}) => {

    await page.goto(homePageURL);
    const newName= Math.random().toString(36).substring(2,7);
    console.log(newName);

    //Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');

        await dialog.accept(newName);

    })

    await page.click('#promptBtn');
    await expect(page.locator('#demo')).toHaveText('Hello '+newName+'! How are you today?');

    await page.waitForTimeout(5000);

});