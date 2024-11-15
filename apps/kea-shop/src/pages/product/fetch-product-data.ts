import axios from 'axios';

import type { Product } from '@kea-commerce/shared/models';

export const fetchProductData = async (id: string | undefined): Promise<Product> => {
  const { data } = await axios.get<{ product: Product }>(`http://localhost:3333/api/products/${id}`);
  return data.product;
};
