"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = exports.findAll = void 0;
const Phone_1 = require("../models/Phone");
const ProductDetail_1 = require("../models/ProductDetail");
const findAll = () => {
    return Phone_1.Phone.findAll();
};
exports.findAll = findAll;
const findById = (id) => {
    return ProductDetail_1.ProductDetail.findByPk(id);
};
exports.findById = findById;
