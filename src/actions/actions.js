import {
    FETCH_PLACE_PENDING,
    FETCH_PLACE_ERROR,
    FETCH_PLACE_SUCCESS,
    SETCITY,
    SHOW_ALERT,
    HIDE_ALERT
} from "../types/types";
import {SETPLACES} from "../types/types"


export function setCity(city) {
    return {
        type: SETCITY,
        payload: city
    }
}

export function setPlaces(places) {
    return {
        type: SETPLACES,
        payload: places
    }
}

export function fetchPlacePending() {
    return {
        type: FETCH_PLACE_PENDING
    }
}

export function fetchPlaceSuccess(places) {
    return {
        type: FETCH_PLACE_SUCCESS,
        payload: places
    }
}

export function fetchPlaceError(error) {
    return {
        type: FETCH_PLACE_ERROR,
        error: error
    }
}


export function showAlert(text, type) {
    return {
        type: SHOW_ALERT,
        payload: {
            text,
            type
        }
    }
}

export function hideAlert(text, type) {
    return {
        type: HIDE_ALERT
    }
}