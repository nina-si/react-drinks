import {
  SEARCH_STARTED,
  SEARCH_HAS_ERROR,
  SEARCH_SUCCESS,
  CLEAR_SEARCH_RESULTS,
  ITEMS_IS_LOADING,
  ITEMS_HAS_ERROR,
  ITEMS_FETCH_DATA_SUCCESS,
  ITEM_IS_LOADING,
  ITEM_IS_ERROR,
  ITEM_FETCH_INFO_SUCCESS,
  DRINK_SELECTED,
} from "../constants";

import {
  Item,
  ICardData,
  ISearchResults,
  Drink,
  ItemsLoading,
  ItemsError,
  ItemsData,
  ICardLoading,
  ICardError,
  ICardInfoSucces,
  ISearchStarted,
  ISearchError,
  ISearchSuccess,
  IClearSearch,
  ISelectDrink,
} from "../types";

//Loading items list

export function itemsIsLoading(boolean: boolean): ItemsLoading {
  return {
    type: ITEMS_IS_LOADING,
    isItemsLoading: boolean,
  };
}

export function itemsHasError(boolean: boolean): ItemsError {
  return {
    type: ITEMS_HAS_ERROR,
    itemsFetchError: boolean,
  };
}

export function fetchItemsSuccess(items: Item[]): ItemsData {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
    items,
  };
}

//Get cocktail info

export function cardInfoIsLoading(boolean: boolean): ICardLoading {
  return {
    type: ITEM_IS_LOADING,
    isCardInfoLoading: boolean,
  };
}

export function itemHasError(boolean: boolean): ICardError {
  return {
    type: ITEM_IS_ERROR,
    itemHasError: boolean,
  };
}

export function fetchItemInfoSuccess(data: ICardData): ICardInfoSucces {
  return {
    type: ITEM_FETCH_INFO_SUCCESS,
    data,
  };
}

//Search

export function searchIsStarted(boolean: boolean): ISearchStarted {
  return {
    type: SEARCH_STARTED,
    payload: boolean,
  };
}

export function searchHasError(boolean: boolean): ISearchError {
  return {
    type: SEARCH_HAS_ERROR,
    payload: boolean,
  };
}

export function searchSuccess(data: ISearchResults): ISearchSuccess {
  return {
    type: SEARCH_SUCCESS,
    payload: data,
  };
}

export function clearSearchResults(): IClearSearch {
  return {
    type: CLEAR_SEARCH_RESULTS,
    payload: { searchStarted: false, searchError: false, searchResults: null },
  };
}

// Select item
export const drinkSelected = (selectedDrinkId: Drink): ISelectDrink => {
  return {
    type: DRINK_SELECTED,
    payload: selectedDrinkId,
  };
};
