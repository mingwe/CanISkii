export const SETCITY = 'SETCITY'
export const SETPLACES = 'SETPLACES'
export const SHOW_LOADER = 'SHOW_LOADER'
export const FETCH_PLACE_PENDING = 'FETCH_PLACE_PENDING'
export const FETCH_PLACE_SUCCESS = 'FETCH_PLACE_SUCCESS'
export const FETCH_PLACE_ERROR = 'FETCH_PLACE_ERROR'

export interface IRootState {
    isOn?: boolean
    places: any
    isLoading: boolean
    city: {
        name: string
    }
    fetchedPlace: object
    globalTheme: {
        bg: string
        isInit: boolean
        isRain: boolean
        isCloud: boolean
    }
}