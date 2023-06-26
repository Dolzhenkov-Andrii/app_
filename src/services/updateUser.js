import $api from "../http/baseApiRequest";


const updateUser = async (form) => {
    return await $api.post('/user/update', form, {headers: {'Content-Type': 'multipart/form-data'}})
}

export default updateUser
