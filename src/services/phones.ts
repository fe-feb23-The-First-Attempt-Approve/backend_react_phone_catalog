import { PhoneDetail } from '../models/PhoneDetail';

export const findById = (id: string) => {
  return PhoneDetail.findByPk(id);
};
