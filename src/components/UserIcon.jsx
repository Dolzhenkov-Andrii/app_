import React from "react";

function UserIcon({username, name}){
    return (
        <div className="headerLabel userUse">
                <h3>{username}</h3>
                <div className="userAvatar">
                    <h5>{name}</h5>
                </div>
            </div>
    )
}

export default UserIcon

