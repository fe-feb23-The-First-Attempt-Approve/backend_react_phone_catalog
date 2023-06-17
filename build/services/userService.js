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
exports.registerUser = exports.getByEmail = void 0;
const User_1 = require("../models/User");
const emailService_1 = require("./emailService");
const uuid_1 = require("uuid");
const ApiError_1 = require("../exceptions/ApiError");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getByEmail = (email) => {
    return User_1.User.findOne({
        where: { email },
    });
};
exports.getByEmail = getByEmail;
const registerUser = ({ userName, email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield (0, exports.getByEmail)(email);
    if (existingUser) {
        throw ApiError_1.ApiError.BadRequest('Email is already taken', {
            email: 'Email is already taken',
        });
    }
    const activationToken = (0, uuid_1.v4)();
    const hash = yield bcrypt_1.default.hash(password, 10);
    yield User_1.User.create({
        userName,
        email,
        password: hash,
        activationToken,
    });
    yield (0, emailService_1.sendActivationLink)(email, activationToken);
});
exports.registerUser = registerUser;
