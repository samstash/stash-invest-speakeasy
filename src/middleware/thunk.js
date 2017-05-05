/**
 * This middleware allows you to write action creators that
 * return a function instead of an action. The thunk can be used to
 * delay the dispatch of an action, or to dispatch only if a certain
 * condition is met. The inner function receives the store methods 
 * dispatch and getState as parameters.
 * 
 * Read more about thunks here: 
 * https://github.com/gaearon/redux-thunk
 *
 */

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;