import { useQuery } from '@tanstack/react-query';

import { fetchAllProductsData } from './fetch-all-products-data';

// should this be moved to shared folder as it should
export const useAllProductsData = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => fetchAllProductsData(),
  });
};
