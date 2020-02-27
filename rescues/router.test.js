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


})