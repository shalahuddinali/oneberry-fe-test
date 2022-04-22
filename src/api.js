import axios from 'axios';

export const fetchProcurement = () => {
	return axios.get(
		'https://morning-hollows-07984.herokuapp.com/api/gov-procurement/procurements?pageSize=32800'
	);
};

export const fetchAgency = () => {
	return axios.get(
		'https://morning-hollows-07984.herokuapp.com/api/gov-procurement/agencies'
	);
};

export const fetchSupplier = () => {
	return axios.get(
		'https://morning-hollows-07984.herokuapp.com/api/gov-procurement/suppliers'
	);
};
