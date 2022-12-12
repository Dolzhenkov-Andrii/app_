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

            const reg_form = {
                username: form.username.value,
                password: form.password.value,
                email: form.email.value,
                phone: form.phone.value,
                surname: form.surname.value,
                name: form.name.value,
                birthday: form.birthday.value,
            };

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
            <div className="registrContainer">
                <div className="registrBox">
                    <h1>REGISTRATION</h1>
                    <div className="registrBoxError"><p>{result}</p></div>
                    <form onSubmit={regForm} className="registrBoxForm">
                        <input className="registrInput" minlength="6" maxlength="30" type="text" name="username" placeholder="Nikname" required />

                        <input className="registrInput" minlength="8" maxlength="40" type="password" name="password" placeholder="Password" autocomplete="on" required />

                        <input className="registrInput" minlength="8" maxlength="40" type="password" name="rep_password" placeholder="Repeat password" autocomplete="on" required />

                        <input className="registrInput" minlength="6" maxlength="64" type="email" name="email" placeholder="@email" required />

                        <input className="registrInput" minlength="8" maxlength="16" type="text" name="phone" placeholder="Phone +380.." required />

                        <input className="registrInput" minlength="2" maxlength="30" type="text" name="surname" placeholder="Surname" required />

                        <input className="registrInput" minlength="2" maxlength="30" type="text" name="name" placeholder="Name" required />

                        <input className="registrInput" type="date" name="birthday" placeholder="Birthday" required />
                        <div className="registrBoxButton">
                            <button className="registrButton" onClick={goBack}>Back</button>
                            <button className="registrButton" type="submit" value="registraitions">done</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Registration;

{/* <div className="containerRegistration">
            <div className="containerReg_form">
                <div className="reg_form">
                    <div className="reg_form_input">
                        <div className="reg_form_input_title"><h1>REGISTRATION</h1>
                        </div>
                        <label className="reg_form_input_columns">
                            <form className="reg_form_input_columns">
                                <input className="" minlength="6" maxlength="10" type="text" username="username" placeholder="Your nikname" required />
                                <input className="" type="password" psw="psw" placeholder="Password" required />
                                <input className="" type="password" psw2="psw2" placeholder="Repeat password" required />
                                <input className="" type="email" email="email" placeholder="Your email" required />
                                <input className="" type="text" phone="phone" placeholder="Your phone" required />
                                <input className="" type="text" surname="surname" placeholder="Your surname" required />
                                <input className="" type="text" name="name" placeholder="Your name" required />
                                <input className="" type="text" birthday="birthday" placeholder="Your birthday" required />
                            </form>
                        </label>
                        <div className="back_done">
                            <button className="reg_form_input_button" onClick={goBack}>Back</button>
                            <button className="reg_form_input_button" type="submit" value="registraitions">done</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
