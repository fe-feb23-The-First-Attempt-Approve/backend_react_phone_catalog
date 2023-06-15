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
const Tablet_1 = require("../models/Tablet");
const TabletDetail_1 = require("../models/TabletDetail");
const pagination_1 = require("../utils/pagination");
const findAll = () => {
    return Tablet_1.Tablet.findAll();
};
exports.findAll = findAll;
const findById = (id) => {
    return TabletDetail_1.TabletDetail.findByPk(id);
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
    const tablets = yield (0, exports.findAll)();
    const allTabletsCount = tablets.length;
    let visibleTablets = (0, pagination_1.getFilteredItemsByPrice)(tablets, [minPrice, maxPrice]);
    const filteredCount = visibleTablets.length;
    visibleTablets = (0, pagination_1.getSortedItems)(visibleTablets, sort);
    visibleTablets = (0, pagination_1.getSlice)(visibleTablets, currentPage, perPage);
    return { allTabletsCount, filteredCount, visibleTablets };
});
exports.findRange = findRange;
