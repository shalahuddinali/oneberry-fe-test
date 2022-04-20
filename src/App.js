import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Procurement from './pages/Procurement';
import Agencies from './pages/Agencies';
import Suppliers from './pages/Suppliers';
import { useEffect, useState } from 'react';

function App() {
	const [procurementData, setProcurementData] = useState([]);
	useEffect(() => {
		(async () => {})();
		const getProcurements = async () => {
			const response = await fetch(
				'https://morning-hollows-07984.herokuapp.com/api/gov-procurement/procurements?pageSize=32800'
			);
			const { data } = await response.json();
			setProcurementData(data);
		};
		getProcurements();
	}, []);
	return (
		<div className="App">
			<Header />
			<Container className="m-auto mt-5">
				<Routes>
					<Route
						path="procurement"
						element={<Procurement data={procurementData} />}
					/>
					<Route path="suppliers" element={<Suppliers />} />
					<Route path="agencies" element={<Agencies />} />

					<Route
						path="*"
						element={
							<main style={{ padding: '1rem' }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Routes>
			</Container>
		</div>
	);
}

export default App;
