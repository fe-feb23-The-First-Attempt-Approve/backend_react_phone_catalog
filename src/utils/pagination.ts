import { Product } from '../models/Product';
import { SortType } from '../types/SortType';

export const getSlice = (
  items: Product[], currentPage: number, perPage: number,
) => {
  const firstVisibleItemIndex = (currentPage - 1) * perPage;
  const lastItemIndex = firstVisibleItemIndex + perPage;
  const lastVisibleItemIndex = lastItemIndex > items.length
    ? items.length
    : lastItemIndex;

  return items.slice(firstVisibleItemIndex, lastVisibleItemIndex);
};

export const getFilteredItemsByPrice = (
  items: Product[], priceRange: number[] | number,
) => {
  const [min, max] = Array.isArray(priceRange) ? priceRange : [0, priceRange];

  return items.filter(item => item.price >= min && item.price <= max);
};

export const getSortedItems = (
  items: Product[],
  sortType: SortType,
): Product[] => {
  const sortedItems = [...items];

  sortedItems.sort((currentItem, nextItem) => {
    switch (sortType) {
      case SortType.Name:
        return currentItem.name.localeCompare(nextItem.name);

      case SortType.New:
        return nextItem.year - currentItem.year;

      case SortType.Old:
        return currentItem.year - nextItem.year;

      case SortType.HightPrice:
        return nextItem.price - currentItem.price;

      case SortType.LowPrice:
        return currentItem.price - nextItem.price;

      default: throw new Error('Wrong sort type!');
    }
  });

  return sortedItems;
};
