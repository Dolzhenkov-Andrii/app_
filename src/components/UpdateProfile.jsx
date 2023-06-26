import React from "react";
import { useState } from "react";
import { useAuth } from "../hook/useAuth";
import updateUser from "../services/updateUser";
import UpdateCookie from "./cookies/updateCookie";
import GetCookie from "./cookies/getCookie";


const IMG_URL = process.env.REACT_APP_IMG_URL

function EditingProfile({callback, the_user}) {

    const isOff = () => {callback(false)}
    const { signIn } = useAuth();
    const [name, setName] = useState(the_user['name'])
    const [surname, setSurname] = useState(the_user['surname'])
    const [phone, setPhone] = useState(the_user['phone'])
    const [birthday, setBirthday] = useState(the_user['birthday'])
    const [avatar, setAvatar] = useState(the_user['photo'])

    const  updateUserInfo = (event) => {
        event.preventDefault();

        const userForm = new FormData();
        userForm.append('name', !name? '' : name);
        userForm.append('surname', !surname? '' : surname);
        userForm.append('birthday', !birthday? '' : birthday);
        userForm.append('phone', !phone? '' : phone)
        userForm.append('file', avatar);
        updateUser(userForm).then(response => {
            if (response.data['user']) {
                console.log(response.data['user'])
                UpdateCookie('user', JSON.stringify(response.data.user))
                signIn(JSON.parse(GetCookie('user')), isOff)
            }
        }).catch(error => {
            console.log(error)
        })
    }


    return (
        <form className="editingProfile" onSubmit={updateUserInfo} formEncType="multipart/form-data">
            <div className="editingAvatar">
                <div className="containerUpdateProfile">
                    <button className="butExit updateProfile" onClick={isOff}>x</button>
                </div>
                <img className="avatar" alt="Avatar" src={`${IMG_URL}${the_user['photo']? the_user['photo'] : '1234567890avatar.png'}`} />
                <input className="registrInput" name="avatar" type="file" accept="image/*, png, jpg" onChange={e => setAvatar(e.target.files[0])}/>
            </div>
            <div className="editingData" >
                <h4>{the_user['username']}</h4>
                <input className="registrInput" type="text" name="surname" placeholder="Surname" value={surname} onChange={e => setSurname(e.target.value)}/>
                <input className="registrInput" type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                <input className="registrInput" type="date" name="birthday" value={birthday} onChange={e => setBirthday(e.target.value)}/>
                <h4>{the_user['email']}</h4>
                <input className="registrInput" type="text" name="phone" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)}/>
                <button className="butSave" type="submit">Save</button>
            </div>
        </form>
    )

}

export default EditingProfile;
