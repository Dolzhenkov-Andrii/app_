import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { decodeToken } from "react-jwt";
import UpdateCookie from "../components/cookies/updateCookie";
import GetCookie from "../components/cookies/getCookie";
import refreshToken from "../services/refreshToken";
// const SECRET_KEY = process.env.REACT_APP_SECRET_KEY

const RequireAuth = ({children}) => {

    const location = useLocation();
    const {signOut} = useAuth();
    const fromPage = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const token = GetCookie('access_token')
    const token_date = decodeToken(token)?.['expiration']
    const now_time_ms = Date.now()
    const tokne_time = String(token_date).replaceAll(' ', 'T')
    const tokne_time_ms = Date.parse(tokne_time.slice(0,-3))

    const token_data = new Date(tokne_time_ms)

    if(now_time_ms > tokne_time_ms){
        refreshToken().catch(error => {
            UpdateCookie('access_token', null)
            UpdateCookie('refresh_token', null)
            UpdateCookie('User', null)
            console.log(`Fine: Token is valid\n\t ${token_data}`)
            signOut(() => navigate(fromPage, {replace: true}))
        })
    }

    return children
}

export default RequireAuth
