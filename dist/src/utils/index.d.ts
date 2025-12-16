/**
 * Function to concatenate multiple class names into a single string.
 */
export declare const classNames: (...args: (string | undefined | null | false)[]) => string;
/**
 * Function to remove HTML tags from a given string.
 */
export declare const stripTags: (str: string) => string;
export declare const isClient: boolean;
export declare const isEmpty: (value: any) => boolean;
export declare const toCamelCase: (input: string) => string;
/**
 * Generates a random integer.
 * NOTE: Unsafe for SSR (hydration mismatch) if used during render.
 */
export declare const randomIntFromInterval: (min?: number, max?: number) => number;
/**
 * Generates a unique identifier.
 * NOTE: Unsafe for SSR. Use `useId` hook in React 18+ for DOM IDs.
 */
export declare const uid: (length?: number) => string;
