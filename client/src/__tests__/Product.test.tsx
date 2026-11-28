import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Product from '../pages/Product/Product.tsx';

// Mock useParams
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(() => ({ prodSlug: 'prd_c7d2e9b5' })),
  };
});

const mockProduct = {
  name: 'Test Game',
  price: 59.99,
  description: 'Fajna gra',
  stock: 10,
}

// Mock real fetch()
window.fetch = vi.fn((url) => {
  if (url === 'http://localhost:3001/api/products/prd_c7d2e9b5') {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockProduct)
    });
  }
  return Promise.reject(new Error('Unexpected URL'));
}) as any;

describe('Product', () => {
  it('renders component with 1 product details', async () => {
    render(<Product />);

    expect(await screen.findByText(/Test Game/i)).toBeDefined();
    // await screen.debug()
  });
});

