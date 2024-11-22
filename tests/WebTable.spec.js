import {test,expect} from "@playwright/test";
import {randomFill} from "crypto";

const homePageURL = 'https://testautomationpractice.blogspot.com/';

test ('WebTable', async({page}) => {

    await page.goto(homePageURL);

    const table = await page.locator('#productTable');

    const columns = await table.locator('thead tr th');
    //console.log(await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    //console.log(await rows.count());
    expect(await rows.count()).toBe(5);
/*
    const matchedRow = await rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    });

    await matchedRow.locator('input').check();
    await expect(matchedRow.locator('input')).toBeChecked();
    */

    await selectProduct(rows, page, 'Smartphone');
    await selectProduct(rows, page, 'Tablet');
    await selectProduct(rows, page, 'Wireless Earbuds');

    //get info from all table pages
    const pages = await page.locator('.pagination li a');
    //console.log(await pages.count());

    for(let p=0;p<await  pages.count(); p++) {
        if(p>0){
            await pages.nth(p).click();
        }

        for(let i=0; i<await rows.count(); i++){
            const row = rows.nth(i);
            const tds = row.locator('td');

            for(let j=0; j<await tds.count()-1; j++){
                const text = await tds.nth(j).textContent();
                console.log(text);
            }
        }
        await page.waitForTimeout(3000);
    }
//get all info from table first page
  /*  for(let i=0; i<await rows.count(); i++){
        const row = rows.nth(i);
        const tds = row.locator('td');

        for(let j=0; j<await tds.count()-1; j++){
            const text = await tds.nth(j).textContent();
            console.log(text);
        }
    }

   */

    await page.waitForTimeout(5000);

    await page.close();

});

async function selectProduct(rows, page, name){
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    });
    await matchedRow.locator('input').check();
}