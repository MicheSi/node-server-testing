const request = require('supertest');
const server = require('../api/server');

describe('dogs router', function () {
    it('able to run tests', function () {
        expect(true).toBe(true);
    });

    describe('GET /api/dogs', function () {
        it('200 status on successful get', function () {
            return request(server)
                .get('/api/dogs')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })

        it ('returns array of dogs', function () {
            return request(server)
                .get('/api/dogs')
                .then(res => {
                    expect(Array.isArray(res.body)).toBe(true);
                })
        })
    })
})