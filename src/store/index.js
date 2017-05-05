import { createStore } from 'redux';
import rootReducer from '../reducers';
import middleware from '../middleware';

export default (initialState) => {
	return createStore(rootReducer, initialState, middleware);
}