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

export const getMinMaxPrices = async() => {
  const phones = await findAll();
  const prices = phones.map(item => item.price);

  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return [min, max];
};

export const findRange = async(
  currentPage: number,
  perPage: number,
  sort: SortType,
  maxPrice: number,
  minPrice: number,
) => {
  const phones = await findAll();
  const phonesCount = phones.length;

  let visiblePhones = getFilteredItemsByPrice(phones, [minPrice, maxPrice]);

  visiblePhones = getSortedItems(visiblePhones, sort);

  visiblePhones = getSlice(visiblePhones, currentPage, perPage);

  return { phonesCount, visiblePhones };
};
