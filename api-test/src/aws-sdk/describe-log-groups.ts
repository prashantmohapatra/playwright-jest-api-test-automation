import {
    paginateDescribeLogGroups,
    CloudWatchLogsClient,
} from "@aws-sdk/client-cloudwatch-logs";

const client = new CloudWatchLogsClient()

export async function describeCloudWatchLogGroup() {
    const paginatedLogGroups = paginateDescribeLogGroups({ client }, {});
    const logGroups = [];

    for await (const page of paginatedLogGroups) {
        if (page.logGroups && page.logGroups.every((lg) => !!lg)) {
            logGroups.push(...page.logGroups);
        }
    }

    console.log(logGroups);
    return logGroups;
}