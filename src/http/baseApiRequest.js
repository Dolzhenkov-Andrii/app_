
import axios from "axios";
import Cookies from "js-cookie";
const API_URL = process.env.REACT_APP_API_URL

const $api = axios.create({
    baseURL: API_URL,
    credentials: 'include'
})

$api.interceptors.request.use((config) => {
    config.headers.access_token = Cookies.get('access_token')
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    originalRequest._isRetry = false
    if (error.response.status === 401 && error.config && !originalRequest._isRetry) {
        originalRequest._isRetry = true
        try{
            const response = await axios.get(`${API_URL}/refresh_token`,
            {headers:{refresh_token: Cookies.get('refresh_token')}})
            Cookies.remove('access_token')
            Cookies.remove('refresh_token')
            Cookies.set('access_token', response.data.access_token)
            Cookies.set('refresh_token', response.data.refresh_token)
            return $api.request(originalRequest)
        } catch (e) {
            throw e
        }
    }
    throw error
})

export default $api
