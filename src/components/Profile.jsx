import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../css/main.css";
import "../css/profile.css";
import { useAuth } from "../hook/useAuth";
import ProfileInfo from "./ProfileInfo";
import EditingProfile from "./UpdateProfile";



function Profile() {

    const { user } = useAuth();
    const [profileEditingActiv, updateEditing] = useState()

    function isActivate(on){
        if (!on){
            updateEditing(<ProfileInfo user={user} callback={isActivate}/>)
        } else {
            updateEditing(<EditingProfile callback={isActivate} the_user={user}/>)
        }
    }

    useEffect(() => {
        isActivate(false)
    }, [user])

    return (
        <div className="containerProfile">
            {profileEditingActiv}
        </div>
    )
}

export default Profile;
