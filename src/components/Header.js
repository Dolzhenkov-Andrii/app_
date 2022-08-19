import React from "react";
import '../css/header/header.css';

function Header() {
    return (
        <header className="containerHeader">
            <div className="header">
                <nav className="nav">
                    <a className="nav_link" href="/">home</a>
                    <a className="nav_link" href="###">search</a>
                    <a className="nav_link" href="/our_blog">our blog</a>
                </nav>
                <div className="headerLabel">
                    <h1>Y</h1><h2>our</h2>
                    <h1>T</h1><h2>ravel</h2>
                    <h1>W</h1><h2>world</h2>
                </div>
            </div>
        </header>
    )
}

export default Header;
