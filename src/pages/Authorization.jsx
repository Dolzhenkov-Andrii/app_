import React, { useState } from "react";
import '../css/authorization.css'
import SetCookie from "../components/cookies/setCookie"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from "../hook/useAuth";
import authRequest from "../services/authRequest ";

function Authorization() {



    const navigate = useNavigate();
    const location = useLocation();
    const { signIn } = useAuth();
    const [login, setLogin] = useState("Nikname")
    const [pass, setPassword] = useState("Password")
    const [remember, setRemember] = useState(false)
    const [result, setResult] = useState()

    const fromPage = location.state?.from?.pathname || '/';


    const remember_check_box = ({ target: { checked } }) => {
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
                signIn(response.data.user, () => navigate(fromPage, { replace: true }))
            }
        }).catch(error => {
            setResult(error.response.data)
        })
    }

    return (
        <div className="containerDark authorization">
            <div className="containerYellow authbox">
                <div className="authBoxContent">
                    <div className="authBoxTitle">
                        <h1>Sign In</h1>
                        <Link to="/regist">
                            <button className="contBoxButton" >Register</button>
                        </Link>
                    </div>
                    <div className="contBoxError"><h2>{result}</h2></div>
                    <form className="contBoxForm" onSubmit={handleSubmit}>
                        <input
                            className="contInput"
                            onChange={e => setLogin(e.target.value)}
                            type="login"
                            name="login"
                            placeholder={login} required />
                        <input
                            className="contInput"
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            placeholder={pass} required />
                        <button className="contBoxButton" type="submit" value="authorization">Get started</button>
                    </form>
                    <div className="authBoxFooter">
                        <div className="authFooterInput">
                            <input type="checkbox"
                                onChange={remember_check_box}
                                defaultChecked={false} />
                            <p className="authFooterInputText">Remember me</p>
                        </div>
                        <div>
                            <Link className="authFooterInputText" to="/null">Lost your password?</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containerDark imgbox2"><h2>Share</h2></div>
            <div className="containerGreen imgbox1"><h2>Create</h2></div>
            <div className="containerGrey imgbox3"><h2>Watch</h2></div>
        </div>
    )
}

export default Authorization;



