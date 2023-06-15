import {
  findAll, findById, findRange, findMinMaxPrices, findHot,
} from '../services/phones';
// eslint-disable-next-line no-shadow
import { Request, Response } from 'express';
import { SortType } from '../types.ts/SortType';

export const getAll = async(req: Request, res: Response) => {
  const phones = await findAll();

  res.send(phones);
};

export const getAllCount = async(req: Request, res: Response) => {
  const phonesCount = (await findAll()).length;

  res.send({ phonesCount });
};

export const getHot = async(req: Request, res: Response) => {
  const hotPhones = await findHot();

  res.send(hotPhones);
};

export const getMinMaxPrices = async(req: Request, res: Response) => {
  const [min, max] = await findMinMaxPrices();

  res.send({ min, max });
};

export const getRange = async(req: Request, res: Response) => {
  const [min, max] = await findMinMaxPrices();

  const {
    page = 1,
    perPage = 8,
    sort = SortType.New,
    maxPrice = max,
    minPrice = min,
  } = req.query;

  const phonesInfo = await findRange(
    Number(page),
    Number(perPage),
    sort as SortType,
    Number(maxPrice),
    Number(minPrice),
  );

  res.send(phonesInfo);
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
