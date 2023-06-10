import { Phone } from '../models/Phone';
import { ProductDetail } from '../models/ProductDetail';

export const findAll = () => {
  return Phone.findAll();
};

export const findById = (id: string) => {
  return ProductDetail.findByPk(id);
};
