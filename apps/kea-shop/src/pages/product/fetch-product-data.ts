import axios from 'axios';

import type { Product } from '@kea-commerce/shared/models';

export const fetchProductData = async (): Promise<Product> => {
  const { data } = await axios.get<Product>('http://localhost:3333/api/id');
  return data;
};
