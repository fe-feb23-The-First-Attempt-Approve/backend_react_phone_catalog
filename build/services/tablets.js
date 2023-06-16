"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findById = void 0;
const TabletDetail_1 = require("../models/TabletDetail");
const findById = (id) => {
    return TabletDetail_1.TabletDetail.findByPk(id);
};
exports.findById = findById;
