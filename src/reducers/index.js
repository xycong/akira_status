import { combineReducers } from 'redux';
import { status, statusHasErrored, statusIsLoading } from './status';

// Combine and group reducers, more modular for later routes
const rootReducer = combineReducers({
  status,
  statusHasErrored,
  statusIsLoading
});

export default rootReducer;