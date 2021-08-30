import { combineReducers } from "redux";
import { items, itemsHasError, itemsIsLoading } from "./items";
import { selectDrink } from "./selectDrink";

export default combineReducers({
  items,
  itemsHasError,
  itemsIsLoading,
  selectDrink,
});
