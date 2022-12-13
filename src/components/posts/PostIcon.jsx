import React from "react";

function PostIcon({post}) {
    console.log(post)
    return (
        <div className="containerDark contPost">
            <img className="postImgMini" src={post.photos[0].photo} />
            <h2>{post.user.username}</h2>
            <h4>{post.title}</h4>
            <p>{post.text}</p>
        </div>
    )
}

export default PostIcon;
