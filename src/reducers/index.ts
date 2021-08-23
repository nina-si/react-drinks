import { combineReducers } from "redux";

const initialState = {
  selectedDrinkId: "",
};

const reducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "DRINK_SELECTED":
      return {
        selectedDrinkId: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
