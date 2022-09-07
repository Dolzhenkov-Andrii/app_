
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/postList.css"
import Pagination from "./Pagination";
import PostListPage from "./PostListPage";



function PostList() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentList, setCarentList] = useState(1)
    const [sizeList] = useState(6)

    useEffect(() => {
        const getPosts = async () => {
            setLoading(true)
            const response = await axios.get('http://127.0.0.1:5050/api/posts/1')
            setPosts(Object.entries(response.data))
            setLoading(false)
        }

        getPosts()
    }, [])

    const lastIndex = currentList * sizeList
    const firstIndex = lastIndex - sizeList
    const currentPosts = posts.slice(firstIndex, lastIndex)

    const paigeNumberList = (pageNumber) => {
        setCarentList(pageNumber)
    }

    const prevList = () => {
        if (currentList > 1) {
            setCarentList(prev => prev - 1)
        }
    }
    const nextList = () => {
        if (currentList < Math.ceil(posts.length / sizeList)) {
            setCarentList(prev => prev + 1)
        }
    }

    return (
        <div className="containerPostList" >
            <div className="titlePostList">
                <h1>ALL POST</h1>
            </div>
            <div className="sliderPosts">
                <button className="sliderP sliderStyleButton" onClick={prevList}>-=Prev</button>
                <Pagination
                    sizeList={sizeList}
                    allList={posts.length}
                    paigeNumberList={paigeNumberList} />
                <button className="sliderP sliderStyleButton" onClick={nextList}>Next=-</button>
            </div>
            <PostListPage posts={currentPosts} loading={loading} />
        </div>
    )
}

export default PostList;
