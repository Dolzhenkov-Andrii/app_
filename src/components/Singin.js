import React, { useState } from "react";
import "../css/singin.css"
import axios from "axios";
import Home from "./Home";


function Singin() {
    // const [login, setLogin] = useState("Nikname or email")
    // const [pass, setPassword] = useState("Password")
    const [login, setLogin] = useState()
    const [pass, setPassword] = useState()
    const [result, setResult] = useState(null)


    const authorizationFORM = (e) => {
        e.preventDefault()
        let autFORM = {
            login:`${login}`,
            password:`${[pass]}`,
        }
        axios.post('http://127.0.0.1:5050/api/authorization', autFORM)
        .then(response => {
            console.log(response)
            console.log(response.data['1'])
            if(response.data['1']!='NO'){
                console.log(response.data)
            }

        })
        .catch(error => {
            console.log(error)
        })
    }



    return (

        <div className="containerSingIn">
            {result}
            <div className="singIn sItitle">
                <h1 className="title">Sign In </h1>
                <a href="/regist">
                <button  className="toRegister">Register</button>
                </a>
            </div>
            <div className="singIn singInForm">
                <form>
                    <input
                        className="reg_form_input_style sIforms"
                        onChange={e => setLogin(e.target.value)}
                        type="text"
                        login="login"
                        defaultValue={login} required />
                    <input
                        className="reg_form_input_style sIforms"
                        onChange={e => setPassword(e.target.value)}
                        type="text"
                        password="password"
                        defaultValue={pass} required />
                    <button className="toRegister sIforms" onClick={authorizationFORM}>Get started</button>
                </form>
            </div>
            <div className="singIn sIoptionalMenu">
                <div className="sIoptionalMenu">
                    <input className="input_checkbox" type="checkbox" rem="remember" required />
                    <p className="singInText">Remember me</p>
                </div>
                <div>
                    <a href="/null" className="singInText sIhref">Lost your password?</a>
                </div>
            </div>
        </div>
    )
}

export default Singin;
