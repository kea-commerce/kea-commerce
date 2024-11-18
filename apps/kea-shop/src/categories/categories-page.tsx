import { isMobile } from 'react-device-detect';

import { Collections } from './collections';
import { FilteredProducts } from './filtered-products';

export const Categories = () => {
  return (
    <div className='flex w-full'>
      <div className='flex-none sticky top-0 h-screen'>{isMobile ? undefined : <Collections />}</div>
      <div className='flex-1 flex justify-center px-4 py-10'>
        <FilteredProducts />
      </div>
    </div>
  );
};
