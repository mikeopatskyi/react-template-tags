"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.If = void 0;
/**
 * If component.
 *
 * This component renders its children only if the provided condition is true.
 *
 * @param {IfProps} props - The props object containing the condition and children.
 * @param {boolean} props.condition - The condition to check.
 * @param {ReactNode} props.children - The children to render.
 * @returns {ReactNode | null} The rendered children or null.
 */
var If = function (_a) {
    var condition = _a.condition, children = _a.children;
    /**
     * Renders the children if the condition is true, otherwise returns null.
     *
     * @returns {ReactNode | null} The rendered children or null.
     */
    return condition ? children : null;
};
exports.If = If;
//# sourceMappingURL=If.js.map