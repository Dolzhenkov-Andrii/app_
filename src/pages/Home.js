
import React from "react";
import { NavLink, Outlet } from "react-router-dom";


function Home() {
    return (
        <div className="containerBody">
            <div className="home">
                <div className="sidebar left">
                    <NavLink to="posts" className="userMenuLink"> All posts</NavLink>
                    <button className="userMenuLink"> favorite posts</button>
                    <button className="userMenuLink"> my posts</button>
                </div>
                <div className="main">
                    <Outlet />
                </div>
                <div className="sidebar rigth">
                    <button className="userMenuLink"> Filter</button>
                    <button className="userMenuLink"> Search</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
