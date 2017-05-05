/**
 * This file composes middleware before creating the store. 
 * Middleware provides a third-party extension point between 
 * dispatching an action, and the moment it reaches the reducer.
 * 
 * Read more about middleware here: 
 * http://redux.js.org/docs/advanced/Middleware.html
 *
 */

import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from './thunk';

const middleware = [
	thunk,
];

export default composeWithDevTools(
	applyMiddleware(...middleware)
);