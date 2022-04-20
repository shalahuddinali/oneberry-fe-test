import React from 'react';
import SearchBar from '../components/SearchBar';
import ProcurementList from '../components/ProcurementList';
import Paginate from '../components/Paginate';
import Container from 'react-bootstrap/Container';

const Procurement = ({ data }) => {
	return (
		<Container>
			<SearchBar />
			<ProcurementList data={data} />
			<Paginate />
		</Container>
	);
};

export default Procurement;
