import {test,expect} from "@playwright/test";

let userId;

test('GET users', async ({request}) => {

    const response = await request.get('https://reqres.in/api/users?page2')
    console.log(await response.json());
    expect(response.status()).toBe(200);

})

test('Create users', async ({request}) => {

    const response = await request.post('https://reqres.in/api/users',
                                            {
                                                    data:{
                                                        "name": 'Alex',
                                                        "job": 'Manager'
                                                        },
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                         }
                                                     }
                                                    );
    console.log(await response.json());
    expect(response.status()).toBe(201);

    let res = await response.json();
    userId = res.id;

})

test('Update users', async ({request}) => {

    const response = await request.put('https://reqres.in/api/users/'+userId,
                                            {
                                                     data:{
                                                            "name": 'Alex',
                                                            "job": 'Boss'
                                                           },
                                                    headers: {
                                                            'Content-Type': 'application/json'
                                                            }
                                                    }
                                                    );
    console.log(await response.json());
    expect(response.status()).toBe(200);

})

test('Delete users', async ({request}) => {

    const response = await request.delete('https://reqres.in/api/users/'+userId);

    expect(response.status()).toBe(204);

})