import { SEARCH_STARTED, SEARCH_HAS_ERROR, SEARCH_SUCCESS } from "../constants";
import {
  ITEMS_IS_LOADING,
  ITEMS_HAS_ERROR,
  ITEMS_FETCH_DATA_SUCCESS,
} from "../constants";
import { ITEM_IS_ERROR, ITEM_FETCH_INFO_SUCCESS } from "../constants";

//Loading items list

export function itemsIsLoading(boolean) {
  return {
    type: ITEMS_IS_LOADING,
    isItemsLoading: boolean,
  };
}

export function itemsHasError(boolean) {
  return {
    type: ITEMS_HAS_ERROR,
    itemsFetchError: boolean,
  };
}

export function fetchItemsSuccess(items) {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
    items,
  };
}

//Get cocktail info

export function itemHasError(boolean) {
  return {
    type: ITEM_IS_ERROR,
    itemHasError: boolean,
  };
}

export function fetchItemInfoSuccess(cardData) {
  return {
    type: ITEM_FETCH_INFO_SUCCESS,
    cardData,
  };
}

//Search

export function searchIsStarted(boolean) {
  return {
    type: SEARCH_STARTED,
    payload: boolean,
  };
}

export function searchHasError(boolean) {
  return {
    type: SEARCH_HAS_ERROR,
    payload: boolean,
  };
}

export function searchSuccess(data) {
  return {
    type: SEARCH_SUCCESS,
    payload: data.drinks,
  };
}
