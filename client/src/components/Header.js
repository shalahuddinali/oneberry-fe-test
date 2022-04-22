import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
	return (
		<div>
			<Navbar
				expand="lg"
				bg="primary"
				variant="dark"
				className=" py-1 px-3 flex-column align-items-start">
				<Navbar.Brand className="text-wrap fs-2 fw-bold">
					GOV
					<br />
					PROCUREMENT
					<br />
					PORTAL
				</Navbar.Brand>
			</Navbar>
			<Navbar
				expand="lg"
				bg="primary"
				variant="dark"
				className="p-2 opacity-75">
				<Nav>
					<Nav.Link as={Link} to="/procurement" className="me-5">
						Procurement
					</Nav.Link>
					<Nav.Link as={Link} to="/suppliers" className="me-5">
						Suppliers
					</Nav.Link>
					<Nav.Link as={Link} to="/agencies" className="me-5">
						Agencies
					</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
};

export default Header;
