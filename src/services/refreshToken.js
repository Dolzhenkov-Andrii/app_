import axios from "axios";
import GetCookie from "../components/cookies/getCookie";
import UpdateCookie from "../components/cookies/updateCookie";

const API_URL = process.env.REACT_APP_API_URL

const refreshToken = async () => {
    return await axios.get(`${API_URL}/refresh_token`,
            {headers:{refresh_token: GetCookie('refresh_token')}}).then(response => {
        UpdateCookie('access_token', response.data.access_token)
        UpdateCookie('refresh_token', response.data.refresh_token)
    })
}

export default refreshToken

