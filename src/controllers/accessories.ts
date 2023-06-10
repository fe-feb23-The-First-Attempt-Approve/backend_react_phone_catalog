import { findAll } from '../services/accessories';
// eslint-disable-next-line no-shadow
import { Request, Response } from 'express';

export const getAll = async(req: Request, res: Response) => {
  const accessories = await findAll();

  res.send(accessories);
};
