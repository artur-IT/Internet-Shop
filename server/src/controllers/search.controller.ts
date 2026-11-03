import type {Request, Response} from 'express';
import {categories} from '../../prisma/seed2';

// GET /api/search?q=klawiatura
export function searchProducts(req: Request, res: Response) {
  const q = String(req.query.q ?? '')
    .trim()
    .toLowerCase();
  if (!q) {
    res.json([]);
    return;
  }

  const products = categories.flatMap(category =>
    category.subcategories.flatMap(sub =>
      sub.products
        .filter(p => p.name.toLowerCase().includes(q))
        .map(p => ({
          id: p.id,
          name: p.name,
          categorySlug: category.slug,
          subCategorySlug: sub.slug,
        })),
    ),
  );
  res.json(products);
}
