import {APIResponse} from "@playwright/test";
import apiManager from "./apiManager";
import {ENV} from "../../environment";

class PutApi {

    POSTS_URL: string = ENV.BASE_URL + "/posts";

    headers = {'custom-header': 'put-test'};

    /**
     * PUT /posts
     * @param id Post ID
     * @param body request body
     * @return APIResponse
     */
    async updateUserPost(id: number, body: string) {
        return await apiManager.put(this.POSTS_URL + '/' + id, this.headers, body);
    }

}

export default new PutApi();