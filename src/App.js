import Header from './components/Header';
import { Routes, Route, Link } from 'react-router-dom';
import Procurement from './pages/Procurement';
import Agencies from './pages/Agencies';
import Suppliers from './pages/Suppliers';
function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="procurement" element={<Procurement />} />
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
		</div>
	);
}

export default App;
