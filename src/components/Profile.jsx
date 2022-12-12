import React from "react";
import "../css/main.css";
import "../css/profile.css";
import { useAuth } from "../hook/useAuth";

function Profile() {

    const { user } = useAuth();

    return (
        <div className="containerProfile">
            <div className="containerUserInfo">
                <img className="avatar" src={"http://127.0.0.1:5050/static/avatar.png"} />
                <div className="userInfo">
                    <h1>{user['username']}</h1>
                    <h3>{user['surname']}</h3>
                    <h3>{user['name']} </h3>
                    <h4>{user['birthday']}</h4>
                    <h4>{user['email']}</h4>
                    <h4>{user['phone']} </h4>
                    {console.log(user)}
                </div>
            </div>
        </div>
    )
}

export default Profile;
