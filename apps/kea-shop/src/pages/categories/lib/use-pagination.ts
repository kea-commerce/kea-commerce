import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchAllProductsData } from './fetch-all-products-data';

export const usePagination = () => {
  return useInfiniteQuery({
    queryKey: ['data'],
    queryFn: ({ pageParam: pageParameter = 1 }) => fetchAllProductsData(pageParameter),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.metadata.nextPage,
    getPreviousPageParam: (firstPage) => firstPage.metadata.previousPage,
    enabled: true,
  });
};
