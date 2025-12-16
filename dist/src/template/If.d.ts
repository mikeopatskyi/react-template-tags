import { FC } from 'react';
import { LazyNode } from '../utils/render';
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
export declare const If: FC<IfProps>;
