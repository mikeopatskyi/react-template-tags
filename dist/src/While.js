"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.While = void 0;
var React = require("react");
var While = function (_a) {
    var condition = _a.condition, children = _a.children;
    return condition ? React.createElement(React.Fragment, null, children) : null;
};
exports.While = While;
