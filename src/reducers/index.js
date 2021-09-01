import { combineReducers } from "redux";
import { items, itemsHasError, itemsIsLoading } from "./items";
import { selectDrink } from "./selectDrink";
import { itemIsError, data } from "./drink-info";
import { search } from "./searchReducer";

export default combineReducers({
  items,
  itemsHasError,
  itemsIsLoading,
  selectDrink,
  itemIsError,
  data,
  search,
});
