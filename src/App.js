import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Procurement from './pages/Procurement';
import Agencies from './pages/Agencies';
import Suppliers from './pages/Suppliers';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchProcurement, fetchAgency } from './utils';

function App() {
	const [procurementData, setProcurementData] = useState({
		mainData: [],
		renderData: [],
	});
	const [agencies, setAgencies] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getProcurements = async () => {
			setLoading(true);
			try {
				const [{ data }, agencyData] = await axios.all([
					fetchProcurement(),
					fetchAgency(),
				]);

				setProcurementData({ mainData: data.data, renderData: data.data });
				setAgencies(agencyData.data);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		};
		getProcurements();
	}, []);
	return (
		<div className="p-0">
			<Header />
			<Container className="m-auto mt-md-5 m-0 p-0">
				<Routes>
					<Route
						path="procurement"
						element={
							<Procurement
								procurementData={procurementData}
								setProcurementData={setProcurementData}
								loading={loading}
								agencies={agencies}
							/>
						}
					/>
					<Route path="suppliers" element={<Suppliers />} />
					<Route path="agencies" element={<Agencies agencies={agencies} />} />

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
