import { DOTS, usePagination } from './lib/use-pagination';

type PaginationCategoriesProps = {
  readonly onPageChange: unknown;
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
  if (currentPage === 0 && paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage < paginationRange?.length ? currentPage + 1 : currentPage);
  };

  const onPrevious = () => {
    onPageChange(currentPage === 0 ? currentPage : currentPage - 1);
  };

  const lastPage = totalItems / itemsPerPage;

  return (
    <ul>
      <li onClick={onPrevious}>previous</li>
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li>{DOTS}</li>;
        }

        return (
          <li key={pageNumber} onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </li>
        );
      })}
      <li onClick={onNext}>next</li>
    </ul>
  );
};
