import getApi from "../api/getApi";
import {Reporter} from "jest-allure/dist/Reporter";

declare const reporter: Reporter;

describe("Retrieve user posts", () => {

    test("Get user posts", async() => {

        await reporter
            .description("DESC: Get user posts");

        let response = await getApi.getUserPosts();

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        await getApi.getUserPost(1);
    })

    test("Get user post ", async () => {
        const response = await getApi.getUserPost(1);

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        expect(await response.json()).toEqual(expect.objectContaining({
            "id": 1,
            "userId": 1
        }));
    })

})