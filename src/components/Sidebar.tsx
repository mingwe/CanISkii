import {CityButton} from "./CityButton";
import React, {FC} from "react";
import {Loader} from "./Loader";


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
            <Loader/>
        )

    return (
        <div className="sidebar sidebar-nav bg-gray">
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
