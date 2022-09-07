
import React, {useEffect, useState} from "react";
import PostList from "./PostList";


function Home() {

    return (
        <body className="containerBody">
            <div className="home">
                <div className="sidebar left">
                    <button className="userMenuLink"> All posts</button>
                    <button className="userMenuLink"> favorite posts</button>
                    <button className="userMenuLink"> my posts</button>
                </div>
                <div className="main">
                    <PostList />
                </div>
                <div className="sidebar rigth">
                    <button className="userMenuLink"> Filter</button>
                    <button className="userMenuLink"> Search</button>
                </div>
            </div>
        </body>
    )
}

export default Home;
