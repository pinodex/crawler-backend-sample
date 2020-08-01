require('../bootstrap');

const request = require('supertest');
const app = require('@/app');

const mongooseService = require('@/services/mongoose');

const pageService = require('@/services/page');

let mongoose = null;

beforeAll(async () => {
  mongoose = await mongooseService.connect(global.mongoDbUri);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('get page', () => {
  it('gets the record', async () => {
    const { id } = await pageService.create('https://example.com');

    const { statusCode, body } = await request(app)
      .get(`/api/pages/${id}`);
    expect(statusCode).toEqual(200);

    expect(body).toMatchObject({
      id,
      status: 'pending',
      url: 'https://example.com',
    });
  });

  it('lists the record', async () => {
    const { id } = await pageService.create('https://example.com');

    const { statusCode, body } = await request(app)
      .get('/api/pages');
    expect(statusCode).toEqual(200);

    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id,
          status: 'pending',
          url: 'https://example.com',
        }),
      ]),
    );
  });
});
