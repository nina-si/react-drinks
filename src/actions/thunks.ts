import { itemsIsLoading, itemsHasError, fetchItemsSuccess } from "./actions";
import {
  cardInfoIsLoading,
  itemHasError,
  fetchItemInfoSuccess,
} from "./actions";
import { searchIsStarted, searchHasError, searchSuccess } from "./actions";
import {
  GET_COCKTAILS_ENDPOINT,
  SEARCH_COCKTAIL_ENDPOINT,
  GET_COCKTAIL_INFO_ENDPOINT,
} from "../constants";

//Get items list

export const fetchItemsData = () => {
  return (dispatch: any) => {
    dispatch(itemsIsLoading(true));

    fetch(GET_COCKTAILS_ENDPOINT)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then(({ drinks }) =>
        drinks.map(
          (item: {
            idDrink: string;
            strDrink: string;
            strDrinkThumb: string;
          }) => {
            return {
              id: item.idDrink,
              name: item.strDrink,
              img: item.strDrinkThumb,
            };
          }
        )
      )
      .then((items) => dispatch(fetchItemsSuccess(items)))
      .catch(() => dispatch(itemsHasError(true)));
  };
};

// Get card info

type CardItem = {
  idDrink: string;
  strDrink: string;
  strGlass: string;
  strDrinkThumb: string;
  strInstructions: string;
};

export const fetchItemData = (id: string) => {
  return (dispatch: any) => {
    dispatch(cardInfoIsLoading(true));

    fetch(`${GET_COCKTAIL_INFO_ENDPOINT}${id}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(cardInfoIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((data) =>
        dispatch(
          fetchItemInfoSuccess({
            id: data.drinks[0].idDrink,
            name: data.drinks[0].strDrink,
            glass: data.drinks[0].strGlass,
            img: data.drinks[0].strDrinkThumb,
            details: data.drinks[0].strInstructions,
          })
        )
      )
      .catch(() => dispatch(itemHasError(true)));
  };
};

//Search by name

export const fetchSearchResults = (text: string) => {
  return (dispatch: any) => {
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
      .then(({ drinks }) =>
        drinks.map((item: { idDrink: string; strDrink: string }) => {
          return {
            id: item.idDrink,
            name: item.strDrink,
          };
        })
      )
      .then((items) => dispatch(searchSuccess(items)))
      .catch(() => dispatch(searchHasError(true)));
  };
};
