import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { Children, isValidElement } from 'react';
import { resolveLazy } from '../utils/render';
/**
 * Choose component (Switch with boolean conditions).
 * Renders the first <When /> block with a true condition.
 * Defaults to <Otherwise />.
 *
 * @example
 * <Choose>
 *   <When condition={score > 10}>High</When>
 *   <When condition={score > 5}>Medium</When>
 *   <Otherwise>Low</Otherwise>
 * </Choose>
 */
export const Choose = ({ children }) => {
    let match = null;
    let otherwise = null;
    Children.forEach(children, (child) => {
        if (match)
            return;
        if (!isValidElement(child))
            return;
        if (child.type === Choose.When) {
            if (child.props.condition) {
                match = resolveLazy(child.props.children);
            }
        }
        else if (child.type === Choose.Otherwise) {
            otherwise = resolveLazy(child.props.children);
        }
    });
    return (match || otherwise || null);
};
Choose.When = ({ children }) => _jsx(_Fragment, { children: resolveLazy(children) });
Choose.Otherwise = ({ children }) => _jsx(_Fragment, { children: resolveLazy(children) });
//# sourceMappingURL=Choose.js.map