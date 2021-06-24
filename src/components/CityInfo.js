import React, {useEffect} from "react";

import {setPlaces} from "../actions/actions";


export const CityInfo = (props) => {

    const placeInfo = props.placeInfo
    const cityName = props.cityName

    const tempString = JSON.stringify(placeInfo)

    return (
        <div className="bg-default w-100">

            <p>
                {cityName}
            </p>
            <pre>
                {tempString}
            </pre>
            {/*<p>You choosed skiing location {place.name}</p>*/}
            {/*<p>Outside temp is {place.temp}</p>*/}
            {/*<p>The wind is {place.wind} m/s</p>*/}
            {/*<p>{place.rain ? 'Its rainy now. You shell not pass' : 'There is no rain, maybe time to ski'}</p>*/}
        </div>
    )
}