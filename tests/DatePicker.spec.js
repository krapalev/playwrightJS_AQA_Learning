import {test,expect} from "@playwright/test";
import randomYear from "random-year";
import randomMonth from "random-month";
import randomDay from "random-day";


const homePageURL = 'https://testautomationpractice.blogspot.com/';

test ('DatePicker', async({page}) => {

    await page.goto(homePageURL);

   // await page.fill('#datepicker', '10/04/2025');

    const year = Number(randomYear({min: 2000, max: 2045}));
    console.log(year);
    const month = randomMonth({raw: true});
    console.log(month);
    const monthName = month.name;
    console.log(monthName);
    const monthNum = month.number;
    console.log(monthNum);
    const day = randomDay({year, month});
    console.log(day);

    await page.click('#datepicker');

    const currentYear = Number(await page.locator('.ui-datepicker-year').textContent());
    let currentMonth = await page.locator('.ui-datepicker-month').textContent();
    let cmn;

    switch (currentMonth) {
        case currentMonth = 'January': cmn = 1;
            break;
        case currentMonth = 'February': cmn = 2;
            break;
        case currentMonth = 'March': cmn = 3;
            break;
        case currentMonth = 'April': cmn = 4;
            break;
        case currentMonth = 'May': cmn = 5;
            break;
        case currentMonth = 'June': cmn = 6;
            break;
        case currentMonth = 'July': cmn = 7;
            break;
        case currentMonth = 'August': cmn = 8;
            break;
        case currentMonth = 'September': cmn = 9;
            break;
        case currentMonth = 'October': cmn = 10;
            break;
        case currentMonth = 'November': cmn = 11;
            break;
        case currentMonth = 'December': cmn = 12;
            break;
    }
    console.log('This is cmn: ' + cmn);

    let deltaYear = year-currentYear;
    console.log('This is deltaYear: ' + deltaYear);
    let deltaMonth = monthNum-cmn;
    console.log('This is deltaMonth: ' + deltaMonth);

    let monthCounter;
    if(deltaYear > 0 ||deltaYear === 0){
        monthCounter = deltaMonth;
    } else {
        if (deltaYear < 0) {
            monthCounter = Math.abs(deltaMonth);
        }
    }
    console.log('This is monthCounter: ' + monthCounter);

    let counter = (Math.abs(deltaYear))*12 + monthCounter;
    console.log('This is counter: ' + counter);

    for (let i = 0; i < counter; i++) {
        if(deltaYear > 0){
            await page.locator('[title=\'Next\']').click();
        } else {
            if(deltaYear < 0){
                await page.locator('[title=\'Prev\']').click();
            } else {
                break;
            }
        }
    }

    for (let i = 0; i < Math.abs(deltaMonth); i++) {
        if(deltaYear === 0 && deltaMonth > 0){
            await page.locator('[title=\'Next\']').click();
        } else {
            if(deltaYear === 0 && deltaMonth < 0){
                await page.locator('[title=\'Prev\']').click();
            } else {
                break;
            }
        }
    }

    //select needed day directly using day variable
    await page.click(`//a[normalize-space()=\'${day}\']`);


    await page.waitForTimeout(5000);

    await page.close();

});