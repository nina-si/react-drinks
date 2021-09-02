import {
  ITEM_IS_LOADING,
  ITEM_FETCH_INFO_SUCCESS,
  ITEM_IS_ERROR,
} from "../constants";

export const itemIsLoading = (state = false, action) => {
  switch (action.type) {
    case ITEM_IS_LOADING:
      return action.isCardInfoLoading;

    default:
      return state;
  }
};

export const itemIsError = (state = false, action) => {
  switch (action.type) {
    case ITEM_IS_ERROR:
      return action.itemHasError;

    default:
      return state;
  }
};

export const data = (state = [], action) => {
  switch (action.type) {
    case ITEM_FETCH_INFO_SUCCESS:
      return action.data;

    default:
      return state;
  }
};
