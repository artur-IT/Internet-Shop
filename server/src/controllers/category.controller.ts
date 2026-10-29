import type {Request, Response} from 'express';
import {categories} from '../../prisma/seed2';

export function getCategories(_req: Request, res: Response) {
  const categoryList = categories.map(item => item);
  if (!categories.length) {
    res.status(404).json({error: "You don't have any categories"});
    return;
  }

  return res.json(categoryList);
}

export function getCategoryBySlug(req: Request, res: Response) {
  const category = categories.find(c => c.slug === req.params.slug);
  if (!category) {
    res.status(404).json({error: 'This category not found'});
    return;
  }

  res.json(category);
}

export function getSubcategoryBySlug(req: Request, res: Response) {
  const {categorySlug, subSlug} = req.params;

  const category = categories.find(c => c.slug === categorySlug);
  if (!category) {
    res
      .status(404)
      .json({error: 'Category not found', errorCode: 'CATEGORY_NOT_FOUND'});
    return;
  }

  const subcategory = category.subcategories.find(s => s.slug === subSlug);
  if (!subcategory) {
    res.status(404).json({
      error: 'Subcategory not found',
      errorCode: 'SUBCATEGORY_NOT_FOUND',
    });
    return;
  }

  res.json({
    ...subcategory,
    parent: {id: category.id, name: category.name, slug: category.slug},
  });
}
