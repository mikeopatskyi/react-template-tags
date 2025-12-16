import { FC, ReactNode } from 'react';
import { LazyNode, resolveLazy } from '../utils/render';

export interface IfProps {
  condition: boolean | undefined | null;
  children: LazyNode;
}

/**
 * If component.
 *
 * Renders its children only if the provided condition is truthy.
 * Supports helper functions for lazy evaluation.
 *
 * @example
 * <If condition={isLoggedIn}>
 *   <UserDashboard />
 * </If>
 *
 * @example
 * <If condition={showHeavyComponent}>
 *   {() => <HeavyComponent />}
 * </If>
 */
export const If: FC<IfProps> = ({ condition, children }): ReactNode => {
  return condition ? resolveLazy(children) : null;
};
