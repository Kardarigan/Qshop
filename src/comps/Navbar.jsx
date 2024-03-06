import { NavLink } from "react-router-dom";
import Logo from "./assets/logo.png"

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <NavLink to="/">
                    <img src={Logo} alt="Logo" />
                </NavLink>
                <ul className='d-md-flex d-none justify-content-between m-0'>
                    <li><NavLink exact activeclassname="active" to="/News">Women</NavLink></li>
                    <li><NavLink exact activeclassname="active" to="/Videos">Men</NavLink></li>
                    <li><NavLink exact activeclassname="active" to="/Blog">Children</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
