"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IfElse = void 0;
var IfElse = function (_a) {
    var condition = _a.condition, children = _a.children, elseChildren = _a.elseChildren;
    return condition ? children : elseChildren;
};
exports.IfElse = IfElse;
