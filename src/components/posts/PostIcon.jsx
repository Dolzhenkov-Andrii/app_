import React from "react";
const IMG_URL = process.env.REACT_APP_IMG_URL

function PostIcon({post}) {
    return (
        <div className="contPost">
            <img className="postImgMini" src={`${IMG_URL}${post.photos[0].photo}`}  width={660}/>
            {/* <img className="postImgMini" src={post.photos[0].photo} width={660}/> */}
            <h2>{post.user.username}</h2>
            <h4>{post.title}</h4>
            <p>{post.text}</p>
        </div>
    )
}

export default PostIcon;
