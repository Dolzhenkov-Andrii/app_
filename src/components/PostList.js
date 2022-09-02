import axios from "axios";
import React, { useState } from "react";
import "../css/postList.css"
import Post from "./Post";

function PostList() {


    const [posts, setPosts] = useState()
    async function fetchPhoto(){
        const response = await axios.get('http://127.0.0.1:5050/api/posts/1')
        setPosts(Object.entries(response.data))
    }


    return (
        <div className="containerPostList" >
            <div className="titlePostList">
                <h1>ALL POST</h1>
            </div>
            <div className="postList" >
                {posts ? posts.map((post, key) =>
                    <Post post={post[1]} key={key} />
                ) : <button className="sliderStyleButton" onClick={fetchPhoto}>GET POST</button>}
            </div>
            <div className="sliderPosts">
                    <button className="sliderP sliderStyleButton">-=Left</button>
                    <div className="sliderP"><p>number list</p></div>
                    <button className="sliderP sliderStyleButton">rigth=-</button>
            </div>
        </div>
    )
}

export default PostList;
