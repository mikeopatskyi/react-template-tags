"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.While = void 0;
var React = require("react");
/**
 * While component.
 *
 * Renders its children recursively while the condition is true.
 *
 * @param {WhileProps} props - The component props.
 * @param {boolean} props.condition - The condition to check.
 * @param {ReactNode} props.children - The children to render.
 * @returns {ReactNode | null} The rendered children, or null if the condition is false.
 */
var While = function (_a) {
    var condition = _a.condition, children = _a.children;
    /**
     * Renders the children recursively if the condition is true.
     *
     * @returns {ReactNode | null} The rendered children, or null if the condition is false.
     */
    return condition ? React.createElement(React.Fragment, null, children) : null;
};
exports.While = While;
//# sourceMappingURL=While.js.map