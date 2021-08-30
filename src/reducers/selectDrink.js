import { DRINK_SELECTED } from "../constants";

export const selectDrink = (state = "", { type, payload }) => {
  switch (type) {
    case DRINK_SELECTED:
      return {
        selectedDrinkId: payload,
      };
    default:
      return state;
  }
};
