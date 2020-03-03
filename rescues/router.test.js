const request = require('supertest');
const server = require('../api/server');

describe('rescues router', function () {
    it('able to run tests', function () {
        expect(true).toBe(true);
    });

    describe('GET /api/rescues', function () {
        it('200 status on success', function () {
            return request(server)
                .get('/api/rescues')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });

        it('returns array of rescues', function () {
            return request(server)
                .get('/api/rescues')
                .then(res => {
                    expect(Array.isArray(res.body)).toBe(true);
                })
        })
    });

    // describe('POST /api/rescues', function () {
    //     it('201 on successful add', function () {
    //         return request(server)
    //             .post('/api/rescues')
    //             .send({
    //                 name: 'AZ Humane Society',
    //                 location: 'Phoenix',
    //                 phone_number: '1234567890'
    //             })
    //             .then(res => {
    //                 expect(res.status).toBe(201);
    //             })
    //     })
    // })
})