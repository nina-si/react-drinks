import { ITEMS_IS_LOADING, ITEMS_HAS_ERROR, ITEMS_FETCH_DATA_SUCCESS } from "../constants";

export function itemsHasError(boolean) {
    return {
        type: ITEMS_HAS_ERROR,
        hasError: boolean,
    };
}

export function itemsIsLoading(boolean) {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: boolean,
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items,
    };
}