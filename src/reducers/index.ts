import { combineReducers } from "redux";
import { items, itemsHasError, itemsIsLoading } from "./get-items-reducer";
import { selectDrink } from "./select-drink-reducer";
import { itemIsError, data } from "./card-info-reducer";
import { search } from "./search-reducer";

export default combineReducers({
  items,
  itemsHasError,
  itemsIsLoading,
  selectDrink,
  itemIsError,
  data,
  search,
});
