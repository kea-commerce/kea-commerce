import { useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { Collections } from './collections';
import { FilteredProducts } from './filtered-products';
import { useAllProductsData } from './lib';
import { PaginationCategories } from './pagination-categories';

const PageSize = 3;

export const CategoriesPage = () => {
  const { data: allProducts, isError, error, isPending } = useAllProductsData();
  const [currentPage, setCurrentPage] = useState(1);

  const currentProductData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allProducts?.data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className='flex w-full h-fit'>
      <div className='flex-none sticky top-0 h-screen'>{isMobile ? undefined : <Collections />}</div>
      <div className='flex-1 flex-row justify-center h-fit px-4 pb-10'>
        <FilteredProducts />
      </div>
      <div>
        {currentProductData?.map((products) => (
          <p key={products.id}>{products.name}</p>
        ))}
      </div>
      <PaginationCategories
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        pageSize={PageSize}
        totalCount={allProducts?.data.length}
      />
    </div>
  );
};
