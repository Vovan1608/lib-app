import makeRequest from "../makeRequest";

export const post = (url, data) => makeRequest({ url, method: 'POST', data });