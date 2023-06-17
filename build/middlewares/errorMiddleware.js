"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const ApiError_1 = require("../exceptions/ApiError");
const errorMiddleware = (error, req, res, next) => {
    if (error instanceof ApiError_1.ApiError) {
        // eslint-disable-next-line no-shadow
        const { status, message, errors } = error;
        res.status(status).send({ message, errors });
    }
    res.status(500).send({
        message: 'Unexpected error',
    });
};
exports.errorMiddleware = errorMiddleware;
