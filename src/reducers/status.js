import * as types from '../actions/actionTypes';

// Reducers named after result store's state property
export function statusHasErrored(state = false, action) {
  switch (action.type) {
    case types.STATUS_HAS_ERRORED:
      return action.hasErrored;
    // Return the original state if action is not applicable
    default:
      return state;
  }
}

export function statusIsLoading(state = false, action) {
  switch (action.type) {
    case types.STATUS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export function status(state = null, action) {
  switch (action.type) {
    case types.STATUS_FETCH_SUCCESS:
      return action.status;

    default:
      return state;
  }
}