import $api from "../http/baseApiRequest";

export default class Posts {

    static async getPosts(position, amount) {
        return await $api.get(`/posts?position=${position}&amount=${amount}`)
    }

    static async setPost(form) {
        return await $api.post('/new-post', form, {headers: {'Content-Type': 'multipart/form-data'}})
    }

}

