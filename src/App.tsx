import './App.css';
import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"

import {useDispatch} from "react-redux"
import {setPlaces} from "./actions/actions"
import {useSelector} from "react-redux"
import {Loader} from "./components/Loader";

import {IRootState} from "./types/types";
import {Main} from "./components/Main";
import {About} from "./components/About";
import {Navbar} from "./components/Navbar";

// app dev CanISkii


function App(store: any) {

  // const [places, setPlaces] = useEffect([], [])

    const places = useSelector((state: IRootState) => state.places)

    const globalThemeInfo = useSelector((state: IRootState) => state.globalTheme)

    const dispatch = useDispatch()

    const relpath = process.env.REACT_APP_SUBFOLDER_PATH


    useEffect( () => {
            dispatch(setPlaces());
        }, [dispatch]
    )


    if (!places) {
        return (<div className="container text-center pt-5 mt-5">
            <Loader/>
        </div>)
    }


    return (
        <div className={`App py-5 bg-app ${globalThemeInfo.bg}`}>
            <Router>
                <div className="container pt-2 pb-5 bg-white-transp rounded-lg">

                        <Navbar relpath={relpath} />

                        <Route path={relpath + "/"} exact>
                            <Main
                                globalThemeInfo={globalThemeInfo}
                                places={places}
                            />
                        </Route>

                        <Route path={relpath + "/about"} exact>
                            <About/>
                        </Route>

                </div>
            </Router>
        </div>
    )
}

export default App;
