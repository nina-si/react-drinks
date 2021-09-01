import { itemsIsLoading, itemsHasError, itemsFetchDataSuccess } from "./drinks";
import { itemIsError, itemFetchInfoSuccess } from "./drink-info";
import { searchIsStarted, searchHasError, searchSuccess } from "./actions";
import { SEARCH_COCKTAIL_ENDPOINT } from "../constants";

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
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasError(true)));
  };
};

// Get card info
export const itemFetchInfo = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => dispatch(itemFetchInfoSuccess(data.drinks)))
      .catch(() => dispatch(itemIsError(true)));
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
