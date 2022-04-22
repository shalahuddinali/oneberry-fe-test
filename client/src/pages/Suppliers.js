import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import Loading from '../components/Loading';
import Paginate from '../components/Paginate';
import SupplierList from '../components/SupplierList';

import { getCurrentPageData, queryStringBuilder } from '../utils';

const Suppliers = ({ suppliers, loading }) => {
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState(1);

	const pageSize = 300;
	const suppliersCount = suppliers.length;

	useEffect(() => {
		const queryString = queryStringBuilder(currentPage);

		navigate(
			{
				path: '/suppliers',
				search: queryString,
			},
			{ replace: true }
		);
	}, [navigate, currentPage]);

	const currentSupplier = getCurrentPageData(suppliers, currentPage, pageSize);

	if (loading) {
		return <Loading />;
	}
	return (
		<Container>
			<SupplierList suppliers={currentSupplier} />
			<Paginate
				itemsCount={suppliersCount}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				pageSize={pageSize}
			/>
		</Container>
	);
};

export default Suppliers;
