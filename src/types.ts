import { DRINK_SELECTED } from './constants';

//Store

export interface ISelectedDrink {
  selectDrink: {
    selectedDrinkId: string,
  }  
}

export interface IDrinks {
  drinks: [],
}

//Actions

export interface ISelectDrink {
  type: typeof DRINK_SELECTED;
  payload: string;
}
