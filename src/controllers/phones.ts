import {
  findAll, findById, findRange, getMinMaxPrices,
} from '../services/phones';
// eslint-disable-next-line no-shadow
import { Request, Response } from 'express';
import { SortType } from '../types.ts/SortType';

export const getAll = async(req: Request, res: Response) => {
  const phones = await findAll();

  res.send(phones);
};

export const getRange = async(req: Request, res: Response) => {
  const [min, max] = await getMinMaxPrices();

  const {
    page = 1,
    perPage = 8,
    sort = SortType.New,
    maxPrice = max,
    minPrice = min,
  } = req.query;

  const phonesPageInfo = await findRange(
    Number(page),
    Number(perPage),
    sort as SortType,
    Number(maxPrice),
    Number(minPrice),
  );

  res.send(phonesPageInfo);
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
