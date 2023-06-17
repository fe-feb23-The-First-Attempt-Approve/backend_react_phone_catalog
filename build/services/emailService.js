"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendActivationLink = exports.send = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
require("dotenv/config");
const transporter = nodemailer_1.default.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});
const send = ({ email, subject, html }) => {
    return transporter.sendMail({
        from: 'Nice Gadgets',
        to: email,
        subject,
        text: 'Hello world?',
        html,
    });
};
exports.send = send;
const sendActivationLink = (email, token) => {
    const link = `${process.env.CLIENT_URL}/activation/${token}`;
    return (0, exports.send)({
        email,
        subject: 'Account activation',
        html: `
      <h1>Account activation</h1>
      <a href="${link}">${link}</a>
    `,
    });
};
exports.sendActivationLink = sendActivationLink;
