import axios from 'axios';

import type { ProductsResponse } from '@kea-commerce/shared/models';

export const fetchAllProductsData = async (pageParameter: number): Promise<ProductsResponse> => {
  const { data } = await axios.get<ProductsResponse>(`http://localhost:3333/api/products/page/${pageParameter}`);
  return data as ProductsResponse;
};
