import { AccessoryDetails } from '../models/AccessoryDetail';

export const findById = (id: string) => {
  return AccessoryDetails.findByPk(id);
};
