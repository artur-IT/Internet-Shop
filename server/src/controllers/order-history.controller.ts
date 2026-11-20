import type {Request, Response} from 'express';
import {orderHistory} from '../../prisma/seedOrderHistory';
import fs from 'fs';

export function getOrderHistory(_req: Request, res: Response) {
  const history = orderHistory;

  return res.json(history);
}

export function saveToOrderHistory(_req: Request, res: Response) {
  console.log('z backendu: ', _req.body);
}

export const saveOrderToFile = (_req: Request, res: Response) => {
  const orders = JSON.parse(
    fs.readFileSync('../server/prisma/savedOrders.ts', 'utf-8') || '[]',
  );

  orders.push(_req.body);
  fs.writeFileSync(
    '../server/prisma/savedOrders.ts',
    JSON.stringify(orders, null, 2),
  );
};
