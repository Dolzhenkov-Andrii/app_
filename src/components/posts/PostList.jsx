
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../css/posts.css";
import GetCookie from "../cookies/getCookie";
import Pagination from "./Pagination";
import PostListPage from "./PostListPage";
import SetCookie from "../cookies/setCookie";
import RemoveCookie from "../cookies/removeCookie";
import Posts from "../../services/postsRequest";
// const API_URL = process.env.API_URL


function PostList() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentList, setCarentList] = useState(1)
    const [sizeList] = useState(6)

    useEffect(() => {

        const getPosts = () => {
            setLoading(true)
            Posts.getPosts(0, 20).then(response => {
                console.log(response)
                setPosts(response.data['posts'])
                setLoading(false)
            }).catch(err => {
                console.log(err)
            })
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
        <div className="containerGrey contPosts" >
            <div className="postsTitle">
                <h1>ALL POST</h1>
            </div>
            <PostListPage posts={currentPosts} loading={loading} />
            <div className="sliderPosts">
                <button className="nav_link" onClick={prevList}>- = Prev</button>
                <Pagination
                    sizeList={sizeList}
                    allList={posts.length}
                    paigeNumberList={paigeNumberList} />
                <button className="nav_link" onClick={nextList}>Next = -</button>
            </div>
        </div>
    )
}

export default PostList;
