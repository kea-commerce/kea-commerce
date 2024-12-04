import axios from 'axios';

import type { ProductsResponse } from '@kea-commerce/shared/models';

export const fetchCollectionData = async (collection: string): Promise<ProductsResponse> => {
  const { data } = await axios.get<ProductsResponse>(`http://localhost:3333/api/products?collection=${collection}`);
  return data;
};
