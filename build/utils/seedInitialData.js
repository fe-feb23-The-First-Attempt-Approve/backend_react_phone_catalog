"use strict";
// import { PhoneDetail } from '../models/PhoneDetail';
// import { TabletDetail } from '../models/TabletDetail';
// import { AccessoryDetails } from '../models/AccessoryDetail';
// import { Product } from '../models/Product';
// import { readData } from './readData';
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
const seedInitialData = () => __awaiter(void 0, void 0, void 0, function* () {
    // await PhoneDetail.bulkCreate(readData('api', 'phoneDetails.json'));
    // await TabletDetail.bulkCreate(readData('api', 'tabletDetails.json'));
    // await AccessoryDetails.bulkCreate([]);
    // await Product.bulkCreate([
    //   ...readData('api', 'tablets.json'),
    //   ...readData('api', 'phones.json'),
    // ]);
});
exports.seedInitialData = seedInitialData;
