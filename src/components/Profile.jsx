import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../css/profile.css";
import { useAuth } from "../hook/useAuth";
import ProfileInfo from "./ProfileInfo";
import EditingProfile from "./UpdateProfile";

const IMG_URL = process.env.REACT_APP_IMG_URL

function Profile() {
    console.log('1')
    const { user } = useAuth();
    const filePicker = useRef(null)
    const [name, setName] = useState(user.name)
    const [surname, setSurname] = useState(user.surname)
    const [phone, setPhone] = useState(user.phone)
    const [birthday, setBirthday] = useState(user.birthday)
    const [avatar, setAvatar] = useState(user.photo)

    // const [profileEditingActiv, updateEditing] = useState()

    // function isActivate(on){
    //     if (!on){
    //         updateEditing(<ProfileInfo user={user} callback={isActivate}/>)
    //     } else {
    //         updateEditing(<EditingProfile callback={isActivate} the_user={user}/>)
    //     }
    // }

    // useEffect(() => {
    //     isActivate(false)
    // }, [user])

    function handlePick() {
        filePicker.current.click();
    }

    return (
        <div className="containerProfile">
            <div className="titleProfile">
                <h1>PROFILE</h1>
            </div>
            <div className="staticUserInfo">
                <h2>{user.username}</h2>
                <h3>{user.email}</h3>
            </div>
            <div className="errorBox">
                {/* <p>{result}</p> */}
            </div>
            <form className="profFormUser" action="">
                <div className="profUserInfo">
                    <input className="contInput" autoComplete="off" type="text" name="surname" placeholder="Surname" defaultValue={user.surname} />
                    <input className="contInput" autoComplete="off" type="text" name="name" placeholder="Name" defaultValue={user.name} />
                    <input className="contInput" autoComplete="off" type="text" name="phone" placeholder="Phone" defaultValue={user.phone} />
                    <input className="contInput" autoComplete="off" type="date" name="birthday" defaultValue={user.birthday} />
                    <button className="contBoxButton" type="submit" value="registraitions">Save</button>
                </div>
                <div className="profUserAvatar">
                    <div className="resetAvatar">
                        <button className="goBack">X</button>
                    </div>
                    <img className="avatar" alt="Avatar" src={`${IMG_URL}${user.photo ? user.photo : '1234567890avatar.png'}`} />
                    <input className="hidden" autoComplete="off" type="file" name="avatar" accept="image/*, png, jpg" ref={filePicker} onChange={e => setAvatar(e.target.files[0])}/>
                    <button className="contBoxButton inputAvatar" onClick={handlePick}>Change avatar</button>
                </div>
            </form>
        </div>
    )
}

export default Profile;
