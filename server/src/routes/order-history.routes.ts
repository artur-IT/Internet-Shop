import {Router} from 'express';
import {
  getOrderHistory,
  saveOrderToFile,
  saveToOrderHistory,
} from '../controllers/order-history.controller';

const router = Router();

router.get('/', getOrderHistory);
// router.post('/', saveToOrderHistory);
router.post('/', saveOrderToFile);

export default router;
