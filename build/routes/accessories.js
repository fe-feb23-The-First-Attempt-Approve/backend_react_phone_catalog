"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const accessories_1 = require("../controllers/accessories");
exports.router = express_1.default.Router();
exports.router.get('/', accessories_1.getRange);
exports.router.get('/prices', accessories_1.getMinMaxPrices);
exports.router.get('/hot', accessories_1.getHot);
exports.router.get('/:accessoryId', accessories_1.getOne);
