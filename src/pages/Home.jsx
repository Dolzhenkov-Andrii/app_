
import React from "react";
import "../css/main.css"
import { NavLink, Outlet } from "react-router-dom";


function Home() {
    return (
        <div className="main">
            <Outlet />
        </div>
    )
}

export default Home;
