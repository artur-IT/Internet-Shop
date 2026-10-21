import type { Request, Response } from 'express';
import {
  laptops,
  monitors,
  games,
  peripherals,
  smartphones as all,
} from '../../prisma/seed';

export function getProducts(_req: Request, res: Response) {
  const productList = all.map((item) => item);
  if (!productList) {
    res.status(404).json({ error: "You don't have any categories" });
    return;
  }
  return res.json(productList);
}

export function getProductsBySlug(req: Request, res: Response) {
  const products = all.find((c) => c.slug === req.params.slug);
  if (!products) {
    res.status(404).json({ error: 'This category not found' });
    return;
  }
  res.json(products);
}
