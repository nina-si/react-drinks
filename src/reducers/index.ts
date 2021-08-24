import { DRINK_SELECTED } from "../constants";
import { ISelectedDrink, ISelectDrink } from "../types";

const initialState = {
  selectedDrinkId: "",
};

const reducer = (state = initialState, { type, payload}:ISelectDrink):ISelectedDrink => {
  switch (type) {
    case DRINK_SELECTED:
      return {
        selectedDrinkId: payload,
      };
    default:
      return state;
  }
};

export default reducer;
