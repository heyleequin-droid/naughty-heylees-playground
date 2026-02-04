import request from 'supertest';
import app from '../src/app';
import { describe, it, expect } from 'vitest';

describe('GET /api/menu', () => {
  it('returns menu JSON', async () => {
    const res = await request(app).get('/api/menu');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    // basic shape check
    expect(res.body[0]).toHaveProperty('category');
    expect(res.body[0]).toHaveProperty('items');
  });
});
