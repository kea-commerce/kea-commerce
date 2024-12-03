import { useMemo } from 'react';

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  siblingCount: number;
  currentPage: number;
};
export const DOTS = '...';
export const usePagination = ({
  totalItems,
  itemsPerPage,
  totalPages,
  siblingCount = 1,
  currentPage,
}: PaginationProps) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalPages);
    console.log('totalPageCount', totalPageCount);

    const range = (start: number, end: number) => {
      const length = end - start + 1;
      return Array.from({ length }, (_, index) => index + start);
    };
    console.log('range is a function', range);

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    console.log('leftSiblingIndex', leftSiblingIndex);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
    console.log('rightSiblingIndex', rightSiblingIndex);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalPages, siblingCount, currentPage]);

  return paginationRange;
};
