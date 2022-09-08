import React from "react";
import '../css/header/header.css';


function Header(props) {
    return (
        <header className="containerHeader">
            <div className="header">
                <div className="headerLabel">
                    <h1>Y</h1><h2>our</h2>
                    <h1>B</h1><h2>log</h2>
                </div>
                {/* <nav className="nav">
                    <a className="nav_link" href="/">our blog</a>
                    <a className="nav_link" href="###">novelties</a>
                    <a className="nav_link" href="/our_blog">About Us</a>
                </nav> */}
                <nav className="nav">
                    <a className="nav_link" href="/home">home</a>
                    <a className="nav_link" href="/null">novelties</a>
                    <a className="nav_link" href="/null">new post</a>
                    <a className="nav_link" href="/null">message</a>
                    <a className="nav_link" href="/null">profile</a>
                </nav>
                <div className="headerLabel userUse">
                    <h3>{props.user.username}</h3>
                    <div className="userAvatar">
                        <h5>{props.user.avatar}</h5>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
