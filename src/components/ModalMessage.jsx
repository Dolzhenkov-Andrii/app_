import React from "react";
import '../css/registration.css'

const ModalMessage = ({ title, message, callback }) => {
    return (
        <div className="containerModal">
            <div className="messModal">
                <div className="reg_form_title">
                    <h3>{title}</h3>
                </div>
                <div className="reg_form_message">
                    <p>{message}</p>
                </div>
                <button className="reg_form_input_button" onClick={callback}>EXIT</button>
            </div>
        </div>
    )
}

export default ModalMessage;
