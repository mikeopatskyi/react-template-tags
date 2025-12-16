import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { Children, isValidElement } from 'react';
import { resolveLazy } from '../utils/render';
/**
 * Component that renders its children based on the provided conditions.
 * It looks for `Show.When` and `Show.Else` components among its children.
 *
 * @example
 * <Show>
 *   <Show.When isTrue={data.length > 0}>
 *      <List data={data} />
 *   </Show.When>
 *   <Show.Else>
 *      <Empty />
 *   </Show.Else>
 * </Show>
 */
export const Show = ({ children }) => {
    let when = null;
    let otherwise = null;
    Children.forEach(children, (child) => {
        // If we already found a match, stop looking (optimization not possible with forEach, but we ignore subsequent)
        if (when)
            return;
        if (!isValidElement(child))
            return;
        // Check for When component
        // We check the type directly if possible, or assume based on props for flexibility if minified? 
        // Checking `type` is safer.
        if (child.type === Show.When) {
            if (child.props.isTrue) {
                when = resolveLazy(child.props.children);
            }
        }
        else if (child.type === Show.Else) {
            otherwise = resolveLazy(child.props.render || child.props.children);
        }
    });
    return (when || otherwise || null);
};
Show.When = ({ children }) => _jsx(_Fragment, { children: resolveLazy(children) }); // This implementation is only for fallback if used differently, but Show handles logic.
// Actually, if Show.When is rendered directly, it should probably return null or children?
// The parent `Show` decides what to render. If `Show.When` is rendered standalone, it should behaves like `If`.
// Let's make `When` functional just in case.
Show.When = ({ isTrue, children }) => (isTrue ? _jsx(_Fragment, { children: resolveLazy(children) }) : null);
Show.Else = ({ render, children }) => _jsx(_Fragment, { children: resolveLazy(render || children) });
//# sourceMappingURL=Show.js.map