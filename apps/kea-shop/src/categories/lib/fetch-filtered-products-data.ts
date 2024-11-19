import axios from 'axios';

import type { ProductsResponse } from '@kea-commerce/shared/models';

export const fetchFilteredProductsData = async (category: string | undefined): Promise<ProductsResponse> => {
  const { data } = await axios.get<ProductsResponse>(`http://localhost:3333/api/products/collections/${category}`);
  return data;
};
