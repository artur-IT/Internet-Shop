import type {Request, Response} from 'express';
import {cart} from '../../prisma/seedCart';

export function getOrderHistory(_req: Request, res: Response) {
  const history = cart;

  // return res.json(history);
  return res.send('Historia zamówień!');
}
