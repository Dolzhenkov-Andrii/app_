
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../css/postList.css"
import GetCookie from "../cookies/getCookie";
import Pagination from "./Pagination";
import PostListPage from "./PostListPage";
import SetCookie from "../cookies/setCookie";
// const API_URL = process.env.API_URL


function PostList() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentList, setCarentList] = useState(1)
    const [sizeList] = useState(6)

    useEffect(() => {
        const getTokin = async () => {
            await axios.get('http://127.0.0.1:5050/api/refresh_token', {headers:{refresh_token: GetCookie('refresh_token')}}).then(response => {
                console.log("Finaly = GOOD!!!")
                console.log("get_1 = response: ",response.data)
                SetCookie('access_token', response.data.access_token)
                SetCookie('refresh_token', response.data.refresh_token)
                getPosts()
            }).catch(err => {
                console.log(err)
            })
        }
        const getPosts = async () => {
            setLoading(true)
            console.log(GetCookie('refresh_token'))
            console.log(GetCookie('access_token'))
            await axios.get('http://127.0.0.1:5050/api/posts/1', {headers:{access_token: GetCookie('access_token')}}).then(response => {
                console.log("Finaly = GOOD!!!")
                setPosts(response.data['posts'])
                console.log("get_1 = response: ",response.data)
                setLoading(false)
            }).catch(err => {
                console.log(`Finaly = ${err} 1!!!`)
                getTokin()
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
