import { useMemo } from 'react';

export const DOTS = '...';

const range = (start, end) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
	currentPage,
	itemsCount,
	pageSize,
	siblingCount = 1,
}) => {
	const paginationRange = useMemo(() => {
		const totalPageCount = Math.ceil(itemsCount / pageSize);

		const totalPageNumbers = siblingCount + 5;

		if (totalPageNumbers >= totalPageCount) {
			return range(1, totalPageCount);
		}

		//Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(
			currentPage + siblingCount,
			totalPageCount
		);

		//We do not want to show dots if there is only one position left after/before the left/right page count as that would lead to a change if our Pagination component size which we do not want

		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPageCount;

		//[1,2,3,4,5,...,lastIndexPage]
		if (!shouldShowLeftDots && shouldShowRightDots) {
			let leftItemCount = 3 + 2 * siblingCount;
			let leftRange = range(1, leftItemCount);

			return [...leftRange, DOTS, totalPageCount];
		}

		//[1,...,10,11,12,13 ]
		if (shouldShowLeftDots && !shouldShowRightDots) {
			let rightItemCount = 3 + 2 * siblingCount;
			let rightRange = range(
				totalPageCount - rightItemCount + 1,
				totalPageCount
			);
			return [firstPageIndex, DOTS, ...rightRange];
		}

		//[1,...,10,11,12,...,20]
		if (shouldShowLeftDots && shouldShowRightDots) {
			let middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		}
	}, [itemsCount, pageSize, siblingCount, currentPage]);

	return paginationRange;
};
