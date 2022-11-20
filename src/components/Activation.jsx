import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from "../hook/useAuth";
import activRequest from "../services/activUser";
import SetCookie from "./cookies/setCookie";
import ReactivationMessage from "./Reactivation";

function Activation() {

    const navigate = useNavigate();
    const goHome = () => navigate('/', { replace: true })
    const [searchParams] = useSearchParams();
    const activation_key = searchParams.get("activation_key")
    const { user, signIn } = useAuth();
    const [page, setPage] = useState(null)

    useEffect(() => {
        console.log(user, activation_key)
        if (!user && activation_key) {
            activRequest(activation_key).then(response => {
                console.log("200")
                SetCookie('access_token', response.data.access_token)
                SetCookie('refresh_token', response.data.refresh_token)
                SetCookie('user', JSON.stringify(response.data.user))
                signIn(response.data.user, goHome)
                setPage(<Navigate to="/" replace />)
            }).catch(error => {
                console.log("Error")
                console.log(error.response.data)
                setPage(<ReactivationMessage title={error.response.data} callback={goHome} />)
            })
        }
    }, [])
    return (
        <div className="containerRegistration">
            {page}
        </div>
    )
}

export default Activation;


//activation
