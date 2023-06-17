import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

export const generateAccessToken = (user: User) => {
  const payload = {
    userName: user.userName,
    id: user.id,
    email: user.email,
  };

  return jwt.sign(payload, `${process.env.JWT_ACCESS_SECRET}`);
};

export const validateAccessToken = (token: string) => {
  try {
    return jwt.verify(token, `${process.env.JWT_ACCESS_SECRET}`);
  } catch {
    return null;
  }
};
