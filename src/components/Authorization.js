import React from "react";
import '../css/authorization.css'
import Singin from "./Singin";

function Authorization() {
    return (
        <div className="containerAuthorization">
            <div className="authorizationContent">
                <Singin/>
            </div>
            <div className="authorizationImg"></div>
        </div>
    )
}

export default Authorization;
