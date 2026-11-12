// A single line in the cart, storing a snapshot of the product
// at the moment it was added (name/price/image won't change
// even if the product data changes later in the catalog)
export interface CartItem {
  productId: string; // Product.id from Prisma
  slug: string; // for linking back to the product page
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// The whole cart, persisted as JSON in localStorage
export interface Cart {
  items: CartItem[];
}

// Product Menu types
export interface Category {
  id: string;
  slug: string;
  name: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  catSlug: string;
  slug: string;
  name: string;
}
//---------------------
