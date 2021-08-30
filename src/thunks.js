import { itemsIsLoading, itemsHasError, itemsFetchDataSuccess } from "./actions/drinks";
import { itemIsError, itemFetchInfoSuccess } from "./actions/drink-info";

export const itemsFetchData = (url) => {
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
