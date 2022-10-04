import React, { useState } from "react";
import '../css/authorization.css'
import "../css/singin.css"
import SetCookie from "../components/cookies/setCookie"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from "../hook/useAuth";
import authRequest from "../services/authRequest ";


function Authorization() {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth();
    const [login, setLogin] = useState("Nikname")
    const [pass, setPassword] = useState("Password")
    const [remember, setRemember] = useState(false)
    const [result, setResult] = useState()

    const fromPage = location.state?.from?.pathname || '/';

    const remember_check_box = ({target: {checked}}) => {
        setRemember(checked)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const auth_form = {
            username: form.login.value,
            password: form.password.value,
            remember_me: remember
        };

        authRequest(auth_form).then(response => {
            if (response.data['user']) {
                SetCookie('access_token', response.data.access_token)
                SetCookie('refresh_token', response.data.refresh_token)
                SetCookie('user', JSON.stringify(response.data.user))
                signIn(response.data.user, () => navigate(fromPage, {replace: true}))
            }
        }).catch(error => {
            setResult(error.response.data)
        })
    }

    return (
        <div className="containerAuthorization">
            <div className="authorizationContent">
                <div className="containerSingIn">
                    <div className="singIn sItitle">
                        <h1 className="title">Sign In </h1>
                        <Link to="/regist">
                            <button className="toRegister">Register</button>
                        </Link>
                    </div>
                    <div><p>{result}</p></div>
                    <form onSubmit={handleSubmit} className="singIn singInForm">
                        <label>
                            <input
                                className="reg_form_input_style sIforms"
                                onChange={e => setLogin(e.target.value)}
                                type="login"
                                name="login"
                                placeholder={login} required />
                            <input
                                className="reg_form_input_style sIforms"
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                placeholder={pass} required />
                        </label>
                        <button className="toRegister sIforms"  type="submit" value="authorization">Get started</button>
                    </form>
                    <div className="singIn sIoptionalMenu">
                        <div className="sIoptionalMenu">
                            <input className="input_checkbox" type="checkbox"
                            onChange={remember_check_box}
                            defaultChecked={false} />
                            <p className="singInText">Remember me</p>
                        </div>
                        <div>
                            <Link to="/null" className="singInText sIhref">Lost your password?</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="authorizationImg"></div>
        </div>
    )
}

export default Authorization;
