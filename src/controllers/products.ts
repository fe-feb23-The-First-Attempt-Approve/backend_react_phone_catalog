import { findAll, findByIds, findHot } from '../services/products';
// eslint-disable-next-line no-shadow
import { Request, Response } from 'express';

export const getAll = async(req: Request, res: Response) => {
  const products = await findAll();

  res.send(products);
};

export const getByIds = async(req: Request, res: Response) => {
  const { ids } = req.body;
  const products = await findByIds(ids);

  res.send(products);
};

export const getHot = async(req: Request, res: Response) => {
  const hotProducts = await findHot();

  res.send(hotProducts);
};
