// Reducers named after result store's state property
export function statusHasErrored(state = false, action) {
  switch (action.type) {
    case 'STATUS_HAS_ERRORED':
      return action.hasErrored;
    // Return the original state if action is not applicable
    default:
      return state;
  }
}

export function statusIsLoading(state = false, action) {
  switch (action.type) {
    case 'STATUS_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function status(state = [], action) {
  switch (action.type) {
    case 'STATUS_FETCH_DATA_SUCCESS':
      return action.status;

    default:
      return state;
  }
}