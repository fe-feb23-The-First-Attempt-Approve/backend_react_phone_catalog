import { Order } from 'sequelize';
import { SortType } from '../types.ts/SortType';

export const getOrder = (sortBy: SortType): Order => {
  switch (sortBy) {
    case SortType.HightPrice:
      return [['price', 'DESC']];
    case SortType.LowPrice:
      return [['price', 'ASC']];
    case SortType.Name:
      return [['name', 'ASC']];
    case SortType.New:
      return [['year', 'DESC']];
    case SortType.Old:
      return [['year', 'ASC']];

    default:
      throw new Error('Wrong sort type!');
  }
};
