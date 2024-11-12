export interface Product {
  id: string;
  name: string;
  price: number;
  productImage: string;
  description?: string;
  category?: string;
  stock?: number;
  rating?: number;
  createdAt: Date;
  updatedAt: Date;
}
