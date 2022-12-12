import React from "react";

function PostIcon({post}) {
    return (
        <div className="containerDark contPost">
            <h2>{post.user.username}</h2>
            <h4>{post.title}</h4>
            <p>{post.text}</p>
        </div>
    )
}

export default PostIcon;
