import React, { useEffect, useState } from "react";
import '../css/header/header.css';
import NavGuest from "./navigate/NavGuest";
import NavUser from "./navigate/NavUser"
import UserIcon from "./UserIcon";
import { useAuth } from "../hook/useAuth";

function Header() {

    const [navIn, setNavIn] = useState()
    const [userInfo, setUserInfo] = useState(null)
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            setUserInfo((<UserIcon name={user['name']} username={user['username']} />))
            setNavIn(<NavUser />)
        } else {
            setUserInfo(null)
            setNavIn(null)
        }
    }, [user])

    return (
        <header className="containerGrey header">
            <div className="containerYellow headerLogo">
                <h1>your logo</h1>
            </div>
                {navIn}
                {userInfo}
        </header>
    )
}

export default Header;
