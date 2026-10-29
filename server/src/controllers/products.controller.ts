import type {Request, Response} from 'express';
import {categories} from '../../prisma/seed2';

export function getProducts(_req: Request, res: Response) {
  const productList = categories.map(category => category.subcategories);
  if (!productList) {
    res.status(404).json({error: "You don't have any products"});
    return;
  }
  console.log('get Products z controller: ', productList);
  return res.json(productList);
}

export function getProductsBySlug(req: Request, res: Response) {
  const products = categories.find(
    category =>
      category.subcategories.map(item => item.slug) === req.params.slug,
  )?.subcategories;

  console.log('get Products BY SLUG z controller: ', products);
  if (!products) {
    res.status(404).json({error: 'This product not found'});
    return;
  }
  res.json(products);
}
