import makeRequest from "../makeRequest";

export const put = (path, id, data) => makeRequest({
	url: `${path}/${id}`,
	method: 'PUT',
	data
});