import {describeCloudWatchLogGroup} from "../aws-sdk/describe-log-groups";

describe("Describe CloudWatch Log Groups", () => {

        test("Describe CloudWatch Log Groups", async () => {

            await describeCloudWatchLogGroup()

        })

    }
)