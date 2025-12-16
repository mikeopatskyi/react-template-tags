import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { Children, isValidElement } from 'react';
import { resolveLazy } from '../utils/render';
/**
 * Switch component for declarative conditional rendering.
 *
 * @example
 * <Switch value={status}>
 *   <Case value="loading"><Spinner /></Case>
 *   <Case value="success"><Content /></Case>
 *   <Default><Error /></Default>
 * </Switch>
 */
export const Switch = ({ value, children }) => {
    let match = null;
    let defaultCase = null;
    Children.forEach(children, (child) => {
        if (match)
            return; // Already found a match
        if (!isValidElement(child))
            return;
        if (child.type === Switch.Case) {
            if (child.props.value === value) {
                match = resolveLazy(child.props.children);
            }
        }
        else if (child.type === Switch.Default) {
            defaultCase = resolveLazy(child.props.children);
        }
    });
    return (match || defaultCase || null);
};
Switch.Case = ({ children }) => _jsx(_Fragment, { children: resolveLazy(children) });
Switch.Default = ({ children }) => _jsx(_Fragment, { children: resolveLazy(children) });
//# sourceMappingURL=Switch.js.map