import {describe, it, expect} from 'vitest';

// Prosty szablon testu API
describe('API Endpoint', () => {
  describe('GET /api/health', () => {
    it('should return text info about server running', async () => {
      const response = await fetch('http://localhost:3001/api/health');
      expect(response.status).toBe(200);
      expect(await response.text()).toContain('Ok, server Express is running');
    });
  });

  describe('POST /api/auth/register', () => {
    it('should register a new user with valid data', async () => {
      // const response = await fetch('http://localhost:3001/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email: 'test@example.com', password: 'password123' })
      // });
      // expect(response.status).toBe(201);
      // expect(await response.json()).toHaveProperty('token');
    });

    it('should return error for invalid data', async () => {
      // const response = await fetch('http://localhost:3001/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email: 'invalid-email' })
      // });
      // expect(response.status).toBe(400);
    });
  });

  describe('POST /api/auth/login', () => {
    it('should login user and return token', async () => {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: 'art@cat.pl',
          password: 'cat',
        }),
      });
      expect(response.status).toBe(200);
      expect(await response.json()).toHaveProperty('token');
    });

    it('should return error for invalid credentials', async () => {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: 'test@example.com',
          password: 'wrongpassword',
        }),
      });
      expect(response.status).toBe(401);
    });
  });

  // Testy dla endpointa GET /api/products
  describe('GET /api/products', () => {
    it('should return list of products', async () => {
      // Przykład:
      // const response = await fetch('http://localhost:3001/api/products');
      // expect(response.status).toBe(200);
      // expect(await response.json()).toBeInstanceOf(Array);
    });
  });

  // Testy dla endpointa GET /api/category
  describe('GET /api/category', () => {
    it('should return list of categories', async () => {
      // Przykład:
      // const response = await fetch('http://localhost:3001/api/category');
      // expect(response.status).toBe(200);
      // expect(await response.json()).toBeInstanceOf(Array);
    });
  });
});
