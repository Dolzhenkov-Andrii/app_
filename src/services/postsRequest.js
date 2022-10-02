import $api from "../http/baseApiRequest";

export default class Posts {

    static async getPosts(position, amount) {
        return await $api.get(`/posts?position=${position}&amount=${amount}`)
    }

}
