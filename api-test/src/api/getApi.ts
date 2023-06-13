import {APIResponse} from "@playwright/test";
import apiManager from "./apiManager";

class GetApi {

    POSTS_URL: string = "https://jsonplaceholder.typicode.com/posts";//ENV.BASE_URL + "/posts"; //TODO: Remove hardcoding

    headers = {'custom-header': 'get-test'};

    /**
     * GET /posts
     * @return APIResponse
     */
    async getUserPosts() {
        return await apiManager.get(this.POSTS_URL, this.headers);
    }

    /**
     * GET /post/:id
     * @param id Post ID
     * @return APIResponse
     */
    async getUserPost(id: number) {
        return await apiManager.get(this.POSTS_URL + '/' + id, this.headers);
    }
}

export default new GetApi();