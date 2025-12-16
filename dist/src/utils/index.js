// SSR Safe Utils
/**
 * Function to concatenate multiple class names into a single string.
 */
export const classNames = (...args) => {
    return args.filter(Boolean).join(' ');
};
/**
 * Function to remove HTML tags from a given string.
 */
export const stripTags = (str) => {
    return str.replace(/<[^>]+>/gi, '');
};
export const isClient = typeof window !== 'undefined';
export const isEmpty = (value) => {
    if (value == null)
        return true;
    if (typeof value === 'string')
        return value.trim().length === 0;
    if (Array.isArray(value))
        return value.length === 0;
    if (typeof value === 'object')
        return Object.keys(value).length === 0;
    return false;
};
export const toCamelCase = (input) => {
    return input.replace(/\s(.)/g, (_, char) => char.toUpperCase());
};
/**
 * Generates a random integer.
 * NOTE: Unsafe for SSR (hydration mismatch) if used during render.
 */
export const randomIntFromInterval = (min = 1, max = 5) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
/**
 * Generates a unique identifier.
 * NOTE: Unsafe for SSR. Use `useId` hook in React 18+ for DOM IDs.
 */
export const uid = (length = 5) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
//# sourceMappingURL=index.js.map