import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import screens from './screens';
import apiai from './apiai';

const rootReducer = combineReducers({
	form,
	screens,
	apiai,
});

export default rootReducer;