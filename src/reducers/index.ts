import { combineReducers } from "redux";
import { items, itemsHasError, itemsIsLoading } from "./get-items-reducer";
import { selectedDrink } from "./select-drink-reducer";
import { itemIsLoading, itemIsError, data } from "./card-info-reducer";
import { search } from "./search-reducer";

export default combineReducers({
  items,
  itemsHasError,
  itemsIsLoading,
  selectedDrink,
  itemIsLoading,
  itemIsError,
  data,
  search,
});
