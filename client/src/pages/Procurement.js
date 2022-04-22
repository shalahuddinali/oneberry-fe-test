import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Loading from '../components/Loading';
import Paginate from '../components/Paginate';
import SearchBar from '../components/SearchBar';
import ProcurementList from '../components/ProcurementList';

import {
	filteredResult,
	getCurrentPageData,
	queryStringBuilder,
} from '../utils';

const Procurement = ({ procurements, setProcurements, loading, agencies }) => {
	const { mainData, renderData } = procurements;

	const navigate = useNavigate();
	const [filterParams, setFilterParams] = useState({
		agency: '',
		rangeSelected: '',
		year: '',
		pageSize: 20,
	});
	const [currentPage, setCurrentPage] = useState(1);

	const totalData = renderData.length;

	const handleChange = (event) => {
		let { name, value } = event.target;

		setFilterParams({
			...filterParams,
			[name]: value,
		});
	};

	const handlePageSizeChange = (event) => {
		let { name, value } = event.target;

		setCurrentPage(1);
		setFilterParams({
			...filterParams,
			[name]: value,
		});
	};

	const handleYearChange = (year) => {
		setFilterParams({
			...filterParams,
			year,
		});
	};

	const handleFilter = (data, params, range, e) => {
		e.preventDefault();
		let { agency, rangeSelected, year } = params;

		if (year) {
			year = year.getFullYear();
		}

		setCurrentPage(1);
		setProcurements({
			...procurements,
			renderData: filteredResult(data, agency, year, rangeSelected, range),
		});
	};

	//current post
	const currentProcurement = getCurrentPageData(
		renderData,
		currentPage,
		filterParams.pageSize
	);

	useEffect(() => {
		const queryString = queryStringBuilder(currentPage, filterParams);

		navigate(
			{
				path: '/procurement',
				search: queryString,
			},
			{ replace: true }
		);
		window.scrollTo(0, 0);
	}, [filterParams, currentPage, navigate]);
	console.log(procurements);
	// useEffect(() => {
	// 	return () => {
	// 		setProcurements({ ...procurements });
	// 		console.log('here effect', procurements);
	// 	};
	// }, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<Container className="m-0 p-0">
			<SearchBar
				agencies={agencies}
				handleChange={handleChange}
				handleFilter={handleFilter}
				handleYearChange={handleYearChange}
				handlePageSizeChange={handlePageSizeChange}
				filterParams={filterParams}
				mainData={mainData}
			/>
			<ProcurementList currentPageData={currentProcurement} />
			<Paginate
				itemsCount={totalData}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				pageSize={filterParams.pageSize}
			/>
		</Container>
	);
};

export default Procurement;
