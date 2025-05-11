const request = require('supertest');
const express = require('express');
const debtRoutes = require('../routes/debtRoutes');

const app = express();
app.use(express.json());
app.use('/api/debts', debtRoutes);

describe('GET /api/debts', () => {
    it('should return an array of debts', async () => {
        const res = await request(app).get('/api/debts');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});
