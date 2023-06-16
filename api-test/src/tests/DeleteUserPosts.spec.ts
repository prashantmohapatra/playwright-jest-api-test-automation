import deleteApi from "../api/deleteApi";

describe("Delete user posts", () => {

        test("Delete user posts", async () => {

            const response = await deleteApi.deleteUserPost(1);

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);

        })

    }
)