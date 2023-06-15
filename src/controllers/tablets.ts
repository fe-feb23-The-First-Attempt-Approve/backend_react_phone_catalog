import {
  findAll, findById, findRange, findMinMaxPrices, findHot,
} from '../services/tablets';
// eslint-disable-next-line no-shadow
import { Request, Response } from 'express';
import { SortType } from '../types.ts/SortType';

export const getAll = async(req: Request, res: Response) => {
  const tablets = await findAll();

  res.send(tablets);
};

export const getAllCount = async(req: Request, res: Response) => {
  const tabletsCount = (await findAll()).length;

  res.send({ tabletsCount });
};

export const getHot = async(req: Request, res: Response) => {
  const hotTablets = await findHot();

  res.send(hotTablets);
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

  const tabletsInfo = await findRange(
    Number(page),
    Number(perPage),
    sort as SortType,
    Number(maxPrice),
    Number(minPrice),
  );

  res.send(tabletsInfo);
};

export const getOne = async(req: Request, res: Response) => {
  const { tabletId } = req.params;
  const foundTablet = await findById(tabletId);

  if (!foundTablet) {
    res.sendStatus(404);

    return;
  }

  res.send(foundTablet);
};
