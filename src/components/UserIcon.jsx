import React from "react";

function UserIcon({ username, name }) {
    return (
        <div className="headerLabel userUse">
            <div>
            <h3>{username}</h3>
            <h5>{name}</h5>
            </div>
            <img className="avatarMini" src={"http://127.0.0.1:5050/static/avatar.png"} />
        </div>
    )
}

export default UserIcon

