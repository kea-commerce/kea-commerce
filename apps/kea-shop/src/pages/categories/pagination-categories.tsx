import { DOTS, usePagination } from './lib/use-pagination';

export const PaginationCategories = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;

  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });

  // if (currentPage === 0 || paginationRange.length < 2) {
  //   return null;
  // }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <ul>
      <li onClick={onPrevious}>previous</li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li>&#8230</li>;
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
