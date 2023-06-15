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
// import { Accessory } from './models/Accessory';
// import { Phone } from './models/Phone';
// import { ProductDetail } from './models/ProductDetail';
const Tablet_1 = require("./models/Tablet");
const dbinit_1 = require("./utils/dbinit");
const seedInitialData_1 = require("./utils/seedInitialData");
const sync = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, dbinit_1.dbinit)();
    // await Phone.sync();
    yield Tablet_1.Tablet.sync({ force: true });
    // await Accessory.sync();
    // await ProductDetail.sync();
    yield (0, seedInitialData_1.seedInitialData)();
});
sync();
