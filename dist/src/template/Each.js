"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Each = void 0;
var react_1 = require("react");
/**
 * Component that renders an array of items using a provided render function for each item.
 *
 * @template T The type of the items in the array.
 * @param {EachProps<T>} props The props object containing the render function and the array of items.
 * @return {ReactNode} The rendered array of items.
 */
var Each = function (_a) {
    var render = _a.render, of = _a.of;
    /**
     * Map function to render each item in the array.
     *
     * @param {T} item The current item being rendered.
     * @param {number} index The index of the current item being rendered.
     * @return {ReactNode} The rendered item.
     */
    var renderItem = function (item, index) { return render(item, index); };
    // Render the array of items using the provided render function.
    return react_1.Children.toArray(of.map(renderItem));
};
exports.Each = Each;
