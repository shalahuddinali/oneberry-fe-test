import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';

import Agencies from './pages/Agencies';
import Suppliers from './pages/Suppliers';
import Procurement from './pages/Procurement';

import { fetchProcurement, fetchAgency, fetchSupplier } from './utils';

function App() {
	const [procurements, setProcurements] = useState({
		mainData: [],
		renderData: [],
	});
	const [suppliers, setSuppliers] = useState([]);
	const [agencies, setAgencies] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getProcurements = async () => {
			setLoading(true);
			try {
				const [procurementData, agencyData, supplierData] = await axios.all([
					fetchProcurement(),
					fetchAgency(),
					fetchSupplier(),
				]);

				setProcurements({
					mainData: procurementData.data.data,
					renderData: procurementData.data.data,
				});
				setAgencies(agencyData.data);
				setSuppliers(supplierData.data);
				setLoading(false);
			} catch (error) {
				console.error(error.message);
			}
		};
		getProcurements();
	}, []);
	return (
		<div className="p-0 mb-4 pb-4">
			<Header />
			<Container className="m-auto mt-md-5 m-0 p-0">
				<Routes>
					<Route
						path="procurement"
						element={
							<Procurement
								procurements={procurements}
								setProcurements={setProcurements}
								loading={loading}
								agencies={agencies}
							/>
						}
					/>
					<Route
						path="suppliers"
						element={<Suppliers suppliers={suppliers} loading={loading} />}
					/>
					<Route
						path="agencies"
						element={<Agencies agencies={agencies} loading={loading} />}
					/>

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
