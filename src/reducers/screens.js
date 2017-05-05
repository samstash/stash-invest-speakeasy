export default (state = [], action) => {
	switch (action.type) {
		case 'GET_ALL_SCREENS':
			return action.screens;
		default:
			return state;
	}
}