"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const emailService_1 = require("../services/emailService");
(0, emailService_1.send)({
    email: '',
    subject: 'test',
    html: 'hi',
});
