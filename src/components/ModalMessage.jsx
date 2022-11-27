import React from "react";
import '../css/style.css'

const ModalMessage = ({ title, message, callback }) => {
    return (
        <div className="backBlock addZIndex5">
            <div className="containerYellow contBlock">
                <div className="contBlockTitle">
                    <h3>{title}</h3>
                </div>
                <div className="contBlockMessage">
                    <p>{message}</p>
                </div>
                <button onClick={callback}>EXIT</button>
            </div>
        </div>
    )
}

export default ModalMessage;
