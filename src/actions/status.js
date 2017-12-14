export function statusHasErrored(bool) {
  return {
    type: 'STATUS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function statusIsLoading(bool) {
  return {
    type: 'STATUS_IS_LOADING',
    isLoading: bool
  };
}

export function statusFetchSuccess(status) {
  return {
    type: 'STATUS_FETCH_SUCCESS',
    status
  };
}

export function errorAfterFiveSeconds() {
  return (dispatch) => {
    setTimeOut(() => {
      dispatch(statusHasErrored(true));
    }, 5000);
  };
}

export function statusFetchData(url) {
  return (dispatch) => {
    dispatch(dataIsLoading(true));
  }

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(itemsIsLoading(false));

      return response;
    })
    .then((response) => response.json())
    .then((status) => dispatch(dataFetchSuccess(status)))
    .catch(() => dispatch(dataHasErrored(true)));
}