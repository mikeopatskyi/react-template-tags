import { jsx as _jsx } from "react/jsx-runtime";
import { Children, Fragment } from 'react';
/**
 * Iterates over an array and renders the result of calling the render function for each item.
 *
 * @template T
 * @param {EachProps<T>} props
 */
export const Each = ({ of, render, fallback, keyFn }) => {
    if (!of || of.length === 0) {
        return fallback || null;
    }
    return Children.toArray(of.map((item, index) => {
        const element = render(item, index);
        // If keyFn is provided, we wrap in a keyed Fragment to ensure the key is respected
        // by Children.toArray (which will prefix it) or just by React in general.
        // However, Children.toArray re-keys things.
        // If we want strict keys, we should probably bypass Children.toArray if we have explicit keys,
        // but Children.toArray is useful for flattening.
        // A better approach for Each is to return the mapped array directly if we have keys.
        const key = keyFn ? keyFn(item, index) : index;
        return _jsx(Fragment, { children: element }, key);
    }));
};
//# sourceMappingURL=Each.js.map