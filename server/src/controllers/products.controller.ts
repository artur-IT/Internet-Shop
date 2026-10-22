import type { Request, Response } from 'express';
import { categories } from '../../prisma/seed';

export function getProducts(_req: Request, res: Response) {
  const productList = categories.map((category) => category.products).flat();
  if (!productList) {
    res.status(404).json({ error: "You don't have any categories" });
    return;
  }
  return res.json(productList);
}

export function getProductsBySlug(req: Request, res: Response) {
  const products = categories.find(
    (category) => category.slug === req.params.slug,
  )?.products;
  if (!products) {
    res.status(404).json({ error: 'This category not found' });
    return;
  }
  res.json(products);
}
