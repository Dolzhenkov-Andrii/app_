import React, { useEffect, useState } from "react";
import '../css/header/header.css';
import NavUser from "./navigate/NavUser"
import UserIcon from "./UserIcon";
import { useAuth } from "../hook/useAuth";

function Header() {

    const [navIn, setNavIn] = useState(null)
    const { user } = useAuth();
    const [styleHeader, setStyleHeaders] = useState("containerGrey header")

    useEffect(() => {
        if (user) {
            setNavIn(<div className="containerMenu">
                <NavUser />
                <UserIcon name={user['name']} username={user['username']} />
            </div>)
            setStyleHeaders("containerGrey header loginHeder")
        } else {
            setStyleHeaders("containerGrey header")
            setNavIn(null)
        }
    }, [user])

    return (
        <header className={styleHeader}>
            <div className="containerYellow headerLogo">
                <h1>your logo</h1>
            </div>
            {navIn}
        </header>
    )
}

export default Header;
