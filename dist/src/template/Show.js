"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Show = void 0;
var react_1 = require("react");
/**
 * Component that renders its children based on the provided conditions.
 *
 * @param {ShowProps} props - The component props.
 * @param {ReactNode} props.children - The children to render.
 * @returns {ReactNode | null} The rendered children.
 */
var Show = function (props) {
    // Initialize variables to store the rendered children
    var when = null;
    var otherwise = null;
    // Iterate over the children and find the first child with a true condition
    react_1.Children.forEach(props.children, function (child) {
        // Check if the child is a valid element and has a true condition
        if ((0, react_1.isValidElement)(child) && child.props.isTrue === true) {
            // Store the child in the when variable
            when = child;
        }
        else {
            // Store the child in the otherwise variable
            otherwise = child;
        }
    });
    // Return the rendered children, or the otherwise children, or null if none are found
    return when || otherwise || null;
};
exports.Show = Show;
exports.Show.When = function (_a) {
    var isTrue = _a.isTrue, children = _a.children;
    return (isTrue ? children : null);
};
exports.Show.Else = function (_a) {
    var render = _a.render, children = _a.children;
    return render || children || null;
};
//# sourceMappingURL=Show.js.map