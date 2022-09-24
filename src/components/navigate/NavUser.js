import React from "react";
import SetCookie from "../cookies/setCookie";
import GetCookie from "../cookies/getCookie";
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from "../../hook/useAuth";

function NavUser(){

    const {signOut} = useAuth();
    const navigate = useNavigate();
    function logOut() {
        SetCookie('access_token', null)
        SetCookie('refresh_token', null)
        SetCookie('user', null)
        signOut(GetCookie('user'),() => navigate('/', {replace: true}))
    }

    return (
        <nav className="nav">
            <NavLink className="nav_link" to="/">home</NavLink>
            <NavLink className="nav_link" to="/null1">novelties</NavLink>
            <NavLink className="nav_link" to="/null2">new post</NavLink>
            <NavLink className="nav_link" to="/null3">message</NavLink>
            <NavLink className="nav_link" to="/login" onClick={logOut}>LogOut</NavLink>
            {/* profile */}
        </nav>
    )
}

export default NavUser
