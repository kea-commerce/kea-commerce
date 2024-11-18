import { useQuery } from '@tanstack/react-query';

import { fetchProductsData } from './fetch-products-data';

export const useProductsData = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProductsData,
  });
};
