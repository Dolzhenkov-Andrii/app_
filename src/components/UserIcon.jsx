import React from "react";
const IMG_URL = process.env.REACT_APP_IMG_URL
function UserIcon({user}) {
    return (
        <div className="headerUserInfo">
            <div>
            <h2>{user['username']}</h2>
            </div>
            {/* <img className="avatarMini" src={`${IMG_URL}${user['photo']? user['photo'] : '1234567890avatar.png'}`} /> */}
        </div>
    )
}

export default UserIcon

