import React from "react";
import { NavLink } from 'react-router-dom'

const setActive = ({ isActive }) => isActive ? 'nav_link activeLink' : 'nav_link nav_link';

function NavGuest() {
    return (
        <nav className="nav">
            <NavLink className={setActive} to="/">our blog</NavLink>
            <NavLink className={setActive} to="/null">novelties</NavLink>
            <NavLink className={setActive} to="/our_blog">About Us</NavLink>
        </nav>
    )
}

export default NavGuest
