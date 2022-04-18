import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<Navbar
				expand="lg"
				bg="secondary"
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
				bg="secondary"
				variant="dark"
				className="p-2 opacity-75">
				<Nav>
					<Nav.Link as={Link} to="/procurement">
						Procurement
					</Nav.Link>
					<Nav.Link as={Link} to="/suppliers">
						Suppliers
					</Nav.Link>
					<Nav.Link as={Link} to="/agencies">
						Agencies
					</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
};

export default Header;
