import { Op } from 'sequelize';
import { Product } from '../models/Product';
import { SortType } from '../types/SortType';
import {
  getFilteredItemsByPrice, getSortedItems, getSlice,
} from '../utils/pagination';

export const findAll = () => {
  return Product.findAll();
};

export const findByIds = (ids: string[]) => {
  return Product.findAll({ where: {
    itemId: {
      [Op.in]: ids,
    },
  } });
};

export const findAllByCategory = (productCategory: string) => {
  return Product.findAll({ where: {
    category: {
      [Op.in]: [productCategory],
    },
  } });
};

export const findMinMaxPrices = async(category: string) => {
  const phones = await findAllByCategory(category);
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
  category: string,
) => {
  const products = await findAllByCategory(category);

  const allProductsCount = products.length;

  let visibleProducts = getFilteredItemsByPrice(products, [minPrice, maxPrice]);

  const filteredCount = visibleProducts.length;

  visibleProducts = getSortedItems(visibleProducts, sort);

  visibleProducts = getSlice(visibleProducts, currentPage, perPage);

  return { allProductsCount, filteredCount, visibleProducts };
};
