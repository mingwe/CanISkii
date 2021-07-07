import React, {FC} from 'react'
import {NavLink} from "react-router-dom";

interface NavbarProps {
    relpath: string | undefined
}

export const Navbar: FC<NavbarProps> = (props) => {


    const relpath = props.relpath

    return (
        <nav className="mb-5 mt-3 navbar navbar-expand-lg navbar-light rounded-lg">
            <ul className="nav-tabs nav navbar-nav w-100 d-flex justify-content-center">
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className="nav-link" to={relpath + "/"}>Main</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to={relpath + "/about"}>About</NavLink>
                </li>
            </ul>
        </nav>
    )
}