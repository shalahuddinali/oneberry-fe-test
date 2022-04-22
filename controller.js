const axios = require('axios');

const controller = {
	getAllData: async (_req, res) => {
		const fetchProcurement = axios.get(
			'https://morning-hollows-07984.herokuapp.com/api/gov-procurement/procurements?pageSize=32800'
		);
		const fetchAgency = axios.get(
			'https://morning-hollows-07984.herokuapp.com/api/gov-procurement/agencies'
		);
		const fetchSupplier = axios.get(
			'https://morning-hollows-07984.herokuapp.com/api/gov-procurement/suppliers'
		);

		try {
			const [procurementData, agencyData, supplierData] = await axios.all([
				fetchProcurement,
				fetchAgency,
				fetchSupplier,
			]);
			res.status(200).json({
				procurements: procurementData.data.data,
				agencies: agencyData.data,
				suppliers: supplierData.data,
			});
		} catch (error) {
			res.status(500).json(error);
		}
	},
};
module.exports = controller;
