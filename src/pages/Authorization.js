import React, { useState } from "react";
import '../css/authorization.css'
import "../css/singin.css"
import axios from "axios";
import SetCookie from "../components/cookies/setCookie"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from "../hook/useAuth";
const API_URL = process.env.REACT_APP_API_URL


function Authorization() {
    // const [login, setLogin] = useState("Nikname")
    // const [pass, setPassword] = useState("Password")
    const [login, setLogin] = useState('oscurik')
    const [pass, setPassword] = useState('0123456789')
    const [result, setResult] = useState()
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = {
            username: form.login.value,
            password: form.password.value
        };

        axios.post(API_URL+'authorization', user)
            .then(response => {
                console.log(response)
                console.log(response.data)
                if (response.data['user']) {
                    SetCookie('access_token', response.data.access_token)
                    SetCookie('refresh_token', response.data.refresh_token)
                    SetCookie('user', JSON.stringify(response.data.user))
                    setResult(response.data.user.username)
                    signIn(response.data.user, () => navigate(fromPage, {replace: true}))
                }
            })
            .catch(error => {
                setResult(error.response.data)
                console.log(error)
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
                            <input className="input_checkbox" type="checkbox" rem="remember" required />
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
