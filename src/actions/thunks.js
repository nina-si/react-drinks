import { itemsIsLoading, itemsHasError, fetchItemsSuccess } from "./actions";
import { itemHasError, fetchItemInfoSuccess } from "./actions";
import { searchIsStarted, searchHasError, searchSuccess } from "./actions";
import {
  SEARCH_COCKTAIL_ENDPOINT,
  GET_COCKTAIL_INFO_ENDPOINT,
} from "../constants";

//Get items list

export const fetchItemsData = (url) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(fetchItemsSuccess(items)))
      .catch(() => dispatch(itemsHasError(true)));
  };
};

// Get card info

export const fetchItemData = (id) => {
  return (dispatch) => {
    fetch(`${GET_COCKTAIL_INFO_ENDPOINT}${id}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => dispatch(fetchItemInfoSuccess(data.drinks)))
      .catch(() => dispatch(itemHasError(true)));
  };
};

//Search by name

export const fetchSearchResults = (text) => {
  return (dispatch) => {
    dispatch(searchIsStarted(true));

    fetch(`${SEARCH_COCKTAIL_ENDPOINT}${text}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(searchIsStarted(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(searchSuccess(items)))
      .catch(() => dispatch(searchHasError(true)));
  };
};
