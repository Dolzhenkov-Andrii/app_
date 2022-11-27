import React from "react";
// import '../../css/header/header.css';
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from "../../hook/useAuth";
import RemoveCookie from "../cookies/removeCookie";


function NavUser(){

    const {signOut} = useAuth();
    const navigate = useNavigate();
    function logOut() {
        RemoveCookie('access_token')
        RemoveCookie('refresh_token')
        RemoveCookie('user')
        signOut(() => navigate('/', {replace: true}))
    }

    return (
        <nav className="nav">
            <NavLink className="nav_link" to="/">home</NavLink>
            <NavLink className="nav_link" to="/posts">novelties</NavLink>
            <NavLink className="nav_link" to="/null2">new post</NavLink>
            <NavLink className="nav_link" to="/null3">message</NavLink>
            <NavLink className="nav_link" to="/login" onClick={logOut}>LogOut</NavLink>
            {/* profile */}
        </nav>
    )
}

export default NavUser
