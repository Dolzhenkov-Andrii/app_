import React, { useState } from "react";
import '../../css/header/header.css';
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth} from "../../hook/useAuth";
import RemoveCookie from "../cookies/removeCookie";


function NavUser(){
    const activeStyle = {
        home: "nav_link",
        posts: "nav_link",
        new_post: "nav_link",
    }
    const [styleLink, setStyle] = useState({
        home: "nav_link nav_link_activ",
        posts: "nav_link",
        new_post: "nav_link",
    })
    const {signOut} = useAuth();
    const navigate = useNavigate();
    function logOut() {
        RemoveCookie('access_token')
        RemoveCookie('refresh_token')
        RemoveCookie('user')
        signOut(() => navigate('/', {replace: true}))
    }

    function activetStyle (link) {
        activeStyle[link] = "nav_link nav_link_activ"
        setStyle(activeStyle)
    }


    return (
        <nav className="nav">
            <NavLink className={styleLink["home"]} to="/" onClick={()=> {activetStyle("home")}}>home</NavLink>
            <NavLink className={styleLink["posts"]} to="/posts" onClick={()=> {activetStyle("posts")}}>novelties</NavLink>
            <NavLink className={styleLink["new_post"]} to="/new-post" onClick={() => {activetStyle("new_post")}}>new post</NavLink>
            <NavLink className="nav_link" to="/login" onClick={logOut}>LogOut</NavLink>
        </nav>
    )
}

export default NavUser
