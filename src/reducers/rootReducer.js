import {SETCITY, SETPLACES} from "../types/types"

export const rootReducer = (state, action) => {


    switch (action.type) {
        case SETCITY:
            console.log(action.type)
            return {...state, city: action.payload}
        case SETPLACES:

            const PLACES = [
                { name: "Bukovel", zip: "94303", temp: '22', wind: '2', date: '21.06.2021', rain: false },
                { name: "Dragobrat", zip: "94088", temp: '19', wind: '4', date: '21.06.2021', rain: true  },
                { name: "Slavskoe", zip: "95062", temp: '30', wind: '1', date: '21.06.2021', rain: false  }
            ]

            return {...state, places: PLACES}
        default:
            return state
        // state
    }

}