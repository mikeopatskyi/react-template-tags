import { ReactNode } from 'react';
import { LazyNode } from '../utils/render';
export interface MaybeProps<T> {
    of: T | undefined | null;
    /**
     * Render function or node to display if the value is defined.
     * If a function is provided, it receives the non-null value.
      */
    children?: ReactNode | ((value: T) => ReactNode);
    /**
      * Wrapper for when the value is null/undefined.
      */
    fallback?: LazyNode;
}
/**
 * Renders children if 'of' is neither null nor undefined.
 *
 * @example
 * <Maybe of={user} fallback={<LoginLink />}>
 *   {(u) => <UserProfile user={u} />}
 * </Maybe>
 */
export declare const Maybe: <T>({ of, children, fallback }: MaybeProps<T>) => ReactNode;
