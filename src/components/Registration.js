import React from "react";
import '../css/registration.css'
function Registration() {
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
                            <input className="reg_form_input_style" minlength="6" maxlength="10" type="text" username="username" defaultValue="Your nikname" required />
                            <input className="reg_form_input_style" type="password" psw="psw" defaultValue="password" required />
                            <input className="reg_form_input_style" type="password" psw2="psw2" defaultValue="password2" required />
                            <input className="reg_form_input_style" type="email" email="email" defaultValue="Your email" required />
                            <input className="reg_form_input_style" type="text" phone="phone" defaultValue="Your phone" required />
                            <input className="reg_form_input_style" type="text" surname="surname" defaultValue="Your surname" required />
                            <input className="reg_form_input_style" type="text" name="name" defaultValue="Your name" required />
                            <input className="reg_form_input_style" type="text" birthday="birthday" defaultValue="Your birthday" required />
                        </div>
                        <button className="reg_form_input_button" type="submit" value="registraitions">done</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registration;
