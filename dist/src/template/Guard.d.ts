import { FC } from 'react';
import { LazyNode } from '../utils/render';
export interface GuardProps {
    /** Condition that must be true */
    expect: boolean;
    /** Message to log if condition is false (dev only usually) */
    message?: string;
    /** Content to render if condition is true */
    children: LazyNode;
    /** Content to render if condition is false */
    fallback?: LazyNode;
    /** If true, throws an error when condition is false */
    error?: boolean;
}
/**
 * Guard component.
 * Renders children if expectation is met.
 * Can optionally throw an error or log a warning if expectation fails.
 */
export declare const Guard: FC<GuardProps>;
