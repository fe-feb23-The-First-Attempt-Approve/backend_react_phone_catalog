import { findAll } from '../services/tablets';
// eslint-disable-next-line no-shadow
import { Request, Response } from 'express';

export const getAll = async(req: Request, res: Response) => {
  const tablets = await findAll();

  res.send(tablets);
};
