import type {Request, Response} from 'express';
import {orderHistory} from '../../prisma/seedOrderHistory';

export function getOrderHistory(_req: Request, res: Response) {
  const history = orderHistory;

  return res.json(history);
}

export function saveToOrderHistory(_req: Request, res: Response) {
  console.log('z backendu: ', _req.body);
}
