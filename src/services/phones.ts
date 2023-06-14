import { Order, Op } from 'sequelize';
import { Phone } from '../models/Phone';
import { ProductDetail } from '../models/ProductDetail';
import { SortType } from '../types.ts/SortType';

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

export const findRange = async(
  currentPage: number,
  perPage: number,
  sort: SortType,
  maxPrice: number,
  minPrice: number,
) => {
  const offset = currentPage ? (currentPage - 1) * perPage : 0;
  const order: Order = getOrder(sort);
  const allPhonesCount = (await Phone.findAll()).length;
  const phones = await Phone.findAll({
    where: {
      price: {
        [Op.between]: [minPrice, maxPrice],
      },
    },
    offset,
    limit: perPage,
    order,
  });

  return { allPhonesCount, phones };
};
