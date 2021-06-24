import {FETCH_PLACE_PENDING, FETCH_PLACE_ERROR, FETCH_PLACE_SUCCESS, SETCITY, SETPLACES} from "../types/types"
import {PLACES} from "../const/places"

export const rootReducer = (state, action) => {


    function kelvinToCelsius(temp) {
        if (typeof temp !== 'number')
            return temp

        let newTemp = (temp - 273.15)
        let prefix = () => {
            return (newTemp > 0) ? '+' : ''
        }
        newTemp = newTemp.toFixed(1)
        return prefix()+newTemp
    }


    switch (action.type) {
        case SETCITY:
            console.log(action.type)
            return {...state, city: action.payload}
        case SETPLACES:

            return {...state, places: PLACES, isLoading: false}

        case FETCH_PLACE_PENDING:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_PLACE_SUCCESS:

            const data = action.payload

            let isRain = false
            let isCloud = false
            let isGoodIdea = true
            let bg


            switch (data.weather[0].id) {
                case 502:
                    isRain = true
                    isCloud = true
                    isGoodIdea = false
                    bg = 'bg-rain'
                    break
                case 800:
                    isRain = false
                    isCloud = false
                    isGoodIdea = true
                    bg = 'bg-sunny'
                    break
                case 801:
                case 802:
                case 803:
                case 804:
                    isRain = false
                    isCloud = true
                    isGoodIdea = false
                    bg = 'bg-cloud'
                    break
                default:
                    bg = 'bg-sunny'
            }


            const reducedPayload = {
                id: data.id,
                name: data.name,
                temp: kelvinToCelsius(data.main.temp),
                wind: data.wind,
                weather: data.weather[0],
                country: data.sys.country
            }

            return {
                ...state,
                isLoading: false,
                // fetchedPlace: action.payload,
                fetchedPlace: reducedPayload,
                hasError: false,
                globalTheme: {
                    bg: bg,
                    isInit: false,
                    isRain: isRain,
                    isCloud: isCloud,
                    isGoodIdea: isGoodIdea
                }
            }

        case FETCH_PLACE_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: true,
                errormessage: action.error
            }

        default:
            return state
        // state
    }

}