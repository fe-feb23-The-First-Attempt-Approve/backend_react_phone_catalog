"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
/* eslint-disable no-shadow */
class ApiError extends Error {
    constructor(status, message, errors = {}) {
        super(message);
        this.status = status;
        this.errors = errors;
    }
    static BadRequest(message, errors) {
        return new ApiError(400, message, errors);
    }
    static Unauthorized() {
        return new ApiError(401, 'User is not autorized');
    }
    static NotFound() {
        return new ApiError(404, 'Not found');
    }
}
exports.ApiError = ApiError;
