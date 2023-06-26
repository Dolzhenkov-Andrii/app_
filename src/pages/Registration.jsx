import React from "react";
import '../css/registration.css'
import '../css/style.css'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import ModalMessage from "../components/ModalMessage";
import registRequest from "../services/registrationRequest";




function Registration() {

    const [modal, setModal] = useState(null)
    const [result, setResult] = useState(null)
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    const goHome = () => navigate('/')



    const regForm = (event) => {
        event.preventDefault();
        const form = event.target;
        if (form.password.value === form.rep_password.value) {
            const reg_form = new FormData();
            reg_form.append('username', form.username.value)
            reg_form.append('password', form.password.value)
            reg_form.append('email', form.email.value)


            registRequest(reg_form).then(response => {
                if (response.data['username'] && response.data['email']) {
                    let title = "Registration successfully completed"
                    let message = `
                ${response.data['username']} you have successfully registered, a confirmation email has been sent to your email ${form.email.value}, please confirm your email to complete the registration!
                `
                    setModal(<ModalMessage title={title} message={message} callback={goHome} />)
                }
            }).catch(error => {
                setResult(error.response.data)
            })
        } else {
            setResult('Passwords do not match')
        }
    }

    return (
        <div className="registration">
            {modal}
            <div className="authbox">
                <div className="tmptmp">
                    <button className="goBack" onClick={goBack}>X</button>
                </div>
                <h1>REGISTRATION</h1>
                <div className="errorBox">
                    <p>{result}</p>
                </div>
                <form className="contBoxForm registBox" onSubmit={regForm} >
                    <input className="contInput" autoComplete="off" type="text" name="username" placeholder="Login" />
                    <input className="contInput" autoComplete="off" type="password" name="password" placeholder="Password"  />
                    <input className="contInput" autoComplete="off" type="password" name="rep_password" placeholder="Repeat password" />
                    <input className="contInput" autoComplete="off" type="email" name="email" placeholder="@email" />
                    <button className="contBoxButton" type="submit" value="registraitions">Done</button>
                </form>
            </div>
        </div>
    )
}
export default Registration;
