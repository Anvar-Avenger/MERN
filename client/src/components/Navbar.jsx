import {Link, NavLink, useHistory} from "react-router-dom";
import React, {useContext} from "react";
import '../css/style.css'
import {AuthContext} from "../context/AuthContext";

const Navbar = () => {
    const auth = useContext(AuthContext)
    const history = useHistory();

    const logoutHandler = function(event) {
        auth.logout();
        history.push('/');
    }

    return (
        <nav>
            <div className="nav-wrapper blue darken-1 nav-inner">
                <Link to="/" className="brand-logo">Havolani qisqartirish</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Yaratish</NavLink></li>
                    <li><NavLink to="/links">Havolalar</NavLink></li>
                    <li><button className="link-button" onClick={logoutHandler}>Chiqish</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;