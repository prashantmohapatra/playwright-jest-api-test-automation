/**
 * Stringify object to a pretty json
 * @return APIResponse
 */
export function stringifyObject(value: any) {
    return JSON.stringify(value, null, 2);
}

/**
 * Parse String to object
 * @return APIResponse
 */
function parseStringToObject(value: string) {
    return JSON.parse(value);
}