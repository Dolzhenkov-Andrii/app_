import React, { useEffect, useState } from "react";
import '../css/header/header.css';
import  logo from '../img/site/logo.png'
import NavUser from "./navigate/NavUser"
import UserIcon from "./UserIcon";
import { useAuth } from "../hook/useAuth";

function Header() {

    const [navIn, setNavIn] = useState(null)
    const { user } = useAuth();
    const [styleHeader, setStyleHeaders] = useState("containerGrey header")

    useEffect(() => {
        if (user) {
            setStyleHeaders("header userHeader")
            setNavIn(<div className="containerMenu">
                <NavUser />
                <UserIcon user={user} />
            </div>)
        } else {
            setStyleHeaders("header")
            setNavIn(null)
        }
    }, [user])

    return (
        <header className={styleHeader}>
            <div className="headerLogo">
                <img className="imgLogo" src={logo} alt="logo" />
                <h1>my Blog</h1>
            </div>
            {navIn}
        </header>
    )
}

export default Header;
