import { useCallback } from 'react';

import { DOTS, usePagination } from './lib/use-pagination';

type PaginationCategoriesProps = {
  readonly onPageChange: any;
  readonly totalPages: number;
  readonly siblingCount: number;
  readonly currentPage: number;
  readonly itemsPerPage: number;
  readonly totalItems: number;
};
export const PaginationCategories = ({
  onPageChange,
  totalPages,
  siblingCount = 1,
  currentPage,
  itemsPerPage,
  totalItems,
}: PaginationCategoriesProps) => {
  const paginationRange = usePagination({ totalItems, currentPage, totalPages, siblingCount, itemsPerPage });
  console.log('pagination range is', paginationRange);
  console.log('length is', paginationRange?.length);
  console.log('totalPages', totalPages);
  console.log('currentPage is', currentPage);

  const pageNumberChangeHandler = useCallback(
    (pageNumber: number | string) => {
      return () => onPageChange(pageNumber);
    },
    [onPageChange]
  );

  const previousPageChangeHandler = useCallback(
    (currentPage: number) => {
      return () => onPageChange(currentPage - 1);
    },
    [onPageChange]
  );
  const nextPageChangeHandler = useCallback(
    (currentPage: number) => {
      return () => onPageChange(currentPage + 1);
    },
    [onPageChange]
  );

  const paginationLength = paginationRange?.length;
  // if (paginationLength && currentPage === 0 && paginationLength < 2) {
  //   return null;
  // }

  return (
    <ul>
      <li>
        {currentPage === 1 ? (
          <button onClick={onPageChange(currentPage)} type='button'>
            previous
          </button>
        ) : (
          <button onClick={previousPageChangeHandler(currentPage)} type='button'>
            previous
          </button>
        )}
      </li>
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li key={pageNumber}>{DOTS}</li>;
        }

        return (
          <li key={pageNumber}>
            <button onClick={pageNumberChangeHandler(pageNumber)} type='button'>
              {pageNumber}
            </button>
          </li>
        );
      })}
      <li>
        {currentPage === paginationLength ? (
          <button onClick={onPageChange(currentPage)} type='button'>
            next
          </button>
        ) : (
          <button onClick={nextPageChangeHandler(currentPage)} type='button'>
            next
          </button>
        )}
      </li>
    </ul>
  );
};
