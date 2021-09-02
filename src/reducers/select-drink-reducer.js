import { bindActionCreators } from "redux";
import { DRINK_SELECTED } from "../constants";

export const selectedDrink = (state = "", { type, payload }) => {
  switch (type) {
    case DRINK_SELECTED:
      return payload;
    default:
      return state;
  }
};
