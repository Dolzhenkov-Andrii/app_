import React from "react";
import "../css/main.css";
import "../css/profile.css";
import { useAuth } from "../hook/useAuth";

function Profile() {

    const { user } = useAuth();

    return (
        <div className="containerGrey containerProfile">
            <div className="userInfo">
                <div className="boxOne">
                <h2> {user['username']}</h2>
                <h4> {user['surname']}</h4>
                <h4> {user['name']} </h4>
                </div>

                <div className="boxTwo">
                <p>{user['birthday']}</p>
                <p>{user['email']}</p>
                <p> {user['phone']} </p>
                </div>

            </div>
        </div>
    )
}

export default Profile;
