import React from "react";
import '../css/registration.css'
import { useNavigate } from 'react-router-dom'

function Registration() {

    const navigate = useNavigate();
    const goBack = () => navigate(-1)

    return (
        <div className="containerRegistration">
            {/* <div className="containerReg_img">
                <div className="containerReg_img_slise"></div>
            </div> */}
            <div className="containerReg_form">
                <div className="reg_form">
                    <div className="reg_form_input">
                        <div className="reg_form_input_title"><h1>REGISTRATION</h1>
                        </div>
                        <div className="reg_form_input_columns">
                            <input className="reg_form_input_style" minlength="6" maxlength="10" type="text" username="username" placeholder="Your nikname" required />
                            <input className="reg_form_input_style" type="password" psw="psw" placeholder="password" required />
                            <input className="reg_form_input_style" type="password" psw2="psw2" placeholder="password2" required />
                            <input className="reg_form_input_style" type="email" email="email" placeholder="Your email" required />
                            <input className="reg_form_input_style" type="text" phone="phone" placeholder="Your phone" required />
                            <input className="reg_form_input_style" type="text" surname="surname" placeholder="Your surname" required />
                            <input className="reg_form_input_style" type="text" name="name" placeholder="Your name" required />
                            <input className="reg_form_input_style" type="text" birthday="birthday" placeholder="Your birthday" required />
                        </div>
                        <div className="back_done">
                            <button className="reg_form_input_button" onClick={goBack}>Back</button>
                            <button className="reg_form_input_button" type="submit" value="registraitions">done</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registration;
