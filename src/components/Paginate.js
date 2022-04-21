import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';

import { usePagination, DOTS } from './usePagination';

const Paginate = ({ itemsCount, currentPage, setCurrentPage, pageSize }) => {
	const paginationRange = usePagination({
		currentPage,
		itemsCount,
		pageSize,
	});

	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onPageChange = (type) => {
		let pageToChange;

		if (typeof type === 'number') {
			pageToChange = type;
		} else if (type === 'next') {
			pageToChange = currentPage + 1;
		} else {
			pageToChange = currentPage - 1;
		}
		setCurrentPage(pageToChange);
	};

	let lastPage = paginationRange[paginationRange.length - 1];

	return (
		<Container className="d-flex justify-content-center mt-3 ">
			<Pagination size="md">
				{/* previous arrow pagination */}
				{currentPage !== 1 && (
					<Pagination.Prev onClick={() => onPageChange('prev')} />
				)}
				{paginationRange.map((pageNumber, index) => {
					if (pageNumber === DOTS) {
						return <Pagination.Ellipsis key={index} />;
					}

					return (
						<Pagination.Item
							onClick={() => onPageChange(pageNumber)}
							key={index}
							id={pageNumber}
							active={pageNumber === currentPage ? true : false}>
							{pageNumber}
						</Pagination.Item>
					);
				})}
				{/* next arrow pagination */}
				{currentPage !== lastPage && (
					<Pagination.Next onClick={() => onPageChange('next')} />
				)}
			</Pagination>
		</Container>
	);
};

export default Paginate;
