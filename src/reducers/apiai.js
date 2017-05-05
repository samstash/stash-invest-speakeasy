export default (state = {}, action) => {
	switch (action.type) {
		case 'STORE_API_AI_RESPONSE':
			return {
				...state,
				intents: [
					...action.response,
				]
			};
		default:
			return state;
	}
}