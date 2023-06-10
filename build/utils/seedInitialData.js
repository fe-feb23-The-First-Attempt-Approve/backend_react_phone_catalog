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
exports.seedInitialData = void 0;
const Accessory_1 = require("../models/Accessory");
const Phone_1 = require("../models/Phone");
const ProductDetail_1 = require("../models/ProductDetail");
const Tablet_1 = require("../models/Tablet");
const readData_1 = require("./readData");
const seedInitialData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Phone_1.Phone.bulkCreate((0, readData_1.readData)('api', 'phones.json'));
    yield ProductDetail_1.ProductDetail.bulkCreate((0, readData_1.readData)('api', 'details.json'));
    yield Tablet_1.Tablet.bulkCreate([]);
    yield Accessory_1.Accessory.bulkCreate([]);
});
exports.seedInitialData = seedInitialData;
