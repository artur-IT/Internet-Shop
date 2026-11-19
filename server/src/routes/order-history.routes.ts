import {Router} from 'express';
import {
  getOrderHistory,
  saveToOrderHistory,
} from '../controllers/order-history.controller';

const router = Router();

router.get('/', getOrderHistory);
router.post('/', saveToOrderHistory);

export default router;
