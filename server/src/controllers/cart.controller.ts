import type {Request, Response} from 'express';
import {cart} from '../../prisma/seedCart';

export function getCart(_req: Request, res: Response) {
  const productCart = cart;

  return res.json(productCart);
}
