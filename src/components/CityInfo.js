import React from "react";

export const CityInfo = (props) => {

    const place = props.city

    console.log('cityinfoprops::', props)

    return (
        <div className="bg-default w-100">
            <p>You choosed skiing location {place.name}</p>
            <p>Outside temp is {place.temp}</p>
            <p>The wind is {place.wind} m/s</p>
            <p>{place.rain ? 'Its rainy now. You shell not pass' : 'There is no rain, maybe time to ski'}</p>
        </div>
    )
}