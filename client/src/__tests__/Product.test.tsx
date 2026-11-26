import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Product from '../pages/Product/Product.tsx';
import { MemoryRouter } from 'react-router-dom';

// Mock fetch or API
window.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      id: 'prd_c7d2e9b5',
      name: 'Test Game',
      price: 59.99,
      description: 'Opis testowego gry',
    }),
    ok: true
  })
) as any;

describe('Product', () => {
  it('renders component with 1 product details', async () => {
    render(
      <MemoryRouter initialEntries={['/product/prd_c7d2e9b5']}>
        <Product />
      </MemoryRouter>
    );

    // Use await with findByText
    const productName = await screen.findByText(/Test Game/i);
    expect(productName).toBeDefined();
  });
});

