import React from "react";

const IMG_URL = process.env.REACT_APP_IMG_URL

function ProfileInfo({user, callback}) {

    const isOn = () => {callback(true)}

    return (
        <div className="containerUserInfo">
            <div className="containerUpdateProfile">
                <button className="updateProfile" onClick={isOn}>Editing</button>
            </div>
            {/* <img className="avatar" alt="Avatar" src={`${IMG_URL}${user['photo']? user['photo'] : '1234567890avatar.png'}`} /> */}
            <div className="userInfo">
                <h1>{user['username']}</h1>
                <h3>{user['surname']}</h3>
                <h3>{user['name']} </h3>
                <h4>{user['birthday']}</h4>
                <h4>{user['email']}</h4>
                <h4>{user['phone']} </h4>
            </div>
        </div>
    )


}

export default ProfileInfo
