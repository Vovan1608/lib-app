import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export default ({
	url = '/',
	method = 'get',
	params = {},
	data = {},
	headers = {},
}) => {
	return axios({
		url: BASE_URL + url,
		method,
		params,
		data,
		headers,
	});
};