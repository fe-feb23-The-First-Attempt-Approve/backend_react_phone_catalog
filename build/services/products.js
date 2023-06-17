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
exports.findRange = exports.findByQuery = exports.findHot = exports.findMinMaxPrices = exports.findAllByCategory = exports.findByIds = exports.findAll = void 0;
const sequelize_1 = require("sequelize");
const Product_1 = require("../models/Product");
const pagination_1 = require("../utils/pagination");
const findAll = () => {
    return Product_1.Product.findAll();
};
exports.findAll = findAll;
const findByIds = (ids) => {
    return Product_1.Product.findAll({ where: {
            itemId: {
                [sequelize_1.Op.in]: ids,
            },
        } });
};
exports.findByIds = findByIds;
const findAllByCategory = (productCategory) => {
    return Product_1.Product.findAll({ where: {
            category: {
                [sequelize_1.Op.in]: [productCategory],
            },
        } });
};
exports.findAllByCategory = findAllByCategory;
const findMinMaxPrices = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const phones = yield (0, exports.findAllByCategory)(category);
    const prices = phones.map(item => item.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return [min, max];
});
exports.findMinMaxPrices = findMinMaxPrices;
const findHot = () => __awaiter(void 0, void 0, void 0, function* () {
    const phones = yield (0, exports.findAll)();
    const sorted = phones.sort((itemA, itemB) => {
        const discountA = itemA.fullPrice - itemA.price;
        const discountB = itemB.fullPrice - itemB.price;
        return discountB - discountA;
    });
    return sorted;
});
exports.findHot = findHot;
const findByQuery = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return Product_1.Product.findAll({ where: {
            name: {
                [sequelize_1.Op.iLike]: `%${query.toLocaleLowerCase()}%`,
            },
        } });
});
exports.findByQuery = findByQuery;
const findRange = (currentPage, perPage, sort, maxPrice, minPrice, category) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, exports.findAllByCategory)(category);
    const allProductsCount = products.length;
    let visibleProducts = (0, pagination_1.getFilteredItemsByPrice)(products, [minPrice, maxPrice]);
    const filteredCount = visibleProducts.length;
    visibleProducts = (0, pagination_1.getSortedItems)(visibleProducts, sort);
    visibleProducts = (0, pagination_1.getSlice)(visibleProducts, currentPage, perPage);
    return { allProductsCount, filteredCount, visibleProducts };
});
exports.findRange = findRange;
