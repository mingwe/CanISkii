export const SETCITY = 'SETCITY'
export const SETPLACES = 'SETPLACES'
export const FETCH_PLACE_PENDING = 'FETCH_PLACE_PENDING'
export const FETCH_PLACE_SUCCESS = 'FETCH_PLACE_SUCCESS'
export const FETCH_PLACE_ERROR = 'FETCH_PLACE_ERROR'
export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'

export interface IRootState {
    places: any
    isLoading: boolean
    hasError: boolean
    city: {
        name: string
    }
    fetchedPlace: {
        temp: string
        name: string
        country: string
        weather: {
            main: string
            description: string
        }
        wind: {
            speed: string
        }
    }
    globalTheme: {
        bg: string
        isInit: boolean
        isGoodIdea: boolean
    }
    alert: {
        isVisible: boolean
        text: string
        type: string
    }
}


// export interface IPlaces {
//     places: Array<{
//         id: string
//         name: string
//     }>
// }

// export interface ICity {
//     id: string
//     name: string
// }