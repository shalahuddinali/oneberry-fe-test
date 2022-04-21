import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ProcurementList from '../components/ProcurementList';
import Paginate from '../components/Paginate';
import { filteredResult } from '../utils';
import Container from 'react-bootstrap/Container';

const Procurement = ({
	procurementData,
	setProcurementData,
	loading,
	agencies,
}) => {
	const { mainData, renderData } = procurementData;
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

		// if (name === 'year' || name === 'pageSize') {
		// 	value = parseInt(value);
		// }
		setFilterParams({
			...filterParams,
			[name]: value,
		});
		console.log(value);
	};

	const handleFilter = (renderData, params, range, e) => {
		e.preventDefault();
		const { agency, rangeSelected, year } = params;

		setProcurementData({
			...procurementData,
			renderData: filteredResult(
				renderData,
				agency,
				year,
				rangeSelected,
				range
			),
		});
	};

	//current post

	const indexOfLastProcurement = currentPage * filterParams.pageSize;
	const indexOfFirstProcurement =
		indexOfLastProcurement - filterParams.pageSize;
	const currentProcurement = renderData.slice(
		indexOfFirstProcurement,
		indexOfLastProcurement
	);

	if (loading) {
		return <h3>Loading...</h3>;
	}

	return (
		<Container className="m-0 p-0">
			<SearchBar
				agencies={agencies}
				handleChange={handleChange}
				handleFilter={handleFilter}
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
