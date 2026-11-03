import {Router} from 'express';
import {
  getProducts,
  getProductsBySlug,
} from '../controllers/products.controller';

const router = Router();

router.get('/', getProducts);
router.get('/:slug', getProductsBySlug);

export default router;
