export function dataHasErrored(bool) {
  return {
    type: 'DATA_HAS_ERRORED',
    hasErrored: bool
  };
}

export function dataIsLoading(bool) {
  return {
    type: 'DATA_IS_LOADING',
    isLoading: bool
  };
}

export function dataFetchSuccess(data) {
  return {
    type: 'DATA_FETCH_SUCCESS',
    data
  };
}

export function fetchData(url) {
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
    .then(response => response.json())
    .then(data => dispatch(dataFetchSuccess(data)))
    .catch(() => dispatch(dataHasErrored(true)));
}