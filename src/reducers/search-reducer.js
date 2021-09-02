import {
  SEARCH_STARTED,
  SEARCH_HAS_ERROR,
  SEARCH_SUCCESS,
  CLEAR_SEARCH_RESULTS,
} from "../constants";

const initialState = {
  searchStarted: false,
  searchError: false,
  searchResults: null,
};

export const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_STARTED:
      return { ...state, searchStarted: action.payload };

    case SEARCH_HAS_ERROR:
      return { ...state, searchError: action.payload };

    case SEARCH_SUCCESS:
      return { ...state, searchResults: action.payload };

    case CLEAR_SEARCH_RESULTS:
      return action.payload;

    default:
      return state;
  }
};
