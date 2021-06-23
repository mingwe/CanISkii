import React from "react";
import {rootReducer} from "../reducers/rootReducer";
import {setCity} from "../actions/actions";
import {useDispatch} from 'react-redux'


export const CityButton = (props) => {

    const dispatch = useDispatch()

    const onclickHandler = (city) => (
        dispatch(setCity(city))
    )

    // const cityName = props.name ? props.name : 'default city'

    const city = props.city

    console.log(city)

    return (
        <button
            // id={id}
            className="btn btn-block btn-secondary mb-2"
            onClick={() => onclickHandler(city)}
        >
            {city.name}
        </button>
    )
}