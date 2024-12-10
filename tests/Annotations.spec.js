import {test,expect} from "@playwright/test";

const homePageURL = 'https://demoblaze.com/';
/*
test.only ('test1@sanity', async({page}) => {

    console.log('This is test1');

});

test.skip ('test2@sanity', async({page}) => {

    console.log('This is test2');

});

test ('test3@reg', async({page, browserName}) => {
    //test.skip(browserName === 'chromium');
    //or
    if (browserName === 'chromium') {
        test.skip();
    }
    console.log('This is test3');

});

test ('test4@reg', async({page}) => {
    test.fixme();
    console.log('This is test4');

});

test.fixme('test4.1@reg', async({page}) => {
    console.log('This is test4.1');

});


test ('test5@sanity@reg', async({page}) => {
    test.fail();
    console.log('This is test5');
    expect(1).toBe(2);
});

test.fail('test5.1@sanity@reg', async({page}) => {
    console.log('This is test5.1');
    expect(1).toBe(2);
});
*/

test('test6', async({page}) => {
    test.slow();
    console.log('This is test6');
    await page.goto(homePageURL);


});

