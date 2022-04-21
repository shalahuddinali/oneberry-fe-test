import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { cashFormatter } from '../utils';

const ProcurementList = ({ currentPageData }) => {
	if (currentPageData.length < 1) {
		return (
			<div className="d-flex justify-content-center mt-5 p-5">
				<h4>No record found!</h4>
			</div>
		);
	}
	return (
		<Container className="mt-4">
			<h4>Government Procurements</h4>
			<Table striped bordered hover className="bg-active p-0 m-auto">
				<thead className="table-primary">
					<tr>
						<th>Contract</th>
						<th>Agency</th>
						<th>Supplier</th>
						<th className="text-center">Year</th>
						<th className="text-end">Amount</th>
					</tr>
				</thead>
				<tbody>
					{currentPageData.map((currentPageData, index) => (
						<tr key={index}>
							<td className="text-break">{currentPageData.tenderNo}</td>
							<td className="text-break">{currentPageData.agency}</td>
							<td className="text-break">{currentPageData.supplierName}</td>
							<td className="text-center">{currentPageData.yearAwarded}</td>
							<td className="text-end text-break">
								{cashFormatter(currentPageData.awardedAmt)}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default ProcurementList;
