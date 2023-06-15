import { Phone } from '../models/Phone';
import { ProductDetail } from '../models/ProductDetail';
import { SortType } from '../types.ts/SortType';
import {
  getFilteredItemsByPrice, getSortedItems, getSlice,
} from '../utils/pagination';

export const findAll = () => {
  return Phone.findAll();
};

export const findById = (id: string) => {
  return ProductDetail.findByPk(id);
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
  const phones = await findAll();

  const allPhonesCount = phones.length;

  let visiblePhones = getFilteredItemsByPrice(phones, [minPrice, maxPrice]);

  const filteredCount = visiblePhones.length;

  visiblePhones = getSortedItems(visiblePhones, sort);

  visiblePhones = getSlice(visiblePhones, currentPage, perPage);

  return { allPhonesCount, filteredCount, visiblePhones };
};
