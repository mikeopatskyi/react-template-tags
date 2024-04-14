"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
/**
 * A React component that renders the corresponding ReactNode based on the given value.
 * If the value is not found in the cases object, it renders the defaultCase if provided,
 * or null if not.
 *
 * @param props - The props object containing the value, cases, and defaultCase.
 * @returns The rendered ReactNode.
 */
var Switch = function (_a) {
    /**
     * The value to match against the cases object.
     */
    // Destructure the props object to get the value, cases, and defaultCase.
    var value = _a.value, cases = _a.cases, defaultCase = _a.defaultCase;
    // Retrieve the corresponding ReactNode from the cases object based on the value.
    // If the value is not found, return the defaultCase if provided, or null if not.
    return cases[value] || defaultCase;
};
exports.Switch = Switch;
