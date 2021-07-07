import {Loader} from "./Loader";
import {CityInfo} from "./CityInfo";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../types/types";
import {Sidebar} from "./Sidebar";
import {Alert} from "./Alert";
import {hideAlert, showAlert} from "../actions/actions";


export const Main = (props: any) => {

    const globalThemeInfo = props.globalThemeInfo
    const places = props.places
    const isLoading = useSelector((state: IRootState) => state.isLoading)
    const hasError = useSelector((state: IRootState) => state.hasError)
    const fetchedPlaceInfo = useSelector((state: IRootState) => state.fetchedPlace)

    const alertInfo = useSelector((state: IRootState) => state.alert )

    const isInit = globalThemeInfo.isInit

    const dispatch = useDispatch()

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

    return (
        <div className="row px-4">
            {/*<p>Main page content </p>*/}

            <div className="col-3">
                <Sidebar places={places}/>
            </div>
            <div className="col-9 main-content pt-2 mt-1">

                {alertInfo.isVisible &&
                    <Alert alertType={alertInfo.type} alertText={alertInfo.text}/>
                }

                {isLoading &&
                    <Loader/>
                }
                {fetchedPlaceInfo.name &&
                    <CityInfo placeInfo={fetchedPlaceInfo} globalTheme={globalThemeInfo}/>
                }
            </div>
        </div>
    )
}