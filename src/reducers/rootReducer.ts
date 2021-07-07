import {
    FETCH_PLACE_PENDING,
    FETCH_PLACE_ERROR,
    FETCH_PLACE_SUCCESS,
    SETCITY,
    SETPLACES,
    SHOW_ALERT, HIDE_ALERT
} from "../types/types"
import {PLACES} from "../const/places"

interface IAction {
    type: string
    payload?: any
    error?: string
}

export const rootReducer = (state: any, action: IAction) => {


    function kelvinToCelsius(temp: number) {
        // if (typeof temp !== 'number')
        //     return temp

        let newTemp: number = (temp - 273.15)
        let newTempString: string
        let prefix = () => {
            return (newTemp > 0) ? '+' : ''
        }
        newTempString = newTemp.toFixed(1)
        return prefix()+newTempString
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

            let isGoodIdea: boolean = true
            let bg: string


            switch (data.weather[0].id) {
                case 502:
                    isGoodIdea = false
                    bg = 'bg-rain'
                    break
                case 800:
                    isGoodIdea = true
                    bg = 'bg-sunny'
                    break
                case 801:
                case 802:
                case 803:
                case 804:
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

        case SHOW_ALERT:
            return {
                ...state,
                alert: {
                    isVisible: true,
                    text: action.payload.text,
                    type: action.payload.type
                }
            }

        case HIDE_ALERT:
            return {
                ...state,
                alert: {
                    isVisible: false
                }
            }

        default:
            return state
    }

}