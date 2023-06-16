"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSortedItems = exports.getFilteredItemsByPrice = exports.getSlice = void 0;
const SortType_1 = require("../types/SortType");
const getSlice = (items, currentPage, perPage) => {
    const firstVisibleItemIndex = (currentPage - 1) * perPage;
    const lastItemIndex = firstVisibleItemIndex + perPage;
    const lastVisibleItemIndex = lastItemIndex > items.length
        ? items.length
        : lastItemIndex;
    return items.slice(firstVisibleItemIndex, lastVisibleItemIndex);
};
exports.getSlice = getSlice;
const getFilteredItemsByPrice = (items, priceRange) => {
    const [min, max] = Array.isArray(priceRange) ? priceRange : [0, priceRange];
    return items.filter(item => item.price >= min && item.price <= max);
};
exports.getFilteredItemsByPrice = getFilteredItemsByPrice;
const getSortedItems = (items, sortType) => {
    const sortedItems = [...items];
    sortedItems.sort((currentItem, nextItem) => {
        switch (sortType) {
            case SortType_1.SortType.Name:
                return currentItem.name.localeCompare(nextItem.name);
            case SortType_1.SortType.New:
                return nextItem.year - currentItem.year;
            case SortType_1.SortType.Old:
                return currentItem.year - nextItem.year;
            case SortType_1.SortType.HightPrice:
                return nextItem.price - currentItem.price;
            case SortType_1.SortType.LowPrice:
                return currentItem.price - nextItem.price;
            default: throw new Error('Wrong sort type!');
        }
    });
    return sortedItems;
};
exports.getSortedItems = getSortedItems;
