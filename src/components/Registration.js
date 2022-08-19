import React from "react";
import '../css/registration.css'

function Registration() {
    return (
        <div className="containerRegistration">
            <div className="containerReg_img">
                <div className="containerReg_form">
                    <div className="reg_form">
                        <div className="reg_form_status">

                        </div>
                        <div className="reg_form_input">
                            <div className="reg_form_input_title"><h1>REGISTRATION</h1>
                            </div>
                            <div className="reg_form_input_columns">
                                <input className="reg_form_input_style" type="text" username="username" required />
                                <input className="reg_form_input_style" type="text" psw="psw" required />
                                <input className="reg_form_input_style" type="text" psw2="psw2" required />
                                <input className="reg_form_input_style" type="text" email="email" required />
                                <input className="reg_form_input_style" type="text" phone="phone" required />
                                <input className="reg_form_input_style" type="text" surname="surname" required />
                                <input className="reg_form_input_style" type="text" name="name" required />
                                <input className="reg_form_input_style" type="text" birthday="birthday" required />
                            </div>
                            <div className="reg_form_input_button">
                                <button className="reg_form_input_button_reg_form_input_style" type="submit" value="registraitions">GO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registration;
