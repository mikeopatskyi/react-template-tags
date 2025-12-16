import { ReactNode } from 'react';
import { LazyNode } from '../utils/render';
export interface AwaitProps<T> {
    promise: Promise<T>;
    children: (data: T) => ReactNode;
    fallback?: LazyNode;
    error?: (err: any) => ReactNode;
}
/**
 * Await component.
 * wrapper to resolve promises.
 * NOTE: For SSR, this only works if the promise is already resolved or if using a framework that handles effect hydration,
 * otherwise it renders fallback initially.
 */
export declare const Await: <T>({ promise, children, fallback, error }: AwaitProps<T>) => ReactNode;
