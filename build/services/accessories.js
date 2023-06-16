"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = void 0;
const AccessoryDetail_1 = require("../models/AccessoryDetail");
const findById = (id) => {
    return AccessoryDetail_1.AccessoryDetails.findByPk(id);
};
exports.findById = findById;
