export interface Category {
  id: string; // later: cuid/uuid from Prisma
  name: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string; // unique
  description: string;
  price: number;
  image: string;
  categoryId: string;
  inStock: boolean;
  // optional flags for homepage slider / "deal of the day"
  isNew?: boolean;
  isPromo?: boolean;
  isSale?: boolean;
  isHit?: boolean;
}

export interface Cart {
  idOrder: string;
  productName: string;
  amount: number;
  price: number;
  thumbnailPath?: string;
}

export interface OrderHistory {
  id: string;
  userId: string;
  status: string;
  totalAmount: number;
  items: [
    {
      productId: string;
      productName: string;
      price: number;
      quantity: number;
      thumbnailPath: string;
    },
  ];
  orderDate: Date;
}
