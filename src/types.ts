import { DRINK_SELECTED } from './constants';

//Store

export interface ISelectedDrink {
  selectedDrinkId: string,
}

//Actions

export interface ISelectDrink {
  type: typeof DRINK_SELECTED;
  payload: string;
}
