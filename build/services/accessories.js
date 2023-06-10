"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = void 0;
const Accessory_1 = require("../models/Accessory");
const findAll = () => {
    return Accessory_1.Accessory.findAll();
};
exports.findAll = findAll;
