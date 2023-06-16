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
exports.getRange = exports.getMinMaxPrices = exports.getAllCount = exports.getOne = void 0;
const products_1 = require("../services/products");
const accessories_1 = require("../services/accessories");
const SortType_1 = require("../types/SortType");
const category = 'accessories';
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { itemId } = req.params;
    const foundProduct = yield (0, accessories_1.findById)(itemId);
    if (!foundProduct) {
        res.sendStatus(404);
        return;
    }
    res.send(foundProduct);
});
exports.getOne = getOne;
const getAllCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productsCount = (yield (0, products_1.findAllByCategory)(category)).length;
    res.send({ productsCount });
});
exports.getAllCount = getAllCount;
const getMinMaxPrices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [min, max] = yield (0, products_1.findMinMaxPrices)(category);
    res.send({ min, max });
});
exports.getMinMaxPrices = getMinMaxPrices;
const getRange = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [min, max] = yield (0, products_1.findMinMaxPrices)(category);
    const { page = 1, perPage = 8, sort = SortType_1.SortType.New, maxPrice = max, minPrice = min, } = req.query;
    const productsInfo = yield (0, products_1.findRange)(Number(page), Number(perPage), sort, Number(maxPrice), Number(minPrice), category);
    res.send(productsInfo);
});
exports.getRange = getRange;
