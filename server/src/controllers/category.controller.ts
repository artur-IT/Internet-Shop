import type { Request, Response } from 'express';
import { categories } from '../../prisma/seed';

export function getCategories(_req: Request, res: Response) {
  const categoryList = categories.map((item) => item.name);
  if (!categoryList) {
    res.status(404).json({ error: 'Category not found' });
    return;
  }

  return res.json(categoryList);
}

export function getCategoryBySlug(req: Request, res: Response) {
  const category = categories.find((c) => c.slug === req.params.slug);
  if (!category) {
    res.status(404).json({ error: 'Category not found' });
    return;
  }

  res.json(category);
}
