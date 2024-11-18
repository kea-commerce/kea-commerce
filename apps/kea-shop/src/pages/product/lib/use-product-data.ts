import { useQuery } from '@tanstack/react-query';

import { fetchProductData } from './fetch-product-data';

export const useProductData = (id: string | undefined) => {
  return useQuery({
    enabled: !!id,
    queryKey: ['product', id],
    queryFn: () => fetchProductData(id),
  });
};
