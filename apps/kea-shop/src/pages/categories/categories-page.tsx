import { type SetStateAction, useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { usePagination } from './lib/use-pagination';
import { Collections } from './collections';
import { FilteredProducts } from './filtered-products';
import { useAllProductsData } from './lib';
import { PaginationCategories } from './pagination-categories';

export const CategoriesPage = () => {
  const { data: allProducts, isError, error, isPending } = usePagination();
  const [currentPage, setCurrentPage] = useState(1);
  console.log('data.pageParams is from categories page', allProducts?.pageParams);
  console.log(
    'data on pages data',
    allProducts?.pages.map((page) => page.data)
  );

  const totalPages = allProducts?.pages.find((totalPages) => totalPages.metadata.totalPages);

  return (
    <div className='flex w-full h-fit'>
      <div className='flex-none sticky top-0 h-screen'>{isMobile ? undefined : <Collections />}</div>
      <div className='flex-1 flex-row justify-center h-fit px-4 pb-10'>
        <FilteredProducts />
      </div>

      <PaginationCategories currentPage={currentPage} onPageChange={undefined} totalPages={totalPages} />
    </div>
  );
};
