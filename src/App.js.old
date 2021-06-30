import './App.css';
import React, {useEffect} from 'react'
import {CityInfo} from "./components/CityInfo"
import {useDispatch} from "react-redux"
import {setPlaces} from "./actions/actions"
import {useSelector} from "react-redux"
import {Loader} from "./components/Loader";
import {Sidebar} from "./components/Sidebar";
import {Copyright} from "./components/Copyright";

// app dev CanISkii


function App(store) {

  // const [places, setPlaces] = useEffect([], [])

    const places = useSelector(state => state.places)

    const isLoading = useSelector(state => state.isLoading)

    const cityInfo = useSelector(state => state.city)

    const fetchedPlaceInfo = useSelector(state => state.fetchedPlace)

    const globalThemeInfo = useSelector(state => state.globalTheme)

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
                      {/*<CityInfo city={cityInfo}/>*/}
                      {isLoading
                          ? <Loader/>
                          : <CityInfo cityName={cityInfo.name} placeInfo={fetchedPlaceInfo} globalTheme={globalThemeInfo}/>
                      }
                  </div>
                  <Copyright/>
              </div>
          </div>
        </div>
    )
}

export default App;
