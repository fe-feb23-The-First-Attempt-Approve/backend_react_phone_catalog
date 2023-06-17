import nodemailer from 'nodemailer';
import 'dotenv/config';
import { Message } from '../types/message';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const send = ({ email, subject, html }: Message) => {
  return transporter.sendMail({
    from: 'Nice Gadgets',
    to: email,
    subject,
    text: 'Hello world?',
    html,
  });
};

export const sendActivationLink = (email: string, token: string) => {
  const link = `${process.env.CLIENT_URL}/activation/${token}`;

  return send({
    email,
    subject: 'Account activation',
    html: `
      <h1>Account activation</h1>
      <a href="${link}">${link}</a>
    `,
  });
};
