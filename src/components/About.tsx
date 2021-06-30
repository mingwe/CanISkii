import React from 'react'
import {Copyright} from "./Copyright"

export const About = () => {
    return (
        <div className="px-5">
            <p className="display-4 mb-4">Its all about weather app</p>
            <div className="bg-white rounded-lg pt-5 pb-4">
                <p>Initiatly planned to be skiing weather check app.</p>
                <p>But on dev stage i havent found open API that can check weather on ukrainian popular ski resorts.</p>
                <p>Maybe ill do separate modes [summer/winter] in feature releases.</p>
                <p>Now it has few summer resort (and not) cities.</p>
                {/*<p>App fetch data from openweathermap API</p>*/}
                <Copyright/>
            </div>
        </div>
    )
}