"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrder = void 0;
const SortType_1 = require("../types.ts/SortType");
const getOrder = (sortBy) => {
    switch (sortBy) {
        case SortType_1.SortType.HightPrice:
            return [['price', 'DESC']];
        case SortType_1.SortType.LowPrice:
            return [['price', 'ASC']];
        case SortType_1.SortType.Name:
            return [['name', 'ASC']];
        case SortType_1.SortType.New:
            return [['year', 'DESC']];
        case SortType_1.SortType.Old:
            return [['year', 'ASC']];
        default:
            throw new Error('Wrong sort type!');
    }
};
exports.getOrder = getOrder;
