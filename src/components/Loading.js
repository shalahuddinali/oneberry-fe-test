import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
	return (
		<div className="d-flex justify-content-center m-5 p-5">
			<h3>Loading...</h3>
			<Spinner animation="border" size="sm" />
			<Spinner animation="border" />
			<Spinner animation="grow" size="sm" />
			<Spinner animation="grow" />
		</div>
	);
};

export default Loading;
