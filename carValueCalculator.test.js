const request = require('supertest');
const app = require('./index'); 

describe('Car Value Calculation API Tests', () => {
    test('Test 1: Valid model and year ("Civic", 2014) should return $6,614', async () => {
        const response = await request(app)
            .post('/car-value')
            .send({ model: 'Civic', year: 2014 });
        expect(response.body).toEqual({ car_value: 6614 });
    });

    test('Test 2: Empty model should return error', async () => {
        const response = await request(app)
            .post('/car-value')
            .send({ model: '', year: 2021 });
        expect(response.body).toEqual({ error: 'there is an error' });
    });

    test('Test 3: Empty year should return error', async () => {
        const response = await request(app)
            .post('/car-value')
            .send({ model: 'Civic', year: '' }); 
        expect(response.body).toEqual({ error: 'there is an error' });
    });

    test('Test 4: Model as null value should return error', async () => {
        const response = await request(app)
            .post('/car-value')
            .send({ model: null, year: 2022 });
        expect(response.body).toEqual({ error: 'there is an error' });
    });

    test('Test 5: Year as null value should return error', async () => {
        const response = await request(app)
            .post('/car-value')
            .send({ model: 'Civic', year: null });
        expect(response.body).toEqual({ error: 'there is an error' });
    });

    test('Test 6: Model as a number should return error', async () => {
        const response = await request(app)
            .post('/car-value')
            .send({ model: 123, year: 2019 });
        expect(response.body).toEqual({ error: 'there is an error' });
    });

    test('Test 7: Year as a string should return error', async () => {
        const response = await request(app)
            .post('/car-value')
            .send({ model: 'Civic', year: "2024" });
        expect(response.body).toEqual({ error: 'there is an error' });
    });

    test('Test 8: Negative year should return error', async () => {
        const response = await request(app)
            .post('/car-value')
            .send({ model: 'Civic', year: -1 });
        expect(response.body).toEqual({ error: 'there is an error' });
    });
});
