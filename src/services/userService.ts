import { User } from '../models/User';
import { sendActivationLink } from './emailService';
import { v4 as uuidv4 } from 'uuid';
import { ApiError } from '../exceptions/ApiError';
import { UserData } from '../types/UserData';
import bcrypt from 'bcrypt';

export const getByEmail = (email: string) => {
  return User.findOne({
    where: { email },
  });
};

export const registerUser = async({ userName, email, password }: UserData) => {
  const existingUser = await getByEmail(email);

  if (existingUser) {
    throw ApiError.BadRequest('Email is already taken', {
      email: 'Email is already taken',
    });
  }

  const activationToken = uuidv4();
  const hash = await bcrypt.hash(password, 10);

  await User.create({
    userName,
    email,
    password: hash,
    activationToken,
  });

  await sendActivationLink(email, activationToken);
};
