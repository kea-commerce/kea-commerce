import { useCallback } from 'react';
import { useParams } from 'react-router';
import { error } from 'node:console';

import { usePagination } from './lib/use-pagination';

type PaginationCategoriesProps = {
  readonly onPageChange: any;
  readonly totalPages: number;
  readonly currentPage: number;
};
export const PaginationCategories = ({ onPageChange, totalPages }: PaginationCategoriesProps) => {
  const {
    data,
    isError,
    isLoading,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
  } = usePagination();
  const { page } = useParams();

  const currentPage = Number(page);

  const pageNumberChangeHandler = useCallback(
    (pageNumber: number | string) => {
      return () => onPageChange(pageNumber);
    },
    [onPageChange]
  );

  console.log('data is', data);
  console.log('data  pages is', data?.pages);
  console.log('data pageParams is', data?.pageParams);
  console.log('page param is', page);

  console.log('totalPages', totalPages);
  console.log('currentPage is', currentPage);

  if (isError) {
    return <p>error</p>;
  }

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <ul>
      <li>
        {hasPreviousPage ? (
          <button onClick={() => fetchPreviousPage} type='button'>
            previous
          </button>
        ) : (
          <button type='button'>previous</button>
        )}
      </li>
      <li key={currentPage}>
        <button onClick={pageNumberChangeHandler(currentPage)} type='button'>
          {currentPage}
        </button>
      </li>

      <li>
        {hasNextPage ? (
          <button onClick={() => fetchNextPage} type='button'>
            next
          </button>
        ) : (
          <button type='button'>next</button>
        )}
      </li>
    </ul>
  );
};
