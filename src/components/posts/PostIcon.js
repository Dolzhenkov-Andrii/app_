import React, { useState } from "react";
import { Link } from "react-router-dom";


function PostIcon(props) {
    // console.log(props.post)
    const [routePostNamber] = useState(`post/${props.post.id}`)
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
                    {/* <img src={require('../../img/post_img/bimg_2.png')} alt='error' height={420} /> */}
                    <img src={'https://images.unsplash.com/photo-1544739313-3ba2f4c37e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} alt='error' height={420} />
                    {/* <h1>{props.post.photo}</h1> */}
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
                <button className="socialMedia"><Link to={routePostNamber}>Look Post</Link></button>
                {/* <Link to=''> */}
                <button className="socialMedia">comments 10</button>
                {/* </Link> */}
                <button className="socialMedia">like 10</button>
            </div>
        </div>
    )
}

export default PostIcon;
