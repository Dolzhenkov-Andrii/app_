import React from 'react'
import Posts from "../../services/postsRequest";
import {useState} from 'react';

const NewPost = () => {

    const [photo, setPhoto] = useState(null)

    const setNewPost = (event) => {
        event.preventDefault();
        const postForm = new FormData();
        postForm.append('title', event.target.title.value)
        postForm.append('text', event.target.the_text.value)
        postForm.append('file', photo)

        Posts.setPost(postForm).then(response => {
            console.log(response.data)

        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='containerPosts'>
            <h1>The new Post</h1>
            <form className='editingData' onSubmit={setNewPost} formEncType="multipart/form-data">
                <input className="registrInput" type="text" name="title" placeholder='Title for your post'/>
                <input className="registrInput" type='text' name="the_text" placeholder="Text your post" />
                <input className="registrInput" name="photo" type="file" accept="image/*, png, jpg" onChange={e => setPhoto(e.target.files[0])}/>
                <button className='butSave' type="submit">Save</button>
            </form>
        </div>
    )

}

export default NewPost
