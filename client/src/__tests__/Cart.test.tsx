import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cart from '../pages/Cart/Cart.tsx';
import { MemoryRouter } from 'react-router-dom';

describe('Cart', () => {
  it('renders component with products', async () => {
    render(<Cart />);
    expect(await screen.findByText(/Koszyk/i)).toBeDefined();
  });

  // it('click on "Zapłać" Button should call fn()', async () => {
  //   const mockFetch = vi.fn();
  //   window.fetch = mockFetch;

  //   mockFetch.mockResolvedValue({
  //     ok: true,
  //     json: vi.fn().mockResolvedValue({}),
  //   });

  //   render(<MemoryRouter><Cart /></MemoryRouter>);
  //   await screen.findByText(/Razem:/i);

  //   const button = await screen.findByRole('button', { name: /Zapłać/i });
  //   button.click();

  //   expect(mockFetch).toHaveBeenCalled();
  // });
});
