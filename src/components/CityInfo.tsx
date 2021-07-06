import React, {FC, useEffect} from "react";
import {useDispatch} from "react-redux";
import {hideAlert, showAlert} from "../actions/actions";

interface CityInfoProps {
    cityName: string
    placeInfo: {
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
        isGoodIdea: boolean
        isRain: boolean
        isCloud: boolean
        isInit: boolean
    }
    hasError?: boolean
}

export const CityInfo: FC<CityInfoProps> = (props) => {

    const placeInfo = props.placeInfo
    const themeInfo = props.globalTheme
    const hasError = props.hasError || false
    const isInit = themeInfo.isInit

    const dispatch = useDispatch()

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

    useEffect( () => {

            if (hasError) {
                dispatch(showAlert('Something went wrong. Maybe its too much requests for open api...', 'danger'))
            }
            else if (isInit) {
                dispatch(showAlert('No location selected. Choose it from sidebar'))
            }
            else {
                dispatch(hideAlert())
            }

        }, [dispatch, hasError, isInit]
    )

    if (hasError || isInit)
        return <></>

    return (
        <div className="mx-3 mt-4 bg-white py-4 rounded-lg">
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