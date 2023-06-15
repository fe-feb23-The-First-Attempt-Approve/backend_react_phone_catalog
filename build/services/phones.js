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
exports.findRange = exports.findHot = exports.findMinMaxPrices = exports.findById = exports.findAll = void 0;
const Phone_1 = require("../models/Phone");
const PhoneDetail_1 = require("../models/PhoneDetail");
const pagination_1 = require("../utils/pagination");
const findAll = () => {
    return Phone_1.Phone.findAll();
};
exports.findAll = findAll;
const findById = (id) => {
    return PhoneDetail_1.PhoneDetail.findByPk(id);
};
exports.findById = findById;
const findMinMaxPrices = () => __awaiter(void 0, void 0, void 0, function* () {
    const phones = yield (0, exports.findAll)();
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
const findRange = (currentPage, perPage, sort, maxPrice, minPrice) => __awaiter(void 0, void 0, void 0, function* () {
    const phones = yield (0, exports.findAll)();
    const allPhonesCount = phones.length;
    let visiblePhones = (0, pagination_1.getFilteredItemsByPrice)(phones, [minPrice, maxPrice]);
    const filteredCount = visiblePhones.length;
    visiblePhones = (0, pagination_1.getSortedItems)(visiblePhones, sort);
    visiblePhones = (0, pagination_1.getSlice)(visiblePhones, currentPage, perPage);
    return { allPhonesCount, filteredCount, visiblePhones };
});
exports.findRange = findRange;
