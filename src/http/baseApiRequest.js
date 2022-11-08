
import axios from "axios";
import GetCookie from "../components/cookies/getCookie";
import UpdateCookie from "../components/cookies/updateCookie";
const API_URL = process.env.REACT_APP_API_URL

const $api = axios.create({
    baseURL: API_URL,
    credentials: 'include'
})

$api.interceptors.request.use((config) => {
    config.headers.access_token = GetCookie('access_token')
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    // originalRequest._isRetry = false
    if (error.response.status === 401 && error.config && !originalRequest._isRetry) {
        originalRequest._isRetry = true
        try{
            const response = await axios.get(`${API_URL}/refresh_token`,
            {headers:{refresh_token: GetCookie('refresh_token')}})
            UpdateCookie('access_token', response.data.access_token)
            UpdateCookie('refresh_token', response.data.refresh_token)
            return $api.request(originalRequest)
        } catch (e) {
            throw e
        }
    }
    throw error
})

export default $api
