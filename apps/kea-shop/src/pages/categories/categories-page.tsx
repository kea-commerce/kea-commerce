import { isMobile } from 'react-device-detect';

import { Collections } from './collections';
import { FilteredProducts } from './filtered-products';

export const CategoriesPage = () => {
  return (
    <div className='flex w-full h-fit'>
      <div className='flex-none sticky top-0 h-screen'>{isMobile ? undefined : <Collections />}</div>
      <div className='flex-1 flex-row justify-center h-fit px-4 pb-10'>
        <FilteredProducts />
      </div>
    </div>
  );
};
