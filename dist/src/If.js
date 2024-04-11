"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.If = void 0;
var If = function (_a) {
    var condition = _a.condition, children = _a.children;
    return condition ? children : null;
};
exports.If = If;
