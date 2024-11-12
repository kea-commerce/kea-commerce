import { useQuery } from '@tanstack/react-query';

import { fetchHomeData } from './fetch-home-data';

export const useHomeData = () => {
  return  useQuery({
    queryKey: ['products'],
    queryFn: fetchHomeData,
  });
}