export default interface Product {
  name: string;
  price_in_cents: number;
  image_url: string;
  id: string;
}

export interface ProductDetails extends Product {
  description: string;
  category: string;
  quantity: number;
}
