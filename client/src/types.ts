// A single line in the cart, storing a snapshot of the product
// at the moment it was added (name/price/image won't change
// even if the product data changes later in the catalog)
export interface CartItem {
  productId: string; // Product.id from Prisma
  slug: string;       // for linking back to the product page
  name: string;
  price: number;      // price snapshot at the time of adding
  image: string;      // thumbnail for the cart preview
  quantity: number;
}

// The whole cart, persisted as JSON in localStorage
export interface Cart {
  items: CartItem[];
}
