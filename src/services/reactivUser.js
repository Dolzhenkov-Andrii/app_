import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL

const reactivRequest = async (form) => {
    return await axios.post(`${API_URL}/account-reactivation`, form)
}

export default reactivRequest
