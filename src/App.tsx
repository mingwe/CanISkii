import './App.css';
import React, {useEffect} from 'react'
import {CityInfo} from "./components/CityInfo"
import {useDispatch} from "react-redux"
import {setPlaces} from "./actions/actions"
import {useSelector} from "react-redux"
import {Loader} from "./components/Loader";
import {Sidebar} from "./components/Sidebar";
import {Copyright} from "./components/Copyright";

import {IRootState} from "./types/types";

// app dev CanISkii

function App(store: any) {

    // TS infers `isOn` is boolean
    // const isOn = useSelector(selectIsOn)

  // const [places, setPlaces] = useEffect([], [])

    const places = useSelector((state: IRootState) => state.places)
    const isLoading = useSelector((state: IRootState) => state.isLoading)
    const cityInfo = useSelector((state: IRootState) => state.city)
    const fetchedPlaceInfo = useSelector((state: IRootState) => state.fetchedPlace)
    const globalThemeInfo = useSelector((state: IRootState) => state.globalTheme)

    const dispatch = useDispatch()


    useEffect( () => {
            dispatch(setPlaces());
            // dispatch(fetchPlace());
        }, []
    )


    if (!places) {
        return (<div className="container text-center pt-5 mt-5">
            <Loader/>
        </div>)
    }


    return (
        <div
            className={`App py-5 bg-app ${globalThemeInfo.bg}`}
        >
          <div className="container pt-5 bg-white-transp rounded-lg">
              <div className="row">

                  <Sidebar places={places}/>

                  <div className="col-9 main-content">
                      {globalThemeInfo.isInit
                          ? <span>select city!!!!</span>
                          : <span>city selected.</span>
                      }
                      {isLoading
                          ? <Loader/>
                          : <CityInfo cityName={cityInfo.name} placeInfo={fetchedPlaceInfo} globalTheme={globalThemeInfo}/>
                      }
                      {/*<CityInfo cityName={cityInfo.name} placeInfo={fetchedPlaceInfo} globalTheme={globalThemeInfo}/>*/}
                  </div>
                  <Copyright/>
              </div>
          </div>
        </div>
    )
}

export default App;
