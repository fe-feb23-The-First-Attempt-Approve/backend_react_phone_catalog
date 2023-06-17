import { findAll, findByIds, findByQuery, findHot } from '../services/products';
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

export const getByQuery = async(req: Request, res: Response) => {
  const { query = '' } = req.query;

  if (!query) {
    res.sendStatus(400);
  }

  const products = await findByQuery(query.toString());

  res.send(products);
};
