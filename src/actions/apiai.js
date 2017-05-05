import { API_AI_AUTH, API_AI_HOST } from '../constants'

export const apiAiRequest = (method, path, body) => {
	return function(dispatch, getState) {
		const url = API_AI_HOST + path;

		const options = {
			body: method !== 'GET' ? JSON.stringify(body) : undefined,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				AUTHORIZATION: API_AI_AUTH,
			},
			method,
		}

		return fetch(url, options).then((res) => {		
			// Parse response as JSON
			return res.json()
		})
		.then(json => {
			// Dispatch the server's response to store
			dispatch(storeApiAiResponse(json, path))

			// Throw/Return response based on status
			if(json.status >= 400) throw json;
			return Promise.resolve(json);
		});
	}
}

export const storeApiAiResponse = (response, path) => ({
	type: 'STORE_API_AI_RESPONSE',
	response,
	path,
});