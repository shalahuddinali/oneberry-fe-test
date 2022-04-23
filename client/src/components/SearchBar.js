import Form from 'react-bootstrap/Form';
import DatePicker from 'react-date-picker';
import Container from 'react-bootstrap/Container';

import { contractAmountRange } from '../utils';

const SearchBar = ({
	agencies,
	filterParams,
	handleChange,
	handleYearChange,
	handlePageSizeChange,
}) => {
	return (
		<Container className="m-0 mt-4 mt-md-0 ">
			<Form className="d-flex flex-md-row justify-content-between flex-column">
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
						className="p-1"
						as={DatePicker}
						maxDetail={'decade'}
						id="year"
						value={filterParams.year}
						yearPlaceholder="Year"
						onChange={(year) => handleYearChange(year)}
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
						onChange={(e) => handlePageSizeChange(e)}>
						<option value={10}>10</option>
						<option value={20}>20</option>
						<option value={50}>50</option>
						<option value={100}>100</option>
					</Form.Select>
				</Form.Group>
			</Form>
		</Container>
	);
};

export default SearchBar;
