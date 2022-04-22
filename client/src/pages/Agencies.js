import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Loading from '../components/Loading';

const Agencies = ({ agencies, loading }) => {
	if (loading) {
		return <Loading />;
	}
	return (
		<Container className="mt-4">
			<h3>List of Agencies</h3>
			<Row>
				{agencies.map((agency, index) => (
					<Col key={index} md={12} lg={6} xl={4} className="my-2 my-md-3">
						{agency}
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Agencies;
