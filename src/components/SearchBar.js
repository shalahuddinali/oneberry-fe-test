import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { contractAmountRange } from '../utils';

const SearchBar = ({
	agencies,
	filterParams,
	handleChange,
	handleFilter,
	mainData,
}) => {
	return (
		<Container className="m-0 ">
			<Form
				className="d-flex flex-md-row justify-content-between flex-column"
				onSubmit={(e) =>
					handleFilter(mainData, filterParams, contractAmountRange, e)
				}>
				<Form.Group className="m-md-3">
					<Form.Label htmlFor="agency">Agency</Form.Label>
					<Form.Select
						id="agency"
						value={filterParams.agency}
						onChange={(value) => handleChange(value)}
						name="agency">
						<option value="">All</option>
						{agencies.map((agency, index) => (
							<option value={agency} key={index}>
								{agency}
							</option>
						))}
					</Form.Select>
				</Form.Group>

				<Form.Group className="m-md-3">
					<Form.Label htmlFor="range" className="text-nowrap">
						Contract Range
					</Form.Label>
					<Form.Select
						id="range"
						value={filterParams.rangeSelected}
						onChange={(e) => handleChange(e)}
						name="rangeSelected">
						<option value="">All</option>
						{contractAmountRange.map((range) => (
							<option value={range.id} key={range.id}>
								{range.description}
							</option>
						))}
					</Form.Select>
				</Form.Group>

				<Form.Group className="m-md-3">
					<Form.Label htmlFor="year">Year</Form.Label>
					<Form.Control
						id="year"
						name="year"
						// min={1900}
						// max={2100}
						value={filterParams.year}
						placeholder="Year"
						onChange={(e) => handleChange(e)}
					/>
				</Form.Group>

				<Form.Group className="m-md-3">
					<Form.Label htmlFor="pageSize" className="text-nowrap">
						Page Size
					</Form.Label>
					<Form.Select
						id="pageSize"
						name="pageSize"
						value={filterParams.pageSize}
						placeholder="Page Size"
						onChange={(e) => handleChange(e)}>
						<option value={10}>10</option>
						<option value={20}>20</option>
						<option value={50}>50</option>
						<option value={100}>100</option>
					</Form.Select>
				</Form.Group>

				<div className="inl p-0 m-auto">
					<Button
						variant="primary"
						type="submit"
						size="md"
						className="mt-md-5 mb-md-3 mt-3">
						Filter
					</Button>
				</div>
			</Form>
		</Container>
	);
};

export default SearchBar;
