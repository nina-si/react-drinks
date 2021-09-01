import { SEARCH_STARTED, SEARCH_HAS_ERROR, SEARCH_SUCCESS } from "../constants";

//Search
export function searchIsStarted(boolean) {
    return {
        type: SEARCH_STARTED,
        payload: boolean,
    };
}

export function searchHasError(boolean) {
    return {
        type: SEARCH_HAS_ERROR,
        payload: boolean,
    };
}

export function searchSuccess(data) {
    return {
        type: SEARCH_SUCCESS,
        payload: data.drinks,
    };
}