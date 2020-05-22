/**
 * Creates a copy of the object via JSON stringify and parse
 * @param obj
 * @returns deep copy of obj
 */
export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}