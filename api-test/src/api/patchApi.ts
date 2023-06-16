import {APIResponse} from "@playwright/test";
import apiManager from "./apiManager";
import {ENV} from "../../environment";

class PatchApi {

    POSTS_URL: string = ENV.BASE_URL + "/posts";

    headers = {'custom-header': 'patch-test'};

    /**
     * PATCH /posts/{:id}
     * @return APIResponse
     */
    async updateUserPost(id: number, body: string) {
        return await apiManager.patch(this.POSTS_URL + '/' + id, this.headers, body);
    }

}

export default new PatchApi();