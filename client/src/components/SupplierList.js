import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const SupplierList = ({ suppliers }) => {
	return (
		<Container className="mt-4">
			<h3>List of Suppliers</h3>
			<Row>
				{suppliers.map((supplier, index) => (
					<Col key={index} md={12} lg={6} xl={4} className="my-2 my-md-3">
						{supplier}
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default SupplierList;
