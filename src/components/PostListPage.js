import React from 'react'
import Post from "./Post";
function PostListPage({ posts, loading }) {

    if (loading) {
        return (
            <h2>LOADING...</h2>
        )
    }

    return (
        <div className="postList" >
            {posts.map((post, key) =>
                <Post post={post[1]} key={key} />
            )}
        </div>
    )
}

export default PostListPage
