import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import Cookie from "js-cookie";
import { decodeToken } from "react-jwt";
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {user} = useAuth();

    const token = Cookie.get('access_token')
    const token_date = decodeToken(token)['expiration']
    const now_time_ms = Date.now()
    const tokne_time = String(token_date).replaceAll(' ', 'T')
    const tokne_time_ms = Date.parse(tokne_time.slice(0,-3))

    const token_data = new Date(tokne_time_ms)

    if(now_time_ms > tokne_time_ms){
        console.log(`Error: Token expired\n\t ${token_data}`)
    } else {
        console.log(`Fine: Token is valid\n\t ${token_data}`)
    }

    if (!user) {
        return <Navigate to='/' state={{from: location}} />
    }

    return children
}

export default RequireAuth
