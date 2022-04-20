import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const SearchBar = () => {
	const contractAmountRange = [
		{ id: 0, min: 0, max: 100000, description: 'Less than $100,000' },
		{
			id: 1,
			min: 100001,
			max: 500000,
			description: '$100,001 to $500,000',
		},
		{
			id: 2,
			min: 500000,
			max: 1000000,
			description: '$500,000 to $1,000,000',
		},
		{
			id: 3,
			min: 1000001,
			max: 5000000,
			description: '$1,000,001 to $5,000,000',
		},
		{
			id: 4,
			min: 5000000,
			description: 'More than $5,000,000',
		},
	];

	const [searchParams, setSearchParams] = useState({
		agency: 'all',
		rangeSelected: 'all',
		year: 'null',
	});

	const handleChange = (event) => {
		setSearchParams({
			...searchParams,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	};

	useEffect(() => {
		console.log(searchParams);
	}, [searchParams]);
	return (
		<Container className="m-0">
			<Form
				className="d-flex m-0 p-0 justify-content-center align-items-center"
				onSubmit={handleSubmit}>
				<Form.Group className="m-3" controlId="formAgency">
					<Form.Select value={searchParams.agency}>
						<option value="all">All</option>
						<option value="samad">Samad</option>
						<option value="shahlam">Shahlam</option>
					</Form.Select>
				</Form.Group>
				<Form.Group className="m-3" controlId="formValue">
					<Form.Select
						value={searchParams.rangeSelected}
						onChange={(value) => handleChange(value)}
						name="rangeSelected">
						<option value="all">All</option>
						{contractAmountRange.map((range) => (
							<option value={range.id} key={range.id}>
								{range.description}
							</option>
						))}
					</Form.Select>
				</Form.Group>
				<Form.Group className="m-3" controlId="formYear">
					<Form.Control
						name="year"
						type="number"
						min={1900}
						max={2100}
						value={searchParams.year}
						placeholder="Year"
						onChange={(event) => handleChange(event)}
					/>
				</Form.Group>
				<Button variant="primary" type="submit" size="lg" className="py-1">
					Search
				</Button>
			</Form>
		</Container>
	);
};

export default SearchBar;
