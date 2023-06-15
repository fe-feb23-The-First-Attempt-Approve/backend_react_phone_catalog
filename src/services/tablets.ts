import { Tablet } from '../models/Tablet';
import { TabletDetail } from '../models/TabletDetail';
import { SortType } from '../types.ts/SortType';
import {
  getFilteredItemsByPrice, getSortedItems, getSlice,
} from '../utils/pagination';

export const findAll = () => {
  return Tablet.findAll();
};

export const findById = (id: string) => {
  return TabletDetail.findByPk(id);
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
  const tablets = await findAll();

  const allTabletsCount = tablets.length;

  let visibleTablets = getFilteredItemsByPrice(tablets, [minPrice, maxPrice]);

  const filteredCount = visibleTablets.length;

  visibleTablets = getSortedItems(visibleTablets, sort);

  visibleTablets = getSlice(visibleTablets, currentPage, perPage);

  return { allTabletsCount, filteredCount, visibleTablets };
};
