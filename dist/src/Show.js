"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Show = void 0;
var react_1 = require("react");
var Show = function (props) {
    var when = null;
    var otherwise = null;
    react_1.Children.forEach(props.children, function (child) {
        (0, react_1.isValidElement)(child) && child.props.isTrue === true
            ? (when = child)
            : (otherwise = child);
    });
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
