import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL

const activRequest = async (key) => {
    return await axios.get(`${API_URL}/account-activation?activation=${key}`)
}

export default activRequest
