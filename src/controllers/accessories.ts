import {
  findAll, findById, findRange, findMinMaxPrices, findHot,
} from '../services/accessories';
// eslint-disable-next-line no-shadow
import { Request, Response } from 'express';
import { SortType } from '../types.ts/SortType';

export const getAll = async(req: Request, res: Response) => {
  const accessories = await findAll();

  res.send(accessories);
};

export const getAllCount = async(req: Request, res: Response) => {
  const accessoriesCount = (await findAll()).length;

  res.send({ accessoriesCount });
};

export const getHot = async(req: Request, res: Response) => {
  const hotAccessories = await findHot();

  res.send(hotAccessories);
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

  const accessoriesInfo = await findRange(
    Number(page),
    Number(perPage),
    sort as SortType,
    Number(maxPrice),
    Number(minPrice),
  );

  res.send(accessoriesInfo);
};

export const getOne = async(req: Request, res: Response) => {
  const { accessoryId } = req.params;
  const foundAccessory = await findById(accessoryId);

  if (!foundAccessory) {
    res.sendStatus(404);

    return;
  }

  res.send(foundAccessory);
};
