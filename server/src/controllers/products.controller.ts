import type {Request, Response} from 'express';
import {categories} from '../../prisma/seed2';

export function getProducts(_req: Request, res: Response) {
  const productList = categories.flatMap(category =>
    category.subcategories.flatMap(subcategory => subcategory.products),
  );

  if (productList.length === 0) {
    res.status(404).json({error: "You don't have any products"});
    return;
  }

  return res.json(productList);
}

// Find one product by id across all categories/subcategories
export function getProductsBySlug(req: Request, res: Response) {
  const productId = req.params.slug;

  for (const category of categories) {
    for (const subcategory of category.subcategories) {
      const product = subcategory.products.find(item => item.id === productId);
      if (product) {
        res.json(product);
        return;
      }
    }
  }

  res.status(404).json({error: 'This product not found'});
}
