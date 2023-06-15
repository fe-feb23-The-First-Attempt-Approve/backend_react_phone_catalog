import { Accessory } from '../models/Accessory';
import { AccessoryDetails } from '../models/AccessoryDetail';
import { SortType } from '../types.ts/SortType';
import {
  getFilteredItemsByPrice, getSortedItems, getSlice,
} from '../utils/pagination';

export const findAll = () => {
  return Accessory.findAll();
};

export const findById = (id: string) => {
  return AccessoryDetails.findByPk(id);
};

export const findMinMaxPrices = async() => {
  const phones = await findAll();
  const prices = phones.map(item => item.price);

  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return [min, max];
};

export const findHot = async() => {
  const phones = await findAll();

  const sorted = phones.sort((itemA, itemB) => {
    const discountA = itemA.fullPrice - itemA.price;
    const discountB = itemB.fullPrice - itemB.price;

    return discountB - discountA;
  });

  return sorted;
};

export const findRange = async(
  currentPage: number,
  perPage: number,
  sort: SortType,
  maxPrice: number,
  minPrice: number,
) => {
  const accessories = await findAll();

  const allAccessoriesCount = accessories.length;

  let visibleAccessories = getFilteredItemsByPrice(
    accessories,
    [minPrice, maxPrice],
  );

  const filteredCount = visibleAccessories.length;

  visibleAccessories = getSortedItems(visibleAccessories, sort);

  visibleAccessories = getSlice(visibleAccessories, currentPage, perPage);

  return { allAccessoriesCount, filteredCount, visibleAccessories };
};
