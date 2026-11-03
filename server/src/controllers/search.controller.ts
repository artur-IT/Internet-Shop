import type {Request, Response} from 'express';
import {categories} from '../../prisma/seed2';

export function searchProduct(_req: Request, res: Response) {
  const productList = categories
    .find(category => category.slug === _req.params.slug)
    ?.subcategories.flatMap(subcategory => subcategory.products);

  if (!productList) {
    res.status(404).json({error: 'Nie znaleziono produktu'});
    return;
  }
  console.log('szukamy...');
  return res.json(productList);
}
