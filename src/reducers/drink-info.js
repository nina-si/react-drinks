import { ITEM_FETCH_INFO_SUCCESS, ITEM_IS_ERROR } from "../constants";

export const itemIsError = (state = false, action) => {
  switch (action.type) {
    case ITEM_IS_ERROR:
      return action.itemIsError;

    default:
      return state;
  }
}

export const data = (state = [], action) => {
  switch (action.type) {
    case ITEM_FETCH_INFO_SUCCESS:
      return action.data;

    default:
      return state;
  }
}