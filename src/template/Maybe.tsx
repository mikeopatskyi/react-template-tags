import { FC, ReactNode } from 'react';
import { LazyNode, resolveLazy } from '../utils/render';

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
export const Maybe = <T,>({ of, children, fallback }: MaybeProps<T>): ReactNode => {
  if (of === null || of === undefined) {
    return resolveLazy(fallback) || null;
  }

  if (typeof children === 'function') {
    return (children as (value: T) => ReactNode)(of);
  }

  return children;
};
