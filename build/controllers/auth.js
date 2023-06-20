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
exports.login = exports.activate = exports.register = void 0;
const User_1 = require("../models/User");
const userService_1 = require("../services/userService");
require("dotenv/config");
const jwtService_1 = require("../services/jwtService");
const bcrypt_1 = __importDefault(require("bcrypt"));
const ApiError_1 = require("../exceptions/ApiError");
const validatePassword = (password) => {
    if (!password) {
        return 'Password is required';
    }
    if (password.length < 6) {
        return 'At least 6 characters';
    }
};
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        return 'Email is required';
    }
    if (!emailRegex.test(email)) {
        return 'Email is not valid';
    }
};
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, email, password } = req.body;
    const errors = {
        email: validateEmail(email),
        password: validatePassword(password),
    };
    if (errors.email || errors.password) {
        res.send(errors);
        return;
    }
    try {
        yield (0, userService_1.registerUser)({ userName, email, password });
    }
    catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        errors.email = 'Email is already taken';
        res.send(errors);
        return;
    }
    res.send({ message: 'User has been registered' });
});
exports.register = register;
const activate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { activationToken } = req.params;
    const user = yield User_1.User.findOne({
        where: { activationToken },
    });
    if (!user) {
        res.sendStatus(404).send({ message: 'activation was failed' });
        return;
    }
    user.activationToken = null;
    yield user.save();
    res.redirect(`https://fe-feb23-the-first-attempt-approve.github.io/react_phone-catalog/#/`);
});
exports.activate = activate;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const errors = {
        email: '',
        password: '',
        activationToken: '',
    };
    const user = yield (0, userService_1.getByEmail)(email);
    if (!user) {
        errors.email = 'User with email does not exist';
        res.send(errors);
        throw ApiError_1.ApiError.BadRequest('User with email does not exist', {
            email: 'User with email does not exist',
        });
    }
    if (user.activationToken) {
        errors.activationToken = 'You should activate your account';
        res.send(errors);
        return;
    }
    try {
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            errors.password = 'Password is wrong';
            res.send(errors);
            throw ApiError_1.ApiError.BadRequest('Password is wrong', {
                password: 'Password is wrong',
            });
        }
        const accessToken = (0, jwtService_1.generateAccessToken)(user);
        res.send({
            user,
            accessToken,
        });
    }
    catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
    }
});
exports.login = login;
