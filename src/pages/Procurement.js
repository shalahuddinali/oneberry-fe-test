import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import Loading from '../components/Loading';
import Paginate from '../components/Paginate';
import SearchBar from '../components/SearchBar';
import ProcurementList from '../components/ProcurementList';

import { filteredResult, getCurrentPageData } from '../utils';

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

	useEffect(
		() => () => setProcurementData({ mainData, renderData: mainData }),
		[]
	);

	//current post
	const currentProcurement = getCurrentPageData(
		renderData,
		currentPage,
		filterParams.pageSize
	);

	if (loading) {
		return <Loading />;
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
