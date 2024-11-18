import axios from 'axios';

import type { ProductsResponse } from '@kea-commerce/shared/models';

export const fetchProductsData = async (): Promise<ProductsResponse> => {
  const { data } = await axios.get<ProductsResponse>('http://localhost:3333/api/products');
  return data;
};
