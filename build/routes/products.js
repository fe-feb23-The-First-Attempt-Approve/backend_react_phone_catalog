"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const products_1 = require("../controllers/products");
exports.router = express_1.default.Router();
exports.router.get('/', products_1.getAll);
exports.router.get('/ids', products_1.getByIds);
exports.router.get('/hot', products_1.getHot);
exports.router.get('/search', products_1.getByQuery);
