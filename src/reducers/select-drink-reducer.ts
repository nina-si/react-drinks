import { DRINK_SELECTED } from "../constants";
import { ISelectDrink } from "../types";

export const selectedDrink = (state = "", action: ISelectDrink) => {
  switch (action.type) {
    case DRINK_SELECTED:
      return action.payload;
    default:
      return state;
  }
};
