import React from "react";

export const CityInfo = (props) => {

    const placeInfo = props.placeInfo
    const themeInfo = props.globalTheme

    if (Object.entries(placeInfo).length === 0) {
        return <div className="py-5">Select location</div>
    }

    let tempClass
    let tempNumber = +placeInfo.temp
    if (tempNumber > 31) {
        tempClass = 'danger'
    }
    else if (tempNumber > 28) {
        tempClass = 'warning'
    } else {
        tempClass = 'success'
    }

    console.log(themeInfo)

    return (
        <div className="w-100">
            <h3>Weather in {placeInfo.name}, {placeInfo.country}</h3>
            <p className={'description'}>{placeInfo.weather.main} / {placeInfo.weather.description}</p>
            <p className="font-weight-bold">Outside temp is <span className={`display-4 ${tempClass}`}> <span className={`badge badge-${tempClass}`}>{placeInfo.temp}</span></span></p>
            <p>Wind speed is {placeInfo.wind.speed} meters in second</p>
            <hr/>
            <p className="font-weight-bold">
                If you wonna go to the beach, {themeInfo.isGoodIdea ? 'it\'s a good idea, the weather is cool!' : 'it\'s bad idea, weather isnt so good'}
            </p>
        </div>
    )
}