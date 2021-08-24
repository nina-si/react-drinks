import { DRINK_SELECTED } from "../constants";
import { ISelectDrink } from "../types";

const drinkSelected = (drinkId: string):ISelectDrink => {
  return {
    type: DRINK_SELECTED,
    payload: drinkId,
  };
};

export { drinkSelected };
