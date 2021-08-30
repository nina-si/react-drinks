import { ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS, ITEMS_HAS_ERROR } from "../constants";

export const itemsHasError = (state = false, action) => {
  switch (action.type) {
    case ITEMS_HAS_ERROR:
      return action.hasError;

    default:
      return state;
  }
}

export const itemsIsLoading = (state = false, action) => {
  switch (action.type) {
    case ITEMS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export const items = (state = [], action) => {
  switch (action.type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      return action.items;

    default:
      return state;
  }
}