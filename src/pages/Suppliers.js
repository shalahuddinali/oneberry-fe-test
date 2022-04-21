import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import Loading from '../components/Loading';
import Paginate from '../components/Paginate';
import SupplierList from '../components/SupplierList';

import { fetchSupplier, getCurrentPageData } from '../utils';

const Suppliers = () => {
	const [suppliers, setSuppliers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(false);

	const suppliersCount = suppliers.length;
	const pageSize = 300;

	useEffect(() => {
		const getSuppliers = async () => {
			setLoading(true);
			try {
				const { data } = await fetchSupplier();
				setSuppliers(data);
				setLoading(false);
			} catch (error) {
				console.log(error.message);
			}
		};
		getSuppliers();
	}, []);

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
