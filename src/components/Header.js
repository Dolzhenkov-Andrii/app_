import React, { useEffect, useState } from "react";
import '../css/header/header.css';
import NavGuest from "./navigate/NavGuest";
import NavUser from "./navigate/NavUser"
import UserIcon from "./UserIcon";
import { useAuth } from "../hook/useAuth";

function Header() {

    const [navIn, setNavIn] = useState()
    const [userInfo, setUserInfo] = useState(null)
    const {user} = useAuth();

    useEffect(()=>{
        if(user){
            setUserInfo((<UserIcon name={user['name']} username={user['username']}/>))
            setNavIn(<NavUser />)
        } else {
            setNavIn(null)
        }
    }, [user])

    return (
        <header className="containerHeader">
            <div className="header">
                <div className="headerLabel">
                    <h1>Y</h1><h2>our</h2>
                    <h1>B</h1><h2>log</h2>
                </div>
                {navIn}
                {userInfo}
            </div>
        </header>
    )
}

export default Header;
