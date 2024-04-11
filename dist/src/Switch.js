"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
var Switch = function (_a) {
    var value = _a.value, cases = _a.cases, defaultCase = _a.defaultCase;
    return cases[value] || defaultCase;
};
exports.Switch = Switch;
