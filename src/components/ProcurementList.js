import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const data = [
	{
		tenderNo: 'ACR000ETT14000007',
		tenderDescription:
			'Provision Of Event Management And Related Services For The Public Accountants Conference 2015. (There is a compulsory briefing on 13 Nov 14 at 10am at ACRA Boardroom. Only representatives who attended this compulsory briefing are eligible to participate in this tender).',
		agency: 'Accounting And Corporate Regulatory Authority',
		awardDate: '6/2/2015',
		tenderDetailStatus: 'Awarded to No Suppliers',
		supplierName: 'Unknown',
		awardedAmt: 0,
		yearAwarded: 2015,
	},
	{
		tenderNo: 'ACR000ETT14000008',
		tenderDescription:
			'Invitation To Tender For The Provision Of Alternate Business Continuity Plan (BCP) Site For ACRA',
		agency: 'Accounting And Corporate Regulatory Authority',
		awardDate: '30/4/2015',
		tenderDetailStatus: 'Awarded to No Suppliers',
		supplierName: 'Unknown',
		awardedAmt: 0,
		yearAwarded: 2015,
	},
	{
		tenderNo: 'ACR000ETT14000009',
		tenderDescription:
			'Invitation To Tender For The Provision Of Manpower Services (Facilities Officer) For ACRA',
		agency: 'Accounting And Corporate Regulatory Authority',
		awardDate: '28/1/2015',
		tenderDetailStatus: 'Awarded to Suppliers',
		supplierName: 'RMA CONTRACTS PTE. LTD.',
		awardedAmt: 76071.21,
		yearAwarded: 2015,
	},
];
const ProcurementList = () => {
	return (
		<Container className="mt-4">
			<h4>Government Procurements</h4>
			<Table striped bordered hover className="bg-active">
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
					{data.map((data) => (
						<tr key={data.tenderNo}>
							<td>{data.tenderNo}</td>
							<td>{data.agency}</td>
							<td>{data.supplierName}</td>
							<td className="text-center">{data.yearAwarded}</td>
							<td className="text-end">${data.awardedAmt}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default ProcurementList;
