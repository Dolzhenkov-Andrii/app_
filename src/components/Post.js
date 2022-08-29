import React from "react";
import "../css/postList.css"


function Post(props) {
    return (
        <div className="containerPost">
            <div className="postInfo">
                <div className="postOwner">
                    <div className="userAvatar"></div>
                    <div className="postOwnerInfo">
                        <h3>{props.post.username}</h3>
                        <h5>{props.post.creation_date}</h5>
                    </div>
                </div>
                <button className="">sign</button>
            </div>
            <div className="postContent">
                <div className="postTitle">
                    <h2>{props.post.title}</h2>
                </div>
                <div className="postImg">
                    <h1>{props.post.photo}</h1>
                </div>
                <div className="postText">
                    <h3>{props.post.text}</h3>
                </div>
                <div className="hashtags">
                    <a className="herfHashtags">#tag1</a>
                    <a className="herfHashtags">#tag3</a>
                    <a className="herfHashtags">#tag2</a>
                </div>
            </div>
            <div className="socialMediaPost">
                <button className="socialMedia">views 10</button>
                <button className="socialMedia">comments 10</button>
                <button className="socialMedia">like 10</button>
            </div>
        </div>
    )
}

export default Post;
