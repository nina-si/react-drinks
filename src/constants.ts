// Endpoints

export const GET_COCKTAILS_ENDPOINT =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

export const SEARCH_COCKTAIL_ENDPOINT =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const GET_COCKTAIL_INFO_ENDPOINT =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

//Constants for actions

export const DRINK_SELECTED = 'DRINK_SELECTED';

export const DRINKS_LOADED = 'DRINKS_LOADED';

export const ITEMS_HAS_ERROR = 'ITEMS_HAS_ERROR';

export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';

export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';

export const ITEM_IS_ERROR = 'ITEM_IS_ERROR';

export const ITEM_FETCH_INFO_SUCCESS = 'ITEM_FETCH_INFO_SUCCESS';

export const SEARCH_STARTED = 'SEARCH_STARTED';

export const SEARCH_HAS_ERROR = 'SEARCH_HAS_ERROR';

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
