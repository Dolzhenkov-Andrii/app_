import React from "react";
import '../css/registration.css'
import '../css/authorization.css'
import "../css/singin.css"
import reactivRequest from "../services/reactivUser";
import { useState } from "react";
import ModalMessage from "./ModalMessage";


const ReactivationMessage = ({ title, callback }) => {

    const [modal, setModal] = useState(null)
    const [result, setResult] = useState()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const auth_form = {
            username: form.login.value,
            password: form.password.value,
            remember_me: false
        };
        reactivRequest(auth_form).then(response => {
            if (response.data['username'] && response.data['email']) {
                let title = "Registration successfully completed"
                let message = `
                ${response.data['username']} ${response.data['email']} you have successfully registered, a confirmation email has been sent to your email ${form.email.value}, please confirm your email to complete the registration!
                `
                setModal(<ModalMessage title={title} message={message} callback={callback} />)
            }
        }).catch(error => {
            setResult(error.response.data)
        })
    }

    return (
        <div className="containerModal">
            <div className="messModal">
                {modal}
                <div className="reg_form_title">
                    <h3>{title}</h3>
                </div>
                <div className="reg_form_message">
                    <div><p>{result}</p></div>
                    <form onSubmit={handleSubmit} className="singIn singInForm">
                        <label>
                            <input
                                className="reg_form_input_style sIforms"
                                type="login"
                                name="login"
                                placeholder="Nikname" required />
                            <input
                                className="reg_form_input_style sIforms"
                                type="password"
                                name="password"
                                placeholder="Password" required />
                        </label>
                        <button className="toRegister sIforms" type="submit" value="authorization">Send a letter</button>
                    </form>
                </div>
                <button className="reg_form_input_button" onClick={callback}>EXIT</button>
            </div>
        </div>
    )
}

export default ReactivationMessage;
