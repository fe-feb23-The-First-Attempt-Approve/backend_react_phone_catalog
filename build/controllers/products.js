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
exports.getByQuery = exports.getHot = exports.getByIds = exports.getAll = void 0;
const products_1 = require("../services/products");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield (0, products_1.findAll)();
    res.send(products);
});
exports.getAll = getAll;
const getByIds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ids } = req.body;
    const products = yield (0, products_1.findByIds)(ids);
    res.send(products);
});
exports.getByIds = getByIds;
const getHot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hotProducts = yield (0, products_1.findHot)();
    res.send(hotProducts);
});
exports.getHot = getHot;
const getByQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query = '' } = req.query;
    if (!query) {
        res.sendStatus(400);
    }
    const products = yield (0, products_1.findByQuery)(query.toString());
    res.send(products);
});
exports.getByQuery = getByQuery;
