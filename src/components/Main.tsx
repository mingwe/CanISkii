import {Loader} from "./Loader";
import {CityInfo} from "./CityInfo";
import React from "react";
import {useSelector} from "react-redux";
import {IRootState} from "../types/types";
import {Sidebar} from "./Sidebar";
import {Alert} from "./Alert";


export const Main = (props: any) => {

    const globalThemeInfo = props.globalThemeInfo
    const places = props.places
    const isLoading = useSelector((state: IRootState) => state.isLoading)
    const hasError = useSelector((state: IRootState) => state.hasError)
    const cityInfo = useSelector((state: IRootState) => state.city)
    const fetchedPlaceInfo = useSelector((state: IRootState) => state.fetchedPlace)

    const alertInfo = useSelector((state: IRootState) => state.alert )


    return (
        <div className="row px-4">
            {/*<p>Main page content </p>*/}

            <div className="col-3">
                <Sidebar places={places}/>
            </div>
            <div className="col-9 main-content pt-2 mt-1">

                {alertInfo.isVisible
                    ? <Alert alertType={alertInfo.type} alertText={alertInfo.text}/>
                    : ''
                }

                {isLoading
                    ? <Loader/>
                    : <CityInfo hasError={hasError} cityName={cityInfo.name} placeInfo={fetchedPlaceInfo} globalTheme={globalThemeInfo}/>
                }
            </div>
        </div>
    )
}