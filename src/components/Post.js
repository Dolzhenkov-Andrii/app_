import React from "react";
import "../css/postList.css"


function Post(props) {
    return (
        <div className="containerPost">
            <div className="postTitle">
                <h2>{props.post.title}</h2>
            </div>
            <div className="postImg">
                <h1>{props.post.photo}</h1>
            </div>
            <div className="postText">
                <h3>{props.post.text}</h3>
            </div>
            <div className="postInfo">
                <h5>{props.post.username}</h5>
                <h5>{props.post.creation_date}</h5>
            </div>
        </div>
    )
}

export default Post;
