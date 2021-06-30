import React, {FC} from "react";
import {setCity} from "../actions/actions";
import {useDispatch} from 'react-redux'
import {fetchPlace} from "../fetch/fetchPlaces";
// import {ICity} from "../types/types";

interface CityButtonProps {
    // props: {
    //     city: {
    //         id: string
    //         name: string
    //     }
    // }
    city: {
        id: string
        name: string
    }
}

export const CityButton: FC<CityButtonProps> = (props) => {

    const dispatch = useDispatch()

    const onclickHandler = (city: CityButtonProps['city']) => {
        dispatch(setCity(city));
        dispatch(fetchPlace(city.id))
    }

    // const cityName = props.name ? props.name : 'default city'


    const city = props.city

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