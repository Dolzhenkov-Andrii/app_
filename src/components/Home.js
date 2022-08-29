import React from "react";
import PostList from "./PostList";
import Singin from "./Singin";


function Home() {

    return (
        <body className="containerBody">
            <div className="home">
                {/* <div className="sidebar">
                    <div className="userInfo">
                        <div className="niknameProfileSeting">
                            <div className="nikName">
                                <h2>oscur1k</h2>
                            </div>
                            <div className="profileSeting">
                                <button>seting</button>
                            </div>
                        </div>
                        <div className="uInfo">
                            <div className="avatarHome">
                                <div className="avatar"/>
                            </div>
                            <div className="informHome">
                                <div className="userName">
                                    <h3>Dolzhenkov</h3>
                                    <h3>Andrii</h3>
                                    <h4>11.04.1993</h4>
                                </div>
                            </div>
                        </div>
                        <div className="socialInfo">
                            <div className="totalPosts">
                                <h4>All posts: 5</h4>
                            </div>
                        </div>
                    </div>
                    <div className="homeNav">
                        <nav className="userMenu">
                            <button className="use"> Post</button>
                            <button className="userMenuLink"> link 2</button>
                            <button className="userMenuLink"> link 3</button>
                            <button className="userMenuLink"> link 4</button>
                        </nav>
                        <div className="linkOptions">

                        </div>
                    </div>
                </div> */}
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
