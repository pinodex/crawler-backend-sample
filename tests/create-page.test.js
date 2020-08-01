require('../bootstrap');

const request = require('supertest');
const app = require('@/app');

const mongooseService = require('@/services/mongoose');

jest.mock('@/services/queue', () => require('@/tests/mocks/services/queue'));

let mongoose = null;

beforeAll(async () => {
  mongoose = await mongooseService.connect(global.mongoDbUri);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('create page to crawl', () => {
  it('responds 201 and the created record', async () => {
    const { statusCode, body } = await request(app)
      .post('/api/pages')
      .send({
        url: 'https://example.com',
      });
    expect(statusCode).toEqual(201);

    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('status', 'pending');
    expect(body).toHaveProperty('url', 'https://example.com');
  });

  it('gets the created record', async () => {
    const { body: { id } } = await request(app)
      .post('/api/pages')
      .send({
        url: 'https://example.com',
      });
    const { statusCode, body } = await request(app)
      .get(`/api/pages/${id}`);
    expect(statusCode).toEqual(200);

    expect(body).toMatchObject({
      id,
      status: 'pending',
      url: 'https://example.com',
    });
  });

  it('lists the created record', async () => {
    const { body: { id } } = await request(app)
      .post('/api/pages')
      .send({
        url: 'https://example.com',
      });
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
