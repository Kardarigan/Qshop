import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./assets/logo.png"

export default function Navbar() {
    return (
        <header>
            <nav className="navbar mx-auto px-3 mt-2 rounded-pill d-flex align-content-center">
                <NavLink to="/">
                    <img src={Logo} alt="Logo" />
                </NavLink>
                <ul className='d-sm-flex d-none justify-content-between m-0 p-0'>
                    <li><NavLink exact activeclassname="active" to="/">HOME</NavLink></li>
                    <li><NavLink exact activeclassname="active" to="/Women">WOMEN</NavLink></li>
                    <li><NavLink exact activeclassname="active" to="/Men">MEN</NavLink></li>
                    <li><NavLink exact activeclassname="active" to="/Children">KIDS</NavLink></li>
                    <li><NavLink exact activeclassname="active" to="/Children">QARA</NavLink></li>
                </ul>
                <div>
                    <NavLink to="/Cart" className="me-3">
                        <i class="fa-light fa-shopping-cart"></i>
                    </NavLink>
                    <NavLink to="/Login">
                        <i class="fa-light fa-sign-in"></i>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}
