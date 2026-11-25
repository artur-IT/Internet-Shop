import {describe, it, expect} from 'vitest';

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

  describe('GET /api/products', () => {
    it('should return list of all products in shop', async () => {
      const response = await fetch('http://localhost:3001/api/products/');
      const result = await response.json();
      expect(result).toHaveLength(80);
      expect(result).toBeInstanceOf(Object);
    });

    it('should return details of 1 products in shop', async () => {
      const response = await fetch(
        'http://localhost:3001/api/products/prd_6a2f9c71',
      );
      const result = await response.json();
      expect(result.name).toContain(
        'Level GO | Ryzen 5 | RTX 3050 | 16 GB | 1 TB SSD | W11H',
      );
    });

    it('should return error if category not found', async () => {
      const response = await fetch(
        'http://localhost:3001/api/products/prd_6a2f9c71_XYZ',
      );
      const result = await response.json();
      expect(result).toHaveProperty('error', 'This product not found');
    });
  });

  describe('GET /api/category', () => {
    it('should return list of categories', async () => {
      const response = await fetch('http://localhost:3001/api/category/');
      const result = await response.json();

      const categoryNames = () => {
        let categories: string[] = [];
        for (let i = 0; i < result.length; i++) {
          categories.push(result[i].name);
        }
        return categories;
      };
      expect(categoryNames()).toHaveLength(4);
    });

    it('should return error if category not found', async () => {
      const response = await fetch(
        'http://localhost:3001/api/category/desktops',
      );
      const result = await response.json();
      expect(result).toHaveProperty('error', 'This category not found');
    });
  });
});
