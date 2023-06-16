/**
 * Stringify object to a pretty json
 * @returns JSON string
 */
export function stringifyObject(value: any) {
    return JSON.stringify(value, null, 2);
}