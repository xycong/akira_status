import { combineReducers } from 'redux';
import { status, statusHasErrored, statusIsLoading } from './status';

export default combineReducers({
  status,
  statusHasErrored,
  statusIsLoading
});