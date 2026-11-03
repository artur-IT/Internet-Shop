import {Router} from 'express';
import {
  getCategories,
  getCategoryBySlug,
  getSubcategoryBySlug,
} from '../controllers/category.controller';

const router = Router();

router.get('/', getCategories);
router.get('/:slug', getCategoryBySlug);
router.get('/:categorySlug/:subSlug', getSubcategoryBySlug);

export default router;
