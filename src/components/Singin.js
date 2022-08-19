import React from "react";
import "../css/singin.css"



function Singin() {
    return (
        <div className="singIn">
            <div className="singInContent">
                {/* <form action="" method="POST" className="form_conectingUser">
                </form> */}
                <div className="inputContent">
                    <h2>
                        Sing in you accaunt
                    </h2>
                    <p>• Login / email •</p>
                    <input className="singInInput" type="text" username="username" required />
                    <p>• Password •</p>
                    <input className="singInInput" type="text" email="email" required />
                </div>
                <button className="singInButton" type="submit" value="registraitions">
                    <p>LOGIN</p>
                </button>
                <div className="changeContent">
                    <a className="singIn_link" href="/new_acaunt">new acaunt</a>
                    <h4>or</h4>
                    <a className="singIn_link" href="##">restore password</a>
                </div>
            </div>
        </div>
    )
}

export default Singin;
