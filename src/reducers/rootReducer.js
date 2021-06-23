import {FETCH_PLACES, SETCITY, SETPLACES} from "../types/types"

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

            return {...state, places: PLACES, isLoading: false}

        case FETCH_PLACES:


            const testCity = 'kiev'

            const url = `http://api.openweathermap.org/data/2.5/weather?q=${testCity}&appid=${process.env.REACT_APP_API_KEY}`
            console.log(url)

            // fetch(url)
            //     .then((response) => {
            //         // return response.json();
            //         console.log('first then')
            //         // console.log(response)
            //         // console.log(response.json())
            //         return {...state, fetchedplacesfrst: response.json()}
            //     })
            //     .then((data) => {
            //         console.log('second then')
            //         console.log(data);
            //         return {...state, fetchedplaces: data}
            //     });



            // const PLACES = [
            //     { name: "Bukovel", zip: "94303", temp: '22', wind: '2', date: '21.06.2021', rain: false },
            //     { name: "Dragobrat", zip: "94088", temp: '19', wind: '4', date: '21.06.2021', rain: true  },
            //     { name: "Slavskoe", zip: "95062", temp: '30', wind: '1', date: '21.06.2021', rain: false  }
            // ]

            // return {...state, places: PLACES, isLoading: false}
            return state

        default:
            return state
        // state
    }

}