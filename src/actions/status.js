import * as types from './actionTypes';

export function statusHasErrored(bool) {
  return {
    type: types.STATUS_HAS_ERRORED,
    hasErrored: bool
  };
}

export function statusIsLoading(bool) {
  return {
    type: types.STATUS_IS_LOADING,
    isLoading: bool
  };
}

export function statusFetchSuccess(status) {
  return {
    type: types.STATUS_FETCH_SUCCESS,
    status
  };
}

export function statusFetchData(url) {
  return (dispatch) => {
    dispatch(statusIsLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(statusIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((status) => {
        console.log("statusFetchData", status);
        dispatch(statusFetchSuccess(status))
      })
      .catch(() => dispatch(statusHasErrored(true)));
  };
}