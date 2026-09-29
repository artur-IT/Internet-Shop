import type { Request, Response } from 'express';
import { categories } from '../../prisma/seed';

export function getCategories(_req: Request, res: Response) {
  res.json(categories);
}

export function getCategoryBySlug(req: Request, res: Response) {
  const category = categories.find((c) => c.slug === req.params.slug);

  if (!category) {
    res.status(404).json({ error: 'Category not found' });
    return;
  }

  res.json(category);
}
