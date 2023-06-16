import {
  findAllByCategory,
  findMinMaxPrices,
  findRange,
} from '../services/products';
import { findById } from '../services/tablets';
// eslint-disable-next-line no-shadow
import { Request, Response } from 'express';
import { SortType } from '../types/SortType';

const category = 'tablets';

export const getOne = async(req: Request, res: Response) => {
  const { itemId } = req.params;
  const foundProduct = await findById(itemId);

  if (!foundProduct) {
    res.sendStatus(404);

    return;
  }

  res.send(foundProduct);
};

export const getAllCount = async(req: Request, res: Response) => {
  const productsCount = (await findAllByCategory(category)).length;

  res.send({ productsCount });
};

export const getMinMaxPrices = async(req: Request, res: Response) => {
  const [min, max] = await findMinMaxPrices(category);

  res.send({ min, max });
};

export const getRange = async(req: Request, res: Response) => {
  const [min, max] = await findMinMaxPrices(category);

  const {
    page = 1,
    perPage = 8,
    sort = SortType.New,
    maxPrice = max,
    minPrice = min,
  } = req.query;

  const productsInfo = await findRange(
    Number(page),
    Number(perPage),
    sort as SortType,
    Number(maxPrice),
    Number(minPrice),
    category,
  );

  res.send(productsInfo);
};
