import {test,expect} from "@playwright/test";

const homePageURL = 'https://demoblaze.com/';

test ('test1@sanity', async({page}) => {

    console.log('This is test1');

});

test ('test2@sanity', async({page}) => {

    console.log('This is test2');

});

test ('test3@reg', async({page}) => {

    console.log('This is test3');

});

test ('test4@reg', async({page}) => {

    console.log('This is test4');

});

test ('test5@sanity@reg', async({page}) => {

    console.log('This is test5');

});
/*
test ('test6', async({page}) => {

    console.log('This is test6');

});

 */