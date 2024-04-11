"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Each = void 0;
var react_1 = require("react");
var Each = function (_a) {
    var render = _a.render, of = _a.of;
    return react_1.Children.toArray(of.map(function (item, index) { return render(item, index); }));
};
exports.Each = Each;
