export interface Product {
  id: string;
  name: string;
  price: number;
  productImage: string;
  description?: string;
  category?: string;
  stock: number;
  rating?: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductsResponse = Readonly<{
  data: Product[];
  metadata: ProductsResponseMetadata;
}>;

export interface ProductsResponseMetadata {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasMore: boolean;
  nextPage: number;
  previousPage: number;
}
