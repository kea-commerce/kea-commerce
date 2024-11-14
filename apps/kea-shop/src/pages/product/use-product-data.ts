import { useQuery } from '@tanstack/react-query';

import { fetchProductData } from './fetch-product-data';

export const useProductData = () => {
  return useQuery({
    queryKey: ['product'],
    queryFn: fetchProductData,
  });
};
