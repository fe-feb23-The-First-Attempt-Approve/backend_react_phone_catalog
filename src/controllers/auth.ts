/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line no-shadow
import { NextFunction, Request, Response } from 'express';
import { User } from '../models/User';
import { getByEmail, registerUser } from '../services/userService';
import 'dotenv/config';
import { generateAccessToken } from '../services/jwtService';

import bcrypt from 'bcrypt';
import { ApiError } from '../exceptions/ApiError';

const validatePassword = (password: string) => {
  if (!password) {
    return 'Password is required';
  }

  if (password.length < 6) {
    return 'At least 6 characters';
  }
};

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return 'Email is required';
  }

  if (!emailRegex.test(email)) {
    return 'Email is not valid';
  }
};

export const register = async(
  req: Request, res: Response, next: NextFunction,
) => {
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
    await registerUser({ userName, email, password });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);

    errors.email = 'Email is already taken';
    res.send(errors);

    return;
  }

  res.send({ message: 'User has been registered' });
};

export const activate = async(
  req: Request, res: Response, next: NextFunction,
) => {
  const { activationToken } = req.params;

  const user = await User.findOne({
    where: { activationToken },
  });

  if (!user) {
    res.sendStatus(404).send({ message: 'activation was failed' });

    return;
  }

  user.activationToken = null;
  await user.save();

  res.redirect(`https://fe-feb23-the-first-attempt-approve.github.io/react_phone-catalog/#/`);

  res.send(user);
};

export const login = async(
  req: Request, res: Response, next: NextFunction,
) => {
  const { email, password } = req.body;

  const errors = {
    email: '',
    password: '',
    activationToken: '',
  };

  const user = await getByEmail(email);

  if (!user) {
    errors.email = 'User with email does not exist';
    res.send(errors);

    throw ApiError.BadRequest('User with email does not exist', {
      email: 'User with email does not exist',
    });
  }

  if (user.activationToken) {
    errors.activationToken = 'You should activate your account';

    res.send(errors);

    return;
  }

  try {
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      errors.password = 'Password is wrong';
      res.send(errors);

      throw ApiError.BadRequest('Password is wrong', {
        password: 'Password is wrong',
      });
    }

    const accessToken = generateAccessToken(user);

    res.send({
      user,
      accessToken,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};
