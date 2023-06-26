import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL

const registRequest = async (form) => {
    return await axios.post(`${API_URL}/new-user`, form, {headers: {'Content-Type': 'multipart/form-data'}})
}

export default registRequest
