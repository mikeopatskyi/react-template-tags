"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IfElse = void 0;
/**
 * Component that renders its children if the condition is true,
 * otherwise renders elseChildren.
 *
 * @param {IfElseProps} props - The component props.
 * @param {boolean} props.condition - The condition to check.
 * @param {ReactNode} props.children - The children to render if the condition is true.
 * @param {ReactNode} props.elseChildren - The children to render if the condition is false.
 * @returns {ReactNode} The rendered children.
 */
var IfElse = function (_a) {
    var condition = _a.condition, children = _a.children, elseChildren = _a.elseChildren;
    /**
     * Renders the children if the condition is true,
     * otherwise renders elseChildren.
     *
     * @returns {ReactNode} The rendered children.
     */
    return condition ? children : elseChildren;
};
exports.IfElse = IfElse;
//# sourceMappingURL=IfElse.js.map