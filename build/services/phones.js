"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRange = exports.getOrder = exports.getMinMaxPrices = exports.findById = exports.findAll = void 0;
const sequelize_1 = require("sequelize");
const Phone_1 = require("../models/Phone");
const ProductDetail_1 = require("../models/ProductDetail");
const SortType_1 = require("../types.ts/SortType");
const findAll = () => {
    return Phone_1.Phone.findAll();
};
exports.findAll = findAll;
const findById = (id) => {
    return ProductDetail_1.ProductDetail.findByPk(id);
};
exports.findById = findById;
const getMinMaxPrices = () => __awaiter(void 0, void 0, void 0, function* () {
    const phones = yield (0, exports.findAll)();
    const prices = phones.map(item => item.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return [min, max];
});
exports.getMinMaxPrices = getMinMaxPrices;
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
const findRange = (currentPage, perPage, sort, maxPrice, minPrice) => __awaiter(void 0, void 0, void 0, function* () {
    const offset = currentPage ? (currentPage - 1) * perPage : 0;
    const order = (0, exports.getOrder)(sort);
    const allPhonesCount = (yield Phone_1.Phone.findAll()).length;
    const phones = yield Phone_1.Phone.findAll({
        where: {
            price: {
                [sequelize_1.Op.between]: [minPrice, maxPrice],
            },
        },
        offset,
        limit: perPage,
        order,
    });
    return { allPhonesCount, phones };
});
exports.findRange = findRange;
