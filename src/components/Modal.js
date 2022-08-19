import React, { useState } from "react";
import "../css/modal.css"
import Singin from "./Singin";


const Modal = () => {
    const [modalActive, setModalActive] = useState(true)
    return (
        <div className="modal">
            <div className="ModalConteiner">
                <div className="exitModalConteiner">
                <Singin />
                <button className="exitModal">
                    <p>• . exit . •</p>
                </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
