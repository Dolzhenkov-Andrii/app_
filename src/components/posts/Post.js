import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Post() {
    const {id} = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1)

    return (
        <div className="postPage" >
            <img src={'https://images.unsplash.com/photo-1544739313-3ba2f4c37e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} alt='error' height={520} />
            <div>
                <hi>POST {id}</hi>
                <p>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
                <button onClick={goBack}>Back</button>
            </div>
        </div>
    )
}

export default Post
