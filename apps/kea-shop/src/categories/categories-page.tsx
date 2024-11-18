import { isMobile } from 'react-device-detect';

import { AllProducts } from './all-products';
import { Collections } from './collections';

export const Categories = () => {
  return (
    <div className='flex w-full'>
      <div className='flex-none sticky top-0 h-screen'>{isMobile ? undefined : <Collections />}</div>
      <div className='flex-1 flex justify-center px-4 py-10'>
        <AllProducts />
      </div>
    </div>
  );
};
