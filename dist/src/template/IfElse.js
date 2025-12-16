import { resolveLazy } from '../utils/render';
/**
 * Component that renders its children if the condition is true,
 * otherwise renders elseChildren.
 *
 * Supports lazy evaluation for both branches.
 */
export const IfElse = ({ condition, children, elseChildren }) => {
    return condition ? resolveLazy(children) : resolveLazy(elseChildren);
};
//# sourceMappingURL=IfElse.js.map