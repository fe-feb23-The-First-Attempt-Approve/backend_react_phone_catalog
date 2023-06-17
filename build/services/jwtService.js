"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAccessToken = exports.generateAccessToken = void 0;
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateAccessToken = (user) => {
    const payload = {
        userName: user.userName,
        id: user.id,
        email: user.email,
    };
    return jsonwebtoken_1.default.sign(payload, `${process.env.JWT_ACCESS_SECRET}`);
};
exports.generateAccessToken = generateAccessToken;
const validateAccessToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, `${process.env.JWT_ACCESS_SECRET}`);
    }
    catch (_a) {
        return null;
    }
};
exports.validateAccessToken = validateAccessToken;
