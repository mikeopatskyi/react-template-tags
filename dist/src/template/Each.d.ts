import { ReactNode } from 'react';
export interface EachProps<T> {
    of: T[] | undefined | null;
    render: (item: T, index: number) => ReactNode;
    /**
     * Content to render when the list is empty or null/undefined.
     */
    fallback?: ReactNode;
    /**
     * Function to generate a unique key for each item.
     * If provided, proper reordering will be supported.
     * If not provided, index will be used (less safe for reordering).
     */
    keyFn?: (item: T, index: number) => string | number;
}
/**
 * Iterates over an array and renders the result of calling the render function for each item.
 *
 * @template T
 * @param {EachProps<T>} props
 */
export declare const Each: <T>({ of, render, fallback, keyFn }: EachProps<T>) => ReactNode;
