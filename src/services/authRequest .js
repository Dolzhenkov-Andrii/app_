import axios from "axios";
import SetCookie from "../components/cookies/setCookie";
const API_URL = process.env.REACT_APP_API_URL

const authRequest = async (user) => {
    return await axios.post(`${API_URL}/authorization`, user)
}

export default authRequest
