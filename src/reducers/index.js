import { combineReducers } from 'redux';
import { status, statusHasErrored, statusIsLoading } from './data';

export default combineReducers({
  status,
  statusHasErrored,
  statusIsLoading
});