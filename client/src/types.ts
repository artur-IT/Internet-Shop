export interface CartItem {
  productId: string;
  slug: string;
  productName: string;
  price: number;
  quantity: number;
  totalPrice: number;
  thumbnailPath?: string;
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
