import { type SetStateAction, useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { Collections } from './collections';
import { FilteredProducts } from './filtered-products';
import { useAllProductsData } from './lib';
import { PaginationCategories } from './pagination-categories';

export const CategoriesPage = () => {
  const { data: allProducts, isError, error, isPending } = useAllProductsData();
  const [currentPage, setCurrentPage] = useState(1);

  const meta = allProducts?.metadata;
  const itemsPerPage = meta?.itemsPerPage;

  const currentProductData = useMemo(() => {
    const firstPageIndex = itemsPerPage && (currentPage - 1) * itemsPerPage;
    const lastPageIndex = itemsPerPage && firstPageIndex && firstPageIndex + itemsPerPage;
    return allProducts?.data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, allProducts, itemsPerPage]);

  const onPageChangeHandle = useMemo(() => {
    return (page: SetStateAction<number>) => setCurrentPage(page);
  }, []);

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
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChangeHandle}
        pageSize={meta?.itemsPerPage}
        totalCount={meta?.totalPages}
        totalPages={meta?.totalPages}
      />
    </div>
  );
};
