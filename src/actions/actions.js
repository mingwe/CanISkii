import {FETCH_PLACES, SETCITY} from "../types/types";
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

export function fetchPlaces() {
    return {
        type: FETCH_PLACES
    }
}