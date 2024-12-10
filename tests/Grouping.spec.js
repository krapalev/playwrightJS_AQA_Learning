import {test,expect} from "@playwright/test";


test.describe.only('Group1', async () => {

    test('Test1', async({page})=>{
        console.log('this is test1...');
    });

    test('Test2', async({page})=>{
        console.log('this is test2...');
    });

});

test.describe('Group2', async () => {
    test('Test3', async({page})=>{
        console.log('this is test3...');
    });

    test('Test4', async({page})=>{
        console.log('this is test4...');
    });
});
