import { useQuery } from '@tanstack/react-query';

import { fetchFilteredProductsData } from './fetch-filtered-products-data';

export const useFilteredProductsData = (category: string | undefined) => {
  console.log('category is', category);
  return useQuery({
    enabled: !!category,
    queryKey: ['products', category],
    queryFn: () => fetchFilteredProductsData(category),
  });
};
