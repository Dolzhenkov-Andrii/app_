import React, { useState } from "react";
import "../css/postList.css"
import Post from "./Post";


// let postJson5 = {id: '5', title: 'Post #5', creation_date: '15.05.2015', text:' test text for this list', photo: 'AVATAR5'}
function PostList() {

    const [posts, setPosts] = useState([
        { id: '1', title: 'Post #1', creation_date: '11.01.2011', text: ' test text for this list', photo: 'AVATAR1', username: 'oscur1k' },
        { id: '2', title: 'Post #2', creation_date: '12.02.2012', text: ' test text for this list', photo: 'AVATAR2', username: 'Timi' },
        { id: '3', title: 'Post #3', creation_date: '13.03.2013', text: ' test text for this list', photo: 'AVATAR3', username: '2hp' },
        { id: '4', title: 'Post #4', creation_date: '14.04.2014', text: ' test text for this list', photo: 'AVATAR4', username: 'Alex' },
        { id: '3', title: 'Post #3', creation_date: '13.03.2013', text: ' test text for this list', photo: 'AVATAR3', username: '2hp' },
        { id: '4', title: 'Post #4', creation_date: '14.04.2014', text: ' test text for this list', photo: 'AVATAR4', username: 'Alex' },
    ])

    return (
        <div className="containerPostList">
            <div className="titlePostList">
                <h1>TITLE</h1>
            </div>
            <div className="postList">
                {posts.map((post) =>
                    <Post post={post} key={post.id} />
                )}
            </div>
        </div>
    )
}

export default PostList;
