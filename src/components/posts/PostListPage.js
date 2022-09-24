import React from 'react'
import PostIcon from "./PostIcon";
function PostListPage({ posts, loading }) {

    if (loading) {
        return (
            <h2>LOADING...</h2>
        )
    }

    return (
        <div className="postList" >
            {posts.map((post) =>
                <PostIcon post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostListPage
