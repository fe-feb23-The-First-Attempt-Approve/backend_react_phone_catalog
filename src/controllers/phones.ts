import { findAll, findById } from '../services/phones';
// eslint-disable-next-line no-shadow
import { Request, Response } from 'express';

export const getAll = async(req: Request, res: Response) => {
  const phones = await findAll();

  res.send(phones);
};

export const getOne = async(req: Request, res: Response) => {
  const { phoneId } = req.params;
  const foundPhone = await findById(phoneId);

  if (!foundPhone) {
    res.sendStatus(404);

    return;
  }

  res.send(foundPhone);
};
