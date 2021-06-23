import './App.css';
import React, {useEffect} from 'react'
import {CityButton} from "./components/CityButton"
import {CityInfo} from "./components/CityInfo"
import {useDispatch} from "react-redux"
import {setPlaces} from "./actions/actions"
import {useSelector} from "react-redux"
import {Loader} from "./components/Loader";

// app dev CanISkii


function App(store) {

  // const [places, setPlaces] = useEffect([], [])

    const places = useSelector(state => state.places)

    const cityInfo = useSelector(state => state.city)

    const dispatch = useDispatch()


    useEffect( () => {
            dispatch(setPlaces())
        }, []
    )


    if (!places) {
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
                      <CityInfo city={cityInfo}/>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default App;
