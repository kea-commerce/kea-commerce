import { isMobile } from 'react-device-detect';

import { Collections } from './collections';
import { FilteredProducts } from './filtered-products';
import { useAllProductsData } from './lib';

export const CategoriesPage = () => {
  const { data: allProducts, isError, error, isPending } = useAllProductsData();

  if (isPending || !allProducts) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className='md:flex md:w-full md:h-fit'>
      <div className='flex-none sticky top-0 md:h-screen'>{isMobile ? undefined : <Collections />}</div>
      <div className='w-full pt-5 pb-10'>
        <FilteredProducts products={allProducts.data} />
      </div>
    </div>
  );
};
