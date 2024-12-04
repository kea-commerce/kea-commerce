export interface Product {
  // GUID
  id: string;
  name: string;
  price: number;
  productImage: string;
  stock: number;
  description?: string;
  category?: string;
  rating?: number;
  // ISO 8601 datetime string
  createdAt: string;
  // ISO 8601 datetime string
  updatedAt: string;
}

export type ProductsResponse = Readonly<{
  error?: string;
  message?: string;
  data?: Product[];
  metadata?: ProductsResponseMetadata;
}>;

export interface ProductsResponseMetadata {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasMore: boolean;
}
