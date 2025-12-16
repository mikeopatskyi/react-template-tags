import { resolveLazy } from '../utils/render';
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
export const If = ({ condition, children }) => {
    return condition ? resolveLazy(children) : null;
};
//# sourceMappingURL=If.js.map