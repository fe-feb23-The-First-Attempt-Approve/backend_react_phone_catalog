"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readData = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function readData(folderName, fileName) {
    const filePath = path_1.default.resolve(folderName, fileName);
    const data = fs_1.default.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}
exports.readData = readData;
