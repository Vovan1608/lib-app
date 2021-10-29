import makeRequest from "../makeRequest";

export const post = (path, data) => makeRequest({ url: path, method: 'POST', data });