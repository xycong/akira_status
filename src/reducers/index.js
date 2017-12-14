import { combineReducers } from 'redux';
import { status, statusHasErrored, statusIsLoading } from './status';

const rootReducer = combineReducers({
  status,
  statusHasErrored,
  statusIsLoading
});

export default rootReducer;