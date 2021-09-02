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
} from "./constants";

//Store
export type Drink = string;

export interface Item {
  id: string;
  name: string;
  img: string;
}

export interface ICardData {
  id: string;
  name: string;
  glass: string;
  img: string;
  details: string;
  [others: string]: any;
}

export type ISearchResults = Item[] | null;

export interface ISearch {
  searchStarted: boolean;
  searchError: boolean;
  searchResults: ISearchResults;
}

//Actions

export interface ItemsLoading {
  type: typeof ITEMS_IS_LOADING;
  isItemsLoading: boolean;
}

export interface ItemsError {
  type: typeof ITEMS_HAS_ERROR;
  itemsFetchError: boolean;
}

export interface ItemsData {
  type: typeof ITEMS_FETCH_DATA_SUCCESS;
  items: Item[];
}

export interface ICardLoading {
  type: typeof ITEM_IS_LOADING;
  isCardInfoLoading: boolean;
}

export interface ICardError {
  type: typeof ITEM_IS_ERROR;
  itemHasError: boolean;
}

export interface ICardInfoSucces {
  type: typeof ITEM_FETCH_INFO_SUCCESS;
  data: Item;
}

export interface ISearchStarted {
  type: typeof SEARCH_STARTED;
  payload: boolean;
}

export interface ISearchError {
  type: typeof SEARCH_HAS_ERROR;
  payload: boolean;
}

export interface ISearchSuccess {
  type: typeof SEARCH_SUCCESS;
  payload: ISearchResults;
}

export interface IClearSearch {
  type: typeof CLEAR_SEARCH_RESULTS;
  payload: ISearch;
}

export interface ISelectDrink {
  type: typeof DRINK_SELECTED;
  payload: Drink;
}

export type IListActions = ItemsLoading | ItemsError | ItemsData;
export type ICardActions = ICardLoading | ICardError | ICardInfoSucces;
export type ISearchActions =
  | ISearchStarted
  | ISearchError
  | ISearchSuccess
  | IClearSearch;
