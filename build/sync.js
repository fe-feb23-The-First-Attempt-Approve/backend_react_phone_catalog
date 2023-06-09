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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Phone_1 = require("./models/Phone");
const dbinit_1 = require("./utils/dbinit");
const filePath = path_1.default.resolve('api', 'phones.json');
function read() {
    const data = fs_1.default.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}
const seedInitialData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Phone_1.Phone.bulkCreate(read());
});
const sync = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, dbinit_1.dbinit)();
    yield Phone_1.Phone.sync({ alter: true });
    yield seedInitialData();
});
sync();
