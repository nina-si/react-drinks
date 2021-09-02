import {
  ITEMS_IS_LOADING,
  ITEMS_FETCH_DATA_SUCCESS,
  ITEMS_HAS_ERROR,
} from "../constants";
import { IListActions } from "../types";

export const itemsIsLoading = (state = false, action: IListActions) => {
  switch (action.type) {
    case ITEMS_IS_LOADING:
      return action.isItemsLoading;

    default:
      return state;
  }
};

export const itemsHasError = (state = false, action: IListActions) => {
  switch (action.type) {
    case ITEMS_HAS_ERROR:
      return action.itemsFetchError;

    default:
      return state;
  }
};

export const items = (state = [], action: IListActions) => {
  switch (action.type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      return action.items;

    default:
      return state;
  }
};
