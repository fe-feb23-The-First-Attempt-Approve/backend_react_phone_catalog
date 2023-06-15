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
// import { Accessory } from '../models/Accessory';
// import { Phone } from '../models/Phone';
// import { ProductDetail } from '../models/ProductDetail';
const Tablet_1 = require("../models/Tablet");
const readData_1 = require("./readData");
const seedInitialData = () => __awaiter(void 0, void 0, void 0, function* () {
    // await Phone.bulkCreate(readData('api', 'phones.json'));
    // await ProductDetail.bulkCreate(readData('api', 'details.json'));
    yield Tablet_1.Tablet.bulkCreate((0, readData_1.readData)('api', 'tablets.json'));
    // await Accessory.bulkCreate(readData('api', 'details.json'));
});
exports.seedInitialData = seedInitialData;
