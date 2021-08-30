import { ITEM_IS_ERROR, ITEM_FETCH_INFO_SUCCESS } from "../constants";

export function itemIsError(boolean) {
    return {
        type: ITEM_IS_ERROR,
        isError: boolean,
    };
}

export function itemFetchInfoSuccess(data) {
    return {
        type: ITEM_FETCH_INFO_SUCCESS,
        data,
    };
}