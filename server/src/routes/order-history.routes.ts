import {Router} from 'express';
import {getOrderHistory} from '../controllers/order-history.controller';

const router = Router();

router.get('/', getOrderHistory);

export default router;
