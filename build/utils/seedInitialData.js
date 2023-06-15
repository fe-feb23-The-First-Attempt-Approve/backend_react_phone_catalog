"use strict";
// import { Accessory } from '../models/Accessory';
// import { Phone } from '../models/Phone';
// import { PhoneDetail } from '../models/PhoneDetail';
// import { TabletDetail } from '../models/TabletDetail';
// import { Tablet } from '../models/Tablet';
// import { readData } from './readData';
// import { AccessoryDetails } from '../models/AccessoryDetail';
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
    // await Phone.bulkCreate(readData('api', 'phones.json'));
    // await PhoneDetail.bulkCreate(readData('api', 'phoneDetails.json'));
    // await TabletDetail.bulkCreate(readData('api', 'tabletDetails.json'));
    // await Tablet.bulkCreate(readData('api', 'tablets.json'));
    // await Accessory.bulkCreate([]);
    // await AccessoryDetails.bulkCreate([]);
});
exports.seedInitialData = seedInitialData;
