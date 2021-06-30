import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from './reducers/rootReducer'
import {IRootState} from "./types/types";


// const devtoolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const composed = compose(applyMiddleware(thunk), devtoolsEnhancer)
const composed = composeWithDevTools(applyMiddleware(thunk))

const preloadedState: IRootState = {
    places: [],
    fetchedPlace: {
        temp: "",
        name: "",
        country: '',
        weather: {
            main: '',
            description: '',
        },
        wind: {
            speed: '',
        }
    },
    city: {
        name: ''
    },
    isLoading: true,
    hasError: false,
    globalTheme: {
        bg: 'bg-init',
        isInit: true,
        isRain: false,
        isCloud: false,
        isGoodIdea: false
    }
}


const store = createStore(rootReducer, preloadedState, composed)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App store={store} />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
