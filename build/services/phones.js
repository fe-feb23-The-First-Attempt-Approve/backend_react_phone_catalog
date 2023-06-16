"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = void 0;
const PhoneDetail_1 = require("../models/PhoneDetail");
const findById = (id) => {
    return PhoneDetail_1.PhoneDetail.findByPk(id);
};
exports.findById = findById;
