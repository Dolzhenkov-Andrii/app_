import React from "react";
import "../css/singin.css"



function Singin() {
    return (
        <div className="containerSingIn">
            <div className="singIn sItitle">
                <h1 className="title">Sign In </h1>
                <button className="toRegister">Register</button>
            </div>
            <div className="singIn singInForm">
                <input className="reg_form_input_style sIforms" type="text" login="login" defaultValue="Nikname or email" required />
                <input className="reg_form_input_style sIforms" type="text" password="password" defaultValue="Password" required />
                <button className="toRegister sIforms">Get started</button>
            </div>
            <div className="singIn sIoptionalMenu">
                <div className="sIoptionalMenu">
                    <input className="input_checkbox" type="checkbox" rem="remember" required />
                    <p className="singInText">Remember me</p>
                </div>
                <div>
                    <a href="###" className="singInText sIhref">Lost your password?</a>
                </div>
            </div>
        </div>
    )
}

export default Singin;
