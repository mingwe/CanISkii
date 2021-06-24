import './App.css';
import React, {useEffect} from 'react'
import {CityButton} from "./components/CityButton"
import {CityInfo} from "./components/CityInfo"
import {useDispatch} from "react-redux"
import {setPlaces} from "./actions/actions"
// import {fetchPlace} from "./fetch/fetchPlaces";
import {useSelector} from "react-redux"
import {Loader} from "./components/Loader";

// app dev CanISkii


function App(store) {

  // const [places, setPlaces] = useEffect([], [])

    const places = useSelector(state => state.places)

    const isLoading = useSelector(state => state.isLoading)

    const cityInfo = useSelector(state => state.city)

    const fetchedPlaceInfo = useSelector(state => state.fetchedPlace)

    const dispatch = useDispatch()


    useEffect( () => {
            dispatch(setPlaces());
            // dispatch(fetchPlace());
        }, []
    )


    if (isLoading || !places) {
        return (<div className="container text-center pt-5 mt-5">
            <Loader/>
        </div>)
    }


    return (
        <div className="App">
          <div className="container pt-5 mt-4">
              <div className="row">
                  <div className="sidebar sidebar-nav col-3">
                      <ul className="nav flex-column">
                          {places.map((item) =>
                              <li className="nav-item" key={item.zip}>
                                  <CityButton city={item}/>
                              </li>
                          )}
                      </ul>
                  </div>

                  <div className="col-9 main-content">
                      {/*<CityInfo city={cityInfo}/>*/}
                      <CityInfo cityName={cityInfo.name} placeInfo={fetchedPlaceInfo}/>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default App;
