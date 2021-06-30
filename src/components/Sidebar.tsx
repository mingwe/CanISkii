import {CityButton} from "./CityButton";
import React, {FC} from "react";


interface SidebarProps {
    places: Array<{
        id: string
        name: string
    }>
}


export const Sidebar: FC<SidebarProps> = (props) => {

    const places = props.places

    if (!places)
        return (
            <div>loading...</div>
        )

    return (
        <div className="sidebar sidebar-nav col-3 bg-gray">
            <p className="h4">Select location:</p>
            <ul className="nav flex-column">
                {places.map((item) =>
                    <li className="nav-item" key={item.id}>
                        <CityButton city={item}/>
                    </li>
                )}
            </ul>
        </div>
    )
}