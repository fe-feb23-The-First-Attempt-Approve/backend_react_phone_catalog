"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = void 0;
const Tablet_1 = require("../models/Tablet");
const findAll = () => {
    return Tablet_1.Tablet.findAll();
};
exports.findAll = findAll;
