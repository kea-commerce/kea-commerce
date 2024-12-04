import { useQuery } from '@tanstack/react-query';

import { fetchCollectionData } from './fetch-collection-data';

// should this be moved to shared folder as it should
export const useCollectionData = (collection: string) => {
  return useQuery({
    queryKey: ['collection', collection],
    queryFn: () => fetchCollectionData(collection),
  });
};
