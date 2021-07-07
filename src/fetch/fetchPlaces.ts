import {fetchPlacePending, fetchPlaceError, fetchPlaceSuccess} from "../actions/actions";

export const fetchPlace = (place: string) => {

    const url: string = `http://api.openweathermap.org/data/2.5/weather?id=${place}&appid=${process.env.REACT_APP_API_KEY}`

    return (dispatch: any) => {
        dispatch(fetchPlacePending());

        let isDemo: boolean = true
        isDemo = false

        if (isDemo) {
            const demores = {"coord":{"lon":37.6156,"lat":55.7522},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":306.37,"feels_like":305.58,"temp_min":306.28,"temp_max":307.25,"pressure":1018,"humidity":31,"sea_level":1018,"grnd_level":1001},"visibility":10000,"wind":{"speed":3.53,"deg":176,"gust":3.55},"clouds":{"all":69},"dt":1624539272,"sys":{"type":1,"id":9027,"country":"RU","sunrise":1624495529,"sunset":1624558699},"timezone":10800,"id":524901,"name":"Moscow","cod":200}
            dispatch(fetchPlaceSuccess(demores))
            return
        }
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                if(res.cod > 400) {
                    dispatch(fetchPlaceError(res.message))
                }
                else {
                    dispatch(fetchPlaceSuccess(res))
                }
                return res
            })
            .catch(error => {
                dispatch(fetchPlaceError(error))
            })
    }
}